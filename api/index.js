import 'dotenv/config';
import express from 'express';
import moderateHandler from './moderate.js';
import submitReviewHandler from './submitReview.js';
import cors from 'cors';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const app = express();

const allowedOrigins = [
  'https://www.anatarassova.com',
  'https://portfolio-ten-lime-32.vercel.app', // Vercel preview
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.post('/api/submit-review', submitReviewHandler);
app.post('/moderate', moderateHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
