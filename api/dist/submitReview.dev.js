"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
exports.validate = void 0;

var _supabaseAdmin = require("./supabaseAdmin.js");

var _expressValidator = require("express-validator");

require("dotenv/config");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// === 1. Validation Middleware ===
var validate = function validate(validations) {
  return function _callee(req, res, next) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, validation, errors;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 3;
            _iterator = validations[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 12;
              break;
            }

            validation = _step.value;
            _context.next = 9;
            return regeneratorRuntime.awrap(validation.run(req));

          case 9:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 12:
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 18:
            _context.prev = 18;
            _context.prev = 19;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 21:
            _context.prev = 21;

            if (!_didIteratorError) {
              _context.next = 24;
              break;
            }

            throw _iteratorError;

          case 24:
            return _context.finish(21);

          case 25:
            return _context.finish(18);

          case 26:
            errors = (0, _expressValidator.validationResult)(req);

            if (errors.isEmpty()) {
              _context.next = 29;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              errors: errors.array()
            }));

          case 29:
            return _context.abrupt("return", next());

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 14, 18, 26], [19,, 21, 25]]);
  };
}; // === 2. Input validations ===


exports.validate = validate;
var validations = [(0, _expressValidator.body)('reviewerName').trim().notEmpty().withMessage('Name is required'), (0, _expressValidator.body)('review').trim().notEmpty().withMessage('Review cannot be empty')]; // === 3. Profanity check using OpenAI Moderation API ===

function checkProfanity(text) {
  var response, data;
  return regeneratorRuntime.async(function checkProfanity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])("https://api.openai.com/v1/moderations", {
            method: "POST",
            headers: {
              "Authorization": "Bearer ".concat(process.env.OPENAI_API_KEY),
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              input: text
            })
          }));

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context2.sent;

          if (!(!data.results || !Array.isArray(data.results) || data.results.length === 0)) {
            _context2.next = 10;
            break;
          }

          console.error("Unexpected OpenAI response:", data);
          return _context2.abrupt("return", null);

        case 10:
          return _context2.abrupt("return", data.results[0].flagged);

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.error("OpenAI API error:", _context2.t0);
          return _context2.abrupt("return", null);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
} // === 4. Handler ===


function handler(req, res) {
  return regeneratorRuntime.async(function handler$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!(req.method !== 'POST')) {
            _context4.next = 2;
            break;
          }

          return _context4.abrupt("return", res.status(405).json({
            error: 'Method not allowed'
          }));

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(validate(validations)(req, res, function _callee2() {
            var _req$body, reviewerName, review, profaneName, profaneReview, _ref, data, error;

            return regeneratorRuntime.async(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _req$body = req.body, reviewerName = _req$body.reviewerName, review = _req$body.review;
                    _context3.next = 3;
                    return regeneratorRuntime.awrap(checkProfanity(reviewerName));

                  case 3:
                    profaneName = _context3.sent;
                    _context3.next = 6;
                    return regeneratorRuntime.awrap(checkProfanity(review));

                  case 6:
                    profaneReview = _context3.sent;

                    if (!(profaneName === null || profaneReview === null)) {
                      _context3.next = 9;
                      break;
                    }

                    return _context3.abrupt("return", res.status(503).json({
                      error: 'Moderation service unavailable'
                    }));

                  case 9:
                    if (!(profaneName || profaneReview)) {
                      _context3.next = 11;
                      break;
                    }

                    return _context3.abrupt("return", res.status(400).json({
                      error: 'Please remove inappropriate content.'
                    }));

                  case 11:
                    _context3.next = 13;
                    return regeneratorRuntime.awrap(_supabaseAdmin.supabaseAdmin.from('reviews').insert([{
                      reviewerName: reviewerName,
                      review: review
                    }]).select().single());

                  case 13:
                    _ref = _context3.sent;
                    data = _ref.data;
                    error = _ref.error;

                    if (!error) {
                      _context3.next = 19;
                      break;
                    }

                    console.error('Supabase error:', error);
                    return _context3.abrupt("return", res.status(500).json({
                      error: 'Database error'
                    }));

                  case 19:
                    res.status(201).json({
                      message: 'Review submitted',
                      data: data
                    });

                  case 20:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }));

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}