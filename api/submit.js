import { supabaseAdmin } from '../../lib/supabaseAdmin';
import { body, validationResult } from 'express-validator';

// Middleware to run express-validator in a serverless function
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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const validations = [
    body('name').trim().escape().notEmpty().withMessage('Name is required'),
    body('email').normalizeEmail().isEmail().withMessage('Invalid email'),
    body('message').trim().escape().notEmpty().withMessage('Message cannot be empty'),
  ];

  await validate(validations)(req, res, async () => {
    const { name, email, message } = req.body;

    const { data, error } = await supabaseAdmin
      .from('submissions')
      .insert([{ name, email, message }])
      .select()
      .single();

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Submission saved', data });
  });
}
