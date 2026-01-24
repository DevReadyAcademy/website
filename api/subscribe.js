// Vercel Serverless Function for Mailchimp API Integration
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

  // Get Mailchimp credentials from environment variables
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY_DEVREADY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID_DEVREADY;
  const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX_DEVREADY;

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
    console.error('Missing Mailchimp configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Mailchimp API endpoint
    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    // Subscribe user to Mailchimp
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed', // or 'pending' for double opt-in
      }),
    });

    const data = await response.json();

    // Handle Mailchimp API response
    if (!response.ok) {
      // Check if user is already subscribed
      if (data.title === 'Member Exists') {
        return res.status(200).json({ 
          success: true, 
          messageKey: 'alreadySubscribed'
        });
      }

      console.error('Mailchimp error:', data);
      return res.status(400).json({ 
        error: data.detail || 'Failed to subscribe',
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
