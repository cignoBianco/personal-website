import type { Locale } from "./locales";

export function replaceLocaleInPath(
  pathname: string,
  locale: Locale,
): string {
  const segments =
    pathname.split("/");

  if (segments.length < 2) {
    return `/${locale}`;
  }

  segments[1] = locale;

  return segments.join("/") || `/${locale}`;
}