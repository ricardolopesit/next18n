import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

export const availableLanguages = ['en', 'ru', 'pt'];

const optionsDetector = {
  // order and from where user language should be detected
  order: ["localStorage", "navigator"],
  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18n',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  // cache user language on
  caches: ['localStorage', 'cookie'],
  // excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'localhost',
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: availableLanguages,
    // lng property should not be set to when using language detector
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },  // React already does escaping
    detection: optionsDetector,
    react: {
      useSuspense: false
    },
    // debug: process.env.NODE_ENV === "development",
  });

export default i18n;
