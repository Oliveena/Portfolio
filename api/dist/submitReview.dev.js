"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
exports.validate = void 0;

var _supabaseAdmin = require("./supabaseAdmin.js");

var _expressValidator = require("express-validator");

// Middleware for express-validator
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
};

exports.validate = validate;
var validations = [(0, _expressValidator.body)('reviewerName').trim().escape().notEmpty().withMessage('Name is required'), (0, _expressValidator.body)('review').trim().escape().notEmpty().withMessage('Review cannot be empty')];

function handler(req, res) {
  return regeneratorRuntime.async(function handler$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(req.method !== 'POST')) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return", res.status(405).json({
            error: 'Method not allowed'
          }));

        case 2:
          _context3.next = 4;
          return regeneratorRuntime.awrap(validate(validations)(req, res, function _callee2() {
            var _req$body, reviewerName, review, _ref, data, error;

            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _req$body = req.body, reviewerName = _req$body.reviewerName, review = _req$body.review;
                    _context2.next = 3;
                    return regeneratorRuntime.awrap(_supabaseAdmin.supabaseAdmin.from('reviews').insert([{
                      reviewerName: reviewerName,
                      review: review
                    }]).select().single());

                  case 3:
                    _ref = _context2.sent;
                    data = _ref.data;
                    error = _ref.error;

                    if (!error) {
                      _context2.next = 9;
                      break;
                    }

                    console.error('Supabase error:', error);
                    return _context2.abrupt("return", res.status(500).json({
                      error: 'Database error'
                    }));

                  case 9:
                    res.status(201).json({
                      message: 'Review submitted',
                      data: data
                    });

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          }));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}