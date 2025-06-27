import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationFR from './locales/fr/translation.json';

// Translation resources
const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  fr: { translation: translationFR },
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['path', 'navigator'],
      lookupFromPathIndex: 0, 
    },
  });

export default i18n;
