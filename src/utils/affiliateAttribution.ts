export const AFFILIATE_ATTRIBUTION_DAYS = 60;

const STORAGE_KEY = "devready_affiliate_attribution";
const DAY_IN_MS = 24 * 60 * 60 * 1000;

export type AffiliateAttribution = {
  affiliateId: string;
  referralCode: string;
  discountAmount: number;
  clickId: string;
  firstTouchAt: string;
  lastTouchAt: string;
  expiresAt: string;
  landingPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
};

type AffiliateDefinition = {
  id: string;
  referralCode: string;
  discountAmount: number;
  aliases: string[];
};

const affiliates: AffiliateDefinition[] = [
  {
    id: "artemis",
    referralCode: "ARTEMIS",
    discountAmount: 30,
    aliases: ["artemis", "artemiscode"],
  },
];

const normalize = (value: string | null | undefined) =>
  (value || "").trim().toLowerCase();

const findAffiliate = (value: string | null | undefined) => {
  const candidate = normalize(value);
  if (!candidate) return null;

  return affiliates.find(
    (affiliate) =>
      normalize(affiliate.id) === candidate ||
      normalize(affiliate.referralCode) === candidate ||
      affiliate.aliases.some((alias) => normalize(alias) === candidate),
  ) || null;
};

const createClickId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `aff_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
};

const readStoredAttribution = (): AffiliateAttribution | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const attribution = JSON.parse(raw) as AffiliateAttribution;
    if (!attribution.expiresAt || Date.parse(attribution.expiresAt) <= Date.now()) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return attribution;
  } catch {
    return null;
  }
};

const storeAffiliate = (
  affiliate: AffiliateDefinition,
  params?: URLSearchParams,
): AffiliateAttribution | null => {
  if (typeof window === "undefined") return null;

  const now = new Date();
  const existing = readStoredAttribution();
  const isSameAffiliate = existing?.affiliateId === affiliate.id;

  const attribution: AffiliateAttribution = {
    affiliateId: affiliate.id,
    referralCode: affiliate.referralCode,
    discountAmount: affiliate.discountAmount,
    clickId: isSameAffiliate ? existing.clickId : createClickId(),
    firstTouchAt: isSameAffiliate ? existing.firstTouchAt : now.toISOString(),
    lastTouchAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + AFFILIATE_ATTRIBUTION_DAYS * DAY_IN_MS).toISOString(),
    landingPage: window.location.href,
    utmSource: params?.get("utm_source") || affiliate.id,
    utmMedium: params?.get("utm_medium") || "affiliate",
    utmCampaign: params?.get("utm_campaign") || "devready_affiliate",
    utmContent: params?.get("utm_content") || affiliate.referralCode,
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    return attribution;
  }

  return attribution;
};

export const captureAffiliateAttribution = (): AffiliateAttribution | null => {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const affiliate =
    findAffiliate(params.get("ref")) ||
    findAffiliate(params.get("affiliate")) ||
    findAffiliate(params.get("code")) ||
    findAffiliate(params.get("coupon")) ||
    findAffiliate(params.get("utm_source"));

  if (!affiliate) return readStoredAttribution();
  return storeAffiliate(affiliate, params);
};

export const getAffiliateAttribution = () => readStoredAttribution();

export const applyReferralCode = (code: string): AffiliateAttribution | null => {
  const affiliate = findAffiliate(code);
  if (!affiliate) return null;
  return storeAffiliate(affiliate);
};

export const buildCalendlyUrl = (
  baseUrl: string,
  attribution: AffiliateAttribution | null,
) => {
  const url = new URL(baseUrl);
  if (!attribution) return url.toString();

  url.searchParams.set("utm_source", attribution.utmSource);
  url.searchParams.set("utm_medium", attribution.utmMedium);
  url.searchParams.set("utm_campaign", attribution.utmCampaign);
  url.searchParams.set("utm_content", attribution.utmContent);
  url.searchParams.set("utm_term", attribution.clickId);
  // Calendly uses a1 for the first custom invitee question.
  url.searchParams.set("a1", attribution.referralCode);

  return url.toString();
};
