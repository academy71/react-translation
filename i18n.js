import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translations/en.json";
import bdTranslation from "./translations/bd.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  bd: {
    translation: bdTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
