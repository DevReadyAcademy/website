const UUID = /^[a-z0-9-]{16,80}$/i;

export async function fetchCalendlyInvitee(uri, redirect) {
  const token = process.env.CALENDLY_API_TOKEN;
  if (!token) return null;
  const headers = { Authorization: `Bearer ${token}` };
  const get = async (url) => {
    const response = await fetch(url, { headers, signal: AbortSignal.timeout(8000) });
    return response.ok ? response.json() : null;
  };

  try {
    if (uri) {
      const url = new URL(uri);
      if (url.origin !== 'https://api.calendly.com' || url.search || url.hash ||
          !/^\/scheduled_events\/[a-z0-9-]+\/invitees\/[a-z0-9-]+$/i.test(url.pathname)) return null;
      return (await get(url.href))?.resource || null;
    }
    if (!redirect || !UUID.test(redirect.inviteeUuid || '') ||
        typeof redirect.email !== 'string' || redirect.email.length > 254 ||
        !redirect.email.includes('@')) return null;
    const start = Date.parse(redirect.startTime);
    if (!Number.isFinite(start)) return null;
    const user = (await get('https://api.calendly.com/users/me'))?.resource?.uri;
    if (!user) return null;
    const params = new URLSearchParams({
      user,
      invitee_email: redirect.email,
      min_start_time: new Date(start - 1000).toISOString(),
      max_start_time: new Date(start + 1000).toISOString(),
      status: 'active',
      count: '100',
    });
    const events = await get(`https://api.calendly.com/scheduled_events?${params}`);
    for (const event of events?.collection || []) {
      // Retrieve the exact invitee, including for group events with many invitees.
      if (!/^https:\/\/api\.calendly\.com\/scheduled_events\/[a-z0-9-]+$/i.test(event.uri)) continue;
      const invitee = (await get(`${event.uri}/invitees/${redirect.inviteeUuid}`))?.resource;
      if (invitee?.status === 'active' && invitee.email?.toLowerCase() === redirect.email.toLowerCase()) return invitee;
    }
    return null;
  } catch {
    return null;
  }
}
