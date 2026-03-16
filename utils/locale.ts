export type Locale = "en" | "de";

export function getLocaleFromPathname(pathname?: string | null): Locale {
  return pathname?.startsWith("/de") ? "de" : "en";
}
