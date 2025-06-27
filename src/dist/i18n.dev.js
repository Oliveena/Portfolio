"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var _translation = _interopRequireDefault(require("./locales/en/translation.json"));

var _translation2 = _interopRequireDefault(require("./locales/ru/translation.json"));

var _translation3 = _interopRequireDefault(require("./locales/fr/translation.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Translation resources
var resources = {
  en: {
    translation: _translation["default"]
  },
  ru: {
    translation: _translation2["default"]
  },
  fr: {
    translation: _translation3["default"]
  }
};

_i18next["default"].use(_i18nextBrowserLanguagedetector["default"]).use(_reactI18next.initReactI18next).init({
  resources: resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ['path', 'navigator'],
    lookupFromPathIndex: 0
  }
});

var _default = _i18next["default"];
exports["default"] = _default;