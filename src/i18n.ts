import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: 'en',
    // ns: ['translation'],

    interpolation: {
      escapeValue: false,
    },
    // backend: {
    //   loadPath: `http://localhost:4000/locales/{{lng}}/{{ns}}.json`,
    // },
  });

export default i18n;
