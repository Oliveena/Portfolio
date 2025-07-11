"use strict";

var _submit = _interopRequireDefault(require("./submit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 3001;

_submit["default"].listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});