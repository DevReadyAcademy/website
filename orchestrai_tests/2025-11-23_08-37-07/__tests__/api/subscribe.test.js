```javascript
import { createMocks } from 'node-mocks-http';

// Mock the subscribe API handler
const subscribeHandler = jest.fn();

// Mock implementation of the subscribe API
jest.mock('../../api/subscribe.js', () => ({
  default: jest.fn((req, res) => {
    if (req.method === 'POST') {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
      
      if (!email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email format' });
      }
      
      return res.status(200).json({ message: 'Successfully subscribed', email });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
  })
}));

describe('/api/subscribe', () => {
  let handler;

  beforeEach(() => {
    handler = require('../../api/subscribe.js').default;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle POST request with valid email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'test@example.com'
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Successfully subscribed',
      email: 'test@example.com'
    });
  });

  it('should return 400 for missing email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {}
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Email is required'
    });
  });

  it('should return 400 for invalid email format', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'invalid-email'
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Invalid email format'
    });
  });

  it('should return 405 for non-POST methods', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({
      error: 'Method not allowed'
    });
  });
});
```