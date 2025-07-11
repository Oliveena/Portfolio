"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

function handler(req, res) {
  var text, openaiRes, data;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method !== "POST")) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", res.status(405).json({
            error: "Method not allowed"
          }));

        case 2:
          text = req.body.text;

          if (text) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "No text provided"
          }));

        case 5:
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch("https://api.openai.com/v1/moderations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(process.env.OPENAI_API_KEY)
            },
            body: JSON.stringify({
              input: text
            })
          }));

        case 8:
          openaiRes = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(openaiRes.json());

        case 11:
          data = _context.sent;
          return _context.abrupt("return", res.status(200).json(data));

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](5);
          console.error("OpenAI API error:", _context.t0);
          return _context.abrupt("return", res.status(500).json({
            error: "Internal server error"
          }));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 15]]);
}