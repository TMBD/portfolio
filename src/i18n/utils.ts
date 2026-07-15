/**
 * i18n helpers.
 *
 * English is the unprefixed default locale; French lives under `/fr/...`.
 * These pure functions detect the active locale from a URL, translate keys,
 * and build localized paths (used by nav links and the language switcher).
 */

import { defaultLang, ui, type Lang, type UIKey } from "./ui";

/** All supported locale codes. */
export const locales = Object.keys(ui) as Lang[];

/** Read the active locale from a URL (based on the first path segment). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLocale] = url.pathname.split("/");
  return (locales as string[]).includes(maybeLocale)
    ? (maybeLocale as Lang)
    : defaultLang;
}

/** Return a `t()` translator bound to a locale, falling back to English. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefix a locale-agnostic path with its locale (no prefix for the default). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

/** Strip any locale prefix, returning the locale-agnostic path. */
export function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLang) continue;
    if (pathname === `/${l}` || pathname === `/${l}/`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname || "/";
}

/** The same page in another locale — used by the language switcher. */
export function getAlternatePath(pathname: string, target: Lang): string {
  return localizePath(stripLocale(pathname), target);
}

/** True when `href` matches the current path (ignoring locale + trailing slash). */
export function isActivePath(current: string, href: string): boolean {
  const norm = (p: string) => stripLocale(p).replace(/\/+$/, "") || "/";
  const a = norm(current);
  const b = norm(href);
  return a === b || (b !== "/" && a.startsWith(`${b}/`));
}
