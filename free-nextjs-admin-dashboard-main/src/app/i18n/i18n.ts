"use client";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Hello World',
          languages: 'Languages',
        },
      },
      de: {
        translation: {
          greeting: 'Hallo Welt',
          languages: 'Sprachen',
        },
      },
      la: {
        translation: {
          greeting: 'Salve Mundi',
          languages: 'Linguae',
        },
      },
      // Add more languages as needed
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
