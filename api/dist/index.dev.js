"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _moderate = _interopRequireDefault(require("./moderate.js"));

var _submitReview = _interopRequireDefault(require("./submitReview.js"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var allowedOrigins = ['https://www.anatarassova.com', 'https://portfolio-ten-lime-32.vercel.app' // Vercel preview
]; // Parse JSON request bodies

app.use(_express["default"].json()); // CORS — allow selected origins

app.use((0, _cors["default"])({
  origin: function origin(_origin, callback) {
    if (!_origin || allowedOrigins.includes(_origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
})); // Routes

app.get('/', function (req, res) {
  res.send('API is running!');
});
app.post('/api/submit-review', _submitReview["default"]);
app.post('/moderate', _moderate["default"]); // Start server

var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});