import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { fetchCalendlyInvitee } from '../server/lib/calendlyBooking.js';
import { trackBooking } from '../src/utils/bookingTracking.js';

const uuid = '12345678-1234-1234-1234-123456789012';
const eventUri = 'https://api.calendly.com/scheduled_events/12345678-1234-1234-1234-123456789099';
const redirect = { inviteeUuid: uuid, email: 'test@example.com', startTime: '2026-10-01T10:00:00Z' };

test('redirect resolves the exact invitee and uses email and start time filters', async () => {
  process.env.CALENDLY_API_TOKEN = 'test-token';
  const original = global.fetch;
  const urls = [];
  global.fetch = async (url) => {
    urls.push(String(url));
    const result = urls.length === 1 ? { resource: { uri: 'https://api.calendly.com/users/test' } }
      : urls.length === 2 ? { collection: [{ uri: eventUri }] }
      : { resource: { uri: `${eventUri}/invitees/${uuid}`, email: redirect.email, status: 'active' } };
    return { ok: true, json: async () => result };
  };
  try {
    assert.equal((await fetchCalendlyInvitee(null, redirect)).email, redirect.email);
    assert.equal(new URL(urls[1]).searchParams.get('invitee_email'), redirect.email);
    assert.equal(new URL(urls[1]).searchParams.get('min_start_time'), '2026-10-01T09:59:59.000Z');
    assert.equal(urls[2], `${eventUri}/invitees/${uuid}`);
  } finally { global.fetch = original; delete process.env.CALENDLY_API_TOKEN; }
});

test('invalid URI and missing redirect details never fall back to another booking', async () => {
  process.env.CALENDLY_API_TOKEN = 'test-token';
  const original = global.fetch;
  global.fetch = () => { throw new Error('Unexpected fetch'); };
  try {
    assert.equal(await fetchCalendlyInvitee('https://example.com/invitees/test'), null);
    assert.equal(await fetchCalendlyInvitee(null, {}), null);
    assert.equal(await fetchCalendlyInvitee(null, null), null);
  } finally { global.fetch = original; delete process.env.CALENDLY_API_TOKEN; }
});

test('redirect PII is removed before analytics while booking details stay available in memory', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  const window = {
    location: { pathname: '/booking-confirmed', search: `?invitee_uuid=${uuid}&invitee_email=test%40example.com&invitee_full_name=Test&answer_1=private&event_start_time=2026-10-01T10%3A00%3A00Z&utm_source=facebook` },
    history: { state: null, replaceState: (_, __, url) => { window.cleanUrl = url; } },
  };
  vm.runInNewContext(script, { window, URLSearchParams });
  assert.deepEqual(JSON.parse(JSON.stringify(window.__calendlyRedirect)), redirect);
  assert.equal(window.cleanUrl, '/booking-confirmed?utm_source=facebook');
  assert.ok(html.indexOf(script) < html.indexOf('gtag('));
});

test('booking tracking deduplicates embedded and redirect events and rejects unverified visits', async () => {
  const originalFetch = global.fetch;
  const storage = new Map();
  const calls = [];
  global.localStorage = { getItem: (key) => storage.get(key), setItem: (key, value) => storage.set(key, value) };
  global.document = { cookie: '' };
  global.window = {
    location: { origin: 'https://www.devready.gr', pathname: '/booking-confirmed' },
    fbq: (...args) => calls.push(['meta', ...args]),
    gtag: (...args) => calls.push(['ga', ...args]),
    ttq: { track: (...args) => calls.push(['tiktok', ...args]) },
  };
  global.fetch = async (_, options) => { calls.push(['capi', JSON.parse(options.body)]); return { ok: true, status: 200 }; };
  try {
    await Promise.all([trackBooking({ redirectBooking: redirect }), trackBooking({ redirectBooking: redirect })]);
    await trackBooking({ calendlyInviteeUri: `${eventUri}/invitees/${uuid}` });
    assert.equal(calls.length, 4);
    assert.equal(calls.find(c => c[0] === 'capi')[1].eventID, `cal_${uuid}`);
    assert.equal(calls.find(c => c[0] === 'meta')[4].eventID, `cal_${uuid}`);
    await trackBooking({});
    assert.equal(calls.length, 4);
    global.fetch = async () => ({ ok: false, status: 422 });
    await trackBooking({ redirectBooking: { ...redirect, inviteeUuid: uuid.replace(/2$/, '3') } });
    assert.equal(calls.length, 4);
  } finally {
    global.fetch = originalFetch;
    delete global.window; delete global.document; delete global.localStorage;
  }
});

test('API rejects an unverified redirect without sending a Meta conversion', async () => {
  const { default: handler } = await import('../api/track-booking.js');
  const originals = { ...process.env };
  process.env.META_PIXEL_ID = 'test';
  process.env.META_CAPI_ACCESS_TOKEN = 'test';
  delete process.env.CALENDLY_API_TOKEN;
  const res = { status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } };
  try {
    await handler({ method: 'POST', body: { eventID: `cal_${uuid}`, redirectBooking: redirect } }, res);
    assert.equal(res.code, 422);
    assert.equal(res.body.error, 'Unable to verify Calendly booking');
  } finally {
    for (const key of ['META_PIXEL_ID', 'META_CAPI_ACCESS_TOKEN', 'CALENDLY_API_TOKEN']) {
      if (originals[key] === undefined) delete process.env[key]; else process.env[key] = originals[key];
    }
  }
});

test('mismatched and cancelled invitees cannot verify a redirect booking', async () => {
  const original = global.fetch;
  process.env.CALENDLY_API_TOKEN = 'test-token';
  try {
    for (const resource of [
      { email: 'different@example.com', status: 'active' },
      { email: redirect.email, status: 'canceled' },
    ]) {
      global.fetch = async (url) => ({ ok: true, json: async () =>
        String(url).endsWith('/users/me') ? { resource: { uri: 'https://api.calendly.com/users/test' } } :
        String(url).includes('/invitees/') ? { resource } : { collection: [{ uri: eventUri }] },
      });
      assert.equal(await fetchCalendlyInvitee(null, redirect), null);
    }
  } finally { global.fetch = original; delete process.env.CALENDLY_API_TOKEN; }
});
