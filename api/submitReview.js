import { supabaseAdmin } from './supabaseAdmin.js';
import { body, validationResult } from 'express-validator';

// Middleware for express-validator
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

const validations = [
  body('reviewerName').trim().escape().notEmpty().withMessage('Name is required'),
  body('review').trim().escape().notEmpty().withMessage('Review cannot be empty'),
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  await validate(validations)(req, res, async () => {
    const { reviewerName, review } = req.body;

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
