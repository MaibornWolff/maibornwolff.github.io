import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import de from './assets/locales/de/translation.json';
import en from './assets/locales/en/translation.json';

i18n.use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            de: {
                translation: { ...de },
            },
            en: {
                translation: { ...en },
            },
        },
    });

export default i18n;
