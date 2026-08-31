export const SUPPORTED_LOCALES = [
    "ru",
    "en",
    "fr",
  ] as const;
  
  export type Locale =
    (typeof SUPPORTED_LOCALES)[number];
  
  export const DEFAULT_LOCALE: Locale = "en";
  
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