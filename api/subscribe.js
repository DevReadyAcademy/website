// Vercel Serverless Function for Custom Subscription API Integration
// This endpoint handles newsletter subscriptions

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validate email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const CUSTOM_API_URL = process.env.CUSTOM_SUBSCRIBE_API_URL;
  const CUSTOM_API_KEY = process.env.CUSTOM_SUBSCRIBE_API_KEY;

  if (!CUSTOM_API_URL || !CUSTOM_API_KEY) {
    console.error('Missing Custom Subscription API configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Subscribe user to custom endpoint
    const response = await fetch(CUSTOM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CUSTOM_API_KEY,
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    // Handle API response
    if (!response.ok) {
      const errorMessage = (data.message || data.msg || '').toLowerCase();
      if (response.status === 409 || errorMessage.includes('already')) {
        return res.status(200).json({
          success: true,
          messageKey: 'alreadySubscribed'
        });
      }

      console.error('Subscription API error:', data);
      return res.status(response.status).json({
        error: data.message || data.msg || 'Failed to subscribe',
        messageKey: 'error'
      });
    }

    // Success
    return res.status(200).json({
      success: true,
      messageKey: 'success'
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({
      error: 'An error occurred. Please try again.'
    });
  }
}
