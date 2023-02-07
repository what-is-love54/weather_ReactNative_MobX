/** @format */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ua, ar } from '~/utils/locales';
import { languageDetector } from './languageDetectorPlugin';
import { isRTL } from '~/constants';

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
  ar: {
    translation: ar,
  },
};

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources,
    lng: isRTL ? 'ar' : 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
