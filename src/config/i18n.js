import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ['en','fr','en-US']

const options = {
    // order and from where user language should be detected
    order: ['navigator', 'htmlTag', 'path', 'subdomain'],
    // order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  
    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,
  
    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  
    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'myDomain',
  
    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,
  
    // only detect languages that are in the whitelist
    checkWhitelist: true
  }

i18n
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  // https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en-US',
    // debug: true,
    whitelist: Languages,
    detection: options,

    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;