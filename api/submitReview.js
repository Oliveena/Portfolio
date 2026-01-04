import { supabaseAdmin } from './supabaseAdmin.js';
import { body, validationResult } from 'express-validator';
import 'dotenv/config';
import Filter from 'bad-words';

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

// === 3. Profanity check using bad-words library ===
function checkProfanity(text) {
  try {
    const filter = new Filter();
    return filter.isProfane(text);
  } catch (err) {
    console.error("Profanity check error:", err);
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

    // Profanity check using bad-words library
    const profaneName = checkProfanity(reviewerName);
    const profaneReview = checkProfanity(review);

    if (profaneName === null || profaneReview === null) {
      return res.status(503).json({ error: 'Moderation service unavailable' });
    }

    if (profaneName || profaneReview) {
      return res.status(400).json({
        error: 'Please remove inappropriate content.',
        message: 'Your submission contains inappropriate language. Please revise and try again.'
      });
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
