/**
 * i18n dictionaries.
 *
 * Every user-facing UI string lives here, once per language. Components read
 * them through `useTranslations(lang)` (see ./utils.ts) so no label is
 * hard-coded. Content data (experiences, projects, …) carries its own
 * `{ en, fr }` fields and is added with the data model in a later phase.
 */

/** Supported languages and their display names. */
export const languages = {
  en: "English",
  fr: "Français",
} as const;

export type Lang = keyof typeof languages;

/** Locale used for the unprefixed routes and as the fallback. */
export const defaultLang: Lang = "en";

/**
 * Translation tables. Keep the two objects in sync (same keys).
 * `as const` gives us a precise `UIKey` union for type-safe lookups.
 */
export const ui = {
  en: {
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Technical Skills",
    "nav.education": "Education",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "action.downloadCv": "Download CV",
    "action.seeAll": "See all",
    "action.backHome": "Back to home",
    "theme.toggle": "Toggle light / dark theme",
    "lang.label": "Language",
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with Astro & Tailwind CSS.",
    "home.placeholder": "The full home page arrives in a later phase — this shows the new foundations.",
    "notfound.title": "Page not found",
    "notfound.text": "This page doesn’t exist (yet).",
  },
  fr: {
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.skills": "Compétences techniques",
    "nav.education": "Formations",
    "nav.about": "À propos",
    "nav.blog": "Blog",
    "nav.home": "Accueil",
    "nav.menu": "Menu",
    "action.downloadCv": "Télécharger le CV",
    "action.seeAll": "Voir tout",
    "action.backHome": "Retour à l’accueil",
    "theme.toggle": "Basculer le thème clair / sombre",
    "lang.label": "Langue",
    "footer.rights": "Tous droits réservés.",
    "footer.builtWith": "Réalisé avec Astro et Tailwind CSS.",
    "home.placeholder": "La page d’accueil complète arrivera plus tard — ceci présente les nouvelles fondations.",
    "notfound.title": "Page introuvable",
    "notfound.text": "Cette page n’existe pas (encore).",
  },
} as const;

/** Union of every valid translation key. */
export type UIKey = keyof (typeof ui)[typeof defaultLang];
