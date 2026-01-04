const Filter = require('bad-words');

/**
 * Profanity check endpoint using bad-words library
 * Returns OpenAI-compatible response format
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  try {
    const filter = new Filter();
    const flagged = filter.isProfane(text);

    // Return OpenAI-compatible response format
    res.status(200).json({
      results: [{ flagged }]
    });
  } catch (err) {
    console.error('Profanity check error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
