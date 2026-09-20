const inFlight = new Map();
const completed = new Set();
const cookie = (name) => document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))?.[1] || '';

function wasSent(key) {
  if (completed.has(key)) return true;
  try { return localStorage.getItem(key) === '1'; } catch { return false; }
}
function markSent(key) {
  completed.add(key);
  try { localStorage.setItem(key, '1'); } catch { /* In-memory deduplication remains available. */ }
}

function sendBrowserEvents(eventID, affiliate) {
    const channels = [
      ['meta', () => typeof window.fbq === 'function', () => window.fbq('track', 'Schedule', {
        content_name: 'Book a Call', content_category: 'calendly',
      }, { eventID })],
      ['ga', () => typeof window.gtag === 'function', () => window.gtag('event', 'booked_a_call', {
        event_category: 'engagement', event_label: 'calendly',
        affiliate_id: affiliate?.affiliateId, referral_code: affiliate?.referralCode,
        affiliate_click_id: affiliate?.clickId,
      })],
      ['tiktok', () => typeof window.ttq?.track === 'function', () => window.ttq.track('SubmitForm', {
        content_name: 'Book a Call',
      })],
    ];
    for (const [name, available, send] of channels) {
      const key = `${eventID}_${name}`;
      if (!wasSent(key) && available()) {
        try { send(); markSent(key); } catch { /* One pixel must not prevent other channels. */ }
      }
    }
}

export function trackBooking({ calendlyInviteeUri, redirectBooking, affiliate }) {
  const inviteeId = calendlyInviteeUri?.match(/\/invitees\/([a-z0-9-]+)$/i)?.[1] || redirectBooking?.inviteeUuid;
  if (!inviteeId || !/^[a-z0-9-]{16,80}$/i.test(inviteeId)) return Promise.resolve();
  const eventID = `cal_${inviteeId}`;
  if (inFlight.has(eventID)) return inFlight.get(eventID);

  const task = (async () => {
    if (!redirectBooking) sendBrowserEvents(eventID, affiliate);
    const serverKey = `${eventID}_capi`;
    if (!wasSent(serverKey)) {
      let fbc = cookie('_fbc');
      try { fbc ||= localStorage.getItem('_fbc_backup') || ''; } catch { /* Storage may be disabled. */ }
      // A failed send remains retryable, using the same Meta deduplication ID.
      let response;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          response = await fetch('/api/track-booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            keepalive: true,
            body: JSON.stringify({
              eventID, fbp: cookie('_fbp'), fbc,
              sourceUrl: window.location.origin + window.location.pathname,
              calendlyInviteeUri, redirectBooking, affiliate,
            }),
          });
          if (response.ok || response.status < 500) break;
        } catch { /* Retry transient network errors once. */ }
      }
      if (response?.ok) markSent(serverKey);
      // Only verified redirect bookings may generate browser conversion events.
      else if (redirectBooking) return;
    }
    if (redirectBooking) sendBrowserEvents(eventID, affiliate);
  })().finally(() => inFlight.delete(eventID));
  inFlight.set(eventID, task);
  return task;
}
