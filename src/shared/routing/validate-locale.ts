import { type Locale, SUPPORTED_LOCALES } from "./locales";

export function isLocale(
    value: string | undefined,
  ): value is Locale {
    return (
      value !== undefined &&
      SUPPORTED_LOCALES.includes(
        value as Locale,
      )
    );
  }