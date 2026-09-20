import { fetchCalendlyInvitee } from "../server/lib/calendlyBooking.js";
import crypto from "crypto";

const META_API_VERSION = "v21.0";

function sha256Hash(value) {
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

export default async function handler(req, res) {
  // Allow POST and sendBeacon (which sends POST)
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.error("Missing META_PIXEL_ID or META_CAPI_ACCESS_TOKEN");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { eventID, fbp, fbc, sourceUrl, calendlyInviteeUri, affiliate, redirectBooking } = body;

    if (!eventID) {
      return res.status(400).json({ error: "Missing eventID" });
    }

    // Redirects must resolve to an actual booking in our Calendly account.
    const calendlyInvitee = await fetchCalendlyInvitee(calendlyInviteeUri, redirectBooking);
    if (redirectBooking && !calendlyInvitee) {
      return res.status(422).json({ error: "Unable to verify Calendly booking" });
    }
    const bookingId = calendlyInvitee?.uri?.split('/').pop();
    const canonicalEventID = bookingId ? `cal_${bookingId}` : eventID;

    // Build user_data from request headers and cookies for Meta matching
    const userData = {};

    // Client IP — used by Meta for matching
    const clientIp =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      req.socket?.remoteAddress;
    if (clientIp) userData.client_ip_address = clientIp;

    // User agent — used by Meta for matching
    const userAgent = req.headers["user-agent"];
    if (userAgent) userData.client_user_agent = userAgent;

    // fbp cookie (Meta browser ID) — strong matching signal
    if (fbp) userData.fbp = fbp;

    // fbc cookie (Meta click ID from ad click) — strongest matching signal
    if (fbc) userData.fbc = fbc;

    // External ID — helps Meta deduplicate and match across devices
    if (eventID) userData.external_id = [sha256Hash(canonicalEventID)];

    // Match only the exact booking; never use an unrelated latest invitee.
    const inviteeEmail = calendlyInvitee?.email || null;
    if (inviteeEmail) {
      userData.em = [sha256Hash(inviteeEmail)];
    }

    const eventData = {
      event_name: "Schedule",
      event_time: Math.floor(Date.now() / 1000),
      event_id: canonicalEventID,
      action_source: "website",
      event_source_url: sourceUrl || "https://www.devready.gr/contact",
      user_data: userData,
    };

    if (affiliate?.affiliateId || affiliate?.referralCode) {
      eventData.custom_data = {
        affiliate_id: String(affiliate.affiliateId || "").slice(0, 80),
        referral_code: String(affiliate.referralCode || "").slice(0, 80),
        affiliate_click_id: String(affiliate.clickId || "").slice(0, 120),
      };
    }

    const requestBody = {
      data: [eventData],
    };

    const testCode = process.env.META_TEST_EVENT_CODE;
    if (testCode) {
      requestBody.test_event_code = testCode;
    }

    const url = `https://graph.facebook.com/${META_API_VERSION}/${pixelId}/events?access_token=${accessToken}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Meta CAPI error:", result);
      return res.status(502).json({ error: "Failed to send to Meta" });
    }

    console.log("Meta CAPI event sent:", {
      eventID,
      fbp: fbp || "MISSING",
      fbc: fbc || "MISSING",
      hasEmail: !!inviteeEmail,
      hasIp: !!clientIp,
      hasUserAgent: !!userAgent,
      sourceUrl: sourceUrl || "default",
      affiliateId: affiliate?.affiliateId || calendlyInvitee?.tracking?.utm_source || "NONE",
      referralCode: affiliate?.referralCode || calendlyInvitee?.tracking?.utm_content || "NONE",
      affiliateClickId: affiliate?.clickId || calendlyInvitee?.tracking?.utm_term || "NONE",
      result,
    });
    return res.status(200).json({
      ok: true,
      eventID: canonicalEventID,
      affiliateTracked: Boolean(
        affiliate?.affiliateId || calendlyInvitee?.tracking?.utm_source,
      ),
    });
  } catch (error) {
    console.error("Track booking error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
