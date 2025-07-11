import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import submitHandler from './submitReview.js';
import moderateHandler from './moderate.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.post('/submit', submitHandler);
app.post('/moderate', moderateHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
