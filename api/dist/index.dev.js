"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _submitReview = _interopRequireDefault(require("./submitReview.js"));

var _moderate = _interopRequireDefault(require("./moderate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.send('API is running!');
});
app.post('/submit', _submitReview["default"]);
app.post('/moderate', _moderate["default"]);
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});