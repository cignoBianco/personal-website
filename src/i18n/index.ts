import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ruCommon from "@/i18n/locales/ru/common.json"
import enCommon from "@/i18n/locales/en/common.json";
import frCommon from "@/i18n/locales/fr/common.json";

const resources = {
  ru: {
    common: ruCommon,
  },
  en: {
    common: enCommon,
  },
  fr: {
    common: frCommon,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,

    fallbackLng: "en",

    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },

    returnNull: false,
  });

export default i18n;