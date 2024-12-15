import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en/translation.json';
import ptTranslations from '../locales/pt/translation.json';
import esTranslations from '../locales/es/translation.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: enTranslations },
      pt: { translation: ptTranslations },
      es: { translation: esTranslations },
    },
    lng: 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
