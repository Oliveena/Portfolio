import { supabaseAdmin } from './supabaseAdmin.js';
import { body, validationResult } from 'express-validator';
import 'dotenv/config';
import fetch from 'node-fetch';

// === 1. Validation Middleware ===
export const validate = (validations) => async (req, res, next) => {
  for (let validation of validations) {
    await validation.run(req);
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return next();
};

// === 2. Input validations ===
const validations = [
  body('reviewerName').trim().notEmpty().withMessage('Name is required'),
  body('review').trim().notEmpty().withMessage('Review cannot be empty'),
];

// === 3. Profanity check using OpenAI Moderation API ===
async function checkProfanity(text) {
  try {

    // debug
console.log("OpenAI Key Loaded:", process.env.OPENAI_API_KEY?.slice(0, 10));

    const response = await fetch("https://api.openai.com/v1/moderations", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: text }),
    });

    const data = await response.json();

    // Defensive check: ensure 'results' exists
    if (!data.results || !Array.isArray(data.results) || data.results.length === 0) {
      console.error("Unexpected OpenAI response:", data);
      return null;
    }

    return data.results[0].flagged;
  } catch (err) {
    console.error("OpenAI API error:", err);
    return null;
  }
}

// === 4. Handler ===
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  await validate(validations)(req, res, async () => {
    const { reviewerName, review } = req.body;

    const profaneName = await checkProfanity(reviewerName);
    const profaneReview = await checkProfanity(review);

    if (profaneName === null || profaneReview === null) {
      return res.status(503).json({ error: 'Moderation service unavailable' });
    }

    if (profaneName || profaneReview) {
      return res.status(400).json({ error: 'Please remove inappropriate content.' });
    }

    const { data, error } = await supabaseAdmin
      .from('reviews')
      .insert([{ reviewerName, review }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Review submitted', data });
  });
}
