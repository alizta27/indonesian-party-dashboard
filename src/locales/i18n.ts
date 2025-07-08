import { getStringItem } from "@/utils/storage";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { LocalEnum, StorageEnum } from "#/enum";
import en_US from "./lang/en_US";
import id_ID from "./lang/id_ID";

const defaultLng =
  getStringItem(StorageEnum.I18N) || (LocalEnum.id_ID as string);

document.documentElement.lang = defaultLng;

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: defaultLng,
    fallbackLng: LocalEnum.id_ID,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en_US: { translation: en_US },
      id_ID: { translation: id_ID },
    },
  });

export const { t } = i18n;
export default i18n;
