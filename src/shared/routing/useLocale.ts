import { useParams } from "react-router-dom";

import {
//   DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from "./locales";

export function useLocale(): Locale {
  const { locale } = useParams<{
    locale: string;
  }>();

  if (!isLocale(locale)) {
    throw new Error(
      `Invalid locale: ${locale}`,
    );
  }

  return locale;
}