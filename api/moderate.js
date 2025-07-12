// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { text } = req.body;
//   if (!text) {
//     return res.status(400).json({ error: 'No text provided' });
//   }

//   try {
//     const response = await fetch('https://api.openai.com/v1/moderations', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({ input: text }),
//     });

//     if (!response.ok) throw new Error('OpenAI request failed');
//     const result = await response.json();

//     res.status(200).json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  // TEMPORARY BYPASS
  return res.status(200).json({
    results: [{ flagged: false }]
  });
}
