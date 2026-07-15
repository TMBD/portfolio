/**
 * Shared types for the content data model.
 *
 * Every piece of content lives once in `src/data/*` and is rendered by the
 * reusable components. Translatable text uses the `Localized` type so a single
 * entry carries both languages; components resolve the active one with `pick()`.
 */
import type { Lang } from "../i18n/ui";

/** A value provided in every supported language, e.g. `{ en: "...", fr: "..." }`. */
export type Localized<T = string> = Record<Lang, T>;

/** A social / contact link shown in the footer (and later the about page). */
export interface SocialLink {
  label: string;
  href: string;
  /** Simple Icons slug (e.g. "github"), or "email" for the generic envelope. */
  icon: string;
}

/** Personal identity + intro copy. Single source for name, role, contact, CV. */
export interface Profile {
  name: string;
  role: Localized;
  location: Localized;
  email: string;
  cvUrl: string;
  /** Short 4–6 line intro for the hero. */
  intro: Localized;
  /** Longer "about me" for the About page. */
  about: Localized;
  socials: SocialLink[];
}

/** A work experience entry (title + organisation + period + description). */
export interface Experience {
  id: string;
  role: Localized;
  organization: string;
  period: Localized;
  location?: Localized;
  description: Localized;
  /** When true, appears in the home "Top Experiences" preview. */
  featured?: boolean;
}

/** A project. Repo/live buttons render only when their URL is present. */
export interface Project {
  id: string;
  name: string;
  description: Localized;
  /** Libraries / technologies used to build it. */
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
  /** When true, appears in the home "Top Projects" preview. */
  featured?: boolean;
}

/** A single technical skill with its Simple Icons logo slug. */
export interface Skill {
  name: string;
  /** Simple Icons slug (rendered via astro-icon), e.g. "typescript". */
  icon: string;
  /** When true, appears in the hero "Main Technical Skills" preview. */
  main?: boolean;
}

/** A group of skills shown as one card (e.g. "Languages", "Backend"). */
export interface SkillCategory {
  id: string;
  title: Localized;
  skills: Skill[];
}

/** An education / diploma entry. */
export interface Education {
  id: string;
  degree: Localized;
  institution: string;
  period: Localized;
  location?: Localized;
  description: Localized;
}

/** A certification. Empty for now — the section shows a friendly empty state. */
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  /** Optional Simple Icons slug for the issuer's logo. */
  icon?: string;
}
