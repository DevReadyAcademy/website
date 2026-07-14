// Vercel Serverless Function for Booking Interest Form Submissions
// This endpoint handles pre-Calendly qualification form data

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, situation, why, availability } = req.body;

  // Validate all required fields are present
  if (!name || !email || !phone || !situation || !why || !availability) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Validate email format
  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  // Validate why field has minimum length
  if (why.length < 20) {
    return res.status(400).json({ error: 'Please provide a more detailed response (at least 20 characters)' });
  }

  const CUSTOM_API_URL = process.env.CUSTOM_SUBSCRIBE_API_URL;
  const CUSTOM_API_KEY = process.env.CUSTOM_SUBSCRIBE_API_KEY;

  if (!CUSTOM_API_URL || !CUSTOM_API_KEY) {
    console.error('Missing Custom Subscription API configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch(CUSTOM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CUSTOM_API_KEY,
      },
      body: JSON.stringify({
        email,
        firstName: name,
        phone,
        situation,
        why,
        availability,
        pipelineStage: 'booking-interest',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Submit interest API error:', data);
      return res.status(response.status).json({
        error: data.message || data.msg || 'Failed to submit',
      });
    }

    return res.status(200).json({
      success: true,
    });

  } catch (error) {
    console.error('Submit interest error:', error);
    return res.status(500).json({
      error: 'An error occurred. Please try again.',
    });
  }
}
