// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "@/components/locales/en/translation.json";
import translationFR from "@/components/locales/fr/translation.json";
import translationNL from "@/components/locales/nl/translation.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  nl: { translation: translationNL },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
