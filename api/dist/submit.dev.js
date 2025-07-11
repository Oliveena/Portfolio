"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
exports.validate = void 0;

var _supabaseAdmin = require("../../lib/supabaseAdmin");

var _expressValidator = require("express-validator");

// Middleware to run express-validator in a serverless function
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

function handler(req, res) {
  var validations;
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
          validations = [(0, _expressValidator.body)('name').trim().escape().notEmpty().withMessage('Name is required'), (0, _expressValidator.body)('email').normalizeEmail().isEmail().withMessage('Invalid email'), (0, _expressValidator.body)('message').trim().escape().notEmpty().withMessage('Message cannot be empty')];
          _context3.next = 5;
          return regeneratorRuntime.awrap(validate(validations)(req, res, function _callee2() {
            var _req$body, name, email, message, _ref, data, error;

            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;
                    _context2.next = 3;
                    return regeneratorRuntime.awrap(_supabaseAdmin.supabaseAdmin.from('submissions').insert([{
                      name: name,
                      email: email,
                      message: message
                    }]).select().single());

                  case 3:
                    _ref = _context2.sent;
                    data = _ref.data;
                    error = _ref.error;

                    if (!error) {
                      _context2.next = 9;
                      break;
                    }

                    console.error(error);
                    return _context2.abrupt("return", res.status(500).json({
                      error: 'Database error'
                    }));

                  case 9:
                    res.status(201).json({
                      message: 'Submission saved',
                      data: data
                    });

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          }));

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}