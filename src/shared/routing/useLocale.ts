import { useParams } from "react-router-dom";

import {
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from "./locales";

export function useLocale(): Locale {
  const { locale } = useParams<{
    locale: string;
  }>();

  return isLocale(locale)
    ? locale
    : DEFAULT_LOCALE;
}