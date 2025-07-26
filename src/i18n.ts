import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./public/locales/en/translation.json";
import he from "./public/locales/he/translation.json";

const resources = {
  he: { translation: he },
  en: { translation: en },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("selectedLanguage") || "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
