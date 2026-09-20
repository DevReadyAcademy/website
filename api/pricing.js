export default async function handler(req, res) {
  const { default: earlyBirdConfig } = await import('../src/config/earlyBird.js');
  const price = Number(String(earlyBirdConfig.earlyBirdPrice).replace(/[^0-9.]/g, ''));

  res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300');
  res.status(200).json({
    currency: 'EUR',
    courses: {
      v2: {
        price,
        source: 'earlyBirdConfig',
        isEarlyBird: Boolean(earlyBirdConfig.isActive)
      }
    }
  });
}
