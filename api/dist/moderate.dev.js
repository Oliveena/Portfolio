"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

function handler(req, res) {
  var text, response, result;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method !== 'POST')) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", res.status(405).json({
            error: 'Method not allowed'
          }));

        case 2:
          text = req.body.text;

          if (text) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: 'No text provided'
          }));

        case 5:
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch('https://api.openai.com/v1/moderations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(process.env.OPENAI_API_KEY)
            },
            body: JSON.stringify({
              input: text
            })
          }));

        case 8:
          response = _context.sent;

          if (response.ok) {
            _context.next = 11;
            break;
          }

          throw new Error('OpenAI request failed');

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(response.json());

        case 13:
          result = _context.sent;
          res.status(200).json(result);
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](5);
          console.error(_context.t0);
          res.status(500).json({
            error: 'Internal server error'
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 17]]);
}