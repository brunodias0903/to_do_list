import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en";
import ptBRTranslation from "./locales/pt-BR";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    "pt-BR": {
      translation: ptBRTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
