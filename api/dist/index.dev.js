"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _moderate = _interopRequireDefault(require("./moderate.js"));

var _submitReview = _interopRequireDefault(require("./submitReview.js"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OPENAI_API_KEY = process.env.OPENAI_API_KEY;
var app = (0, _express["default"])();
var allowedOrigins = ['https://www.anatarassova.com', 'https://portfolio-ten-lime-32.vercel.app' // Vercel preview
];
app.use((0, _cors["default"])({
  origin: function origin(_origin, callback) {
    if (!_origin || allowedOrigins.includes(_origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use((0, _cors["default"])({
  origin: function origin(_origin2, callback) {
    if (!_origin2 || allowedOrigins.includes(_origin2)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.get('/', function (req, res) {
  res.send('API is running!');
});
app.post('/api/submit-review', _submitReview["default"]);
app.post('/moderate', _moderate["default"]);
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});