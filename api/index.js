import 'dotenv/config';
import express from 'express';
import moderateHandler from './moderate.js';
import submitReviewHandler from './submitReview.js';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

const allowedOrigins = [
  'https://www.anatarassova.com',
  'https://portfolio-ten-lime-32.vercel.app', // Vercel preview
];

// Parse JSON request bodies
app.use(express.json());

// CORS — allow selected origins
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// Rate limiters
// General API rate limiter - 100 requests per 15 minutes per IP
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Strict limiter for form submissions - 5 per 15 minutes per IP
const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 submissions per windowMs
  message: 'Too many submissions from this IP. Please try again in 15 minutes.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Moderate limiter for profanity checks - 20 per 5 minutes per IP
const moderateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 20,
  message: 'Too many profanity check requests. Please slow down.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply general limiter to all routes
app.use(generalLimiter);

// Routes
app.get('/', (req, res) => {
  res.send('API is running!');
});

// Apply strict rate limiting to review submissions
app.post('/api/submit-review', strictLimiter, submitReviewHandler);

// Apply moderate rate limiting to profanity checks
app.post('/moderate', moderateLimiter, moderateHandler);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});