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
    const { eventID, fbp, fbc, sourceUrl } = body;

    if (!eventID) {
      return res.status(400).json({ error: "Missing eventID" });
    }

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

    const eventData = {
      event_name: "Schedule",
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventID,
      action_source: "website",
      event_source_url: sourceUrl || "https://www.devready.gr/contact",
      user_data: userData,
    };

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
      hasIp: !!clientIp,
      hasUserAgent: !!userAgent,
      sourceUrl: sourceUrl || "default",
      result,
    });
    return res.status(200).json({ ok: true, eventID });
  } catch (error) {
    console.error("Track booking error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
