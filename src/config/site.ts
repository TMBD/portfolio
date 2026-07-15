/**
 * Site-wide configuration and the single source of truth for the primary
 * navigation. Labels are resolved per-locale via the i18n dictionaries, so the
 * nav is defined once here and rendered in both the header and the footer.
 */

import type { UIKey } from "../i18n/ui";
import { profile } from "../data/profile";

/** Brand name shown in the header/footer and page titles (from the profile). */
export const siteName = profile.name;

/** Path to the downloadable CV in /public (placeholder until the real file). */
export const cvUrl = profile.cvUrl;

/** A primary navigation entry. */
export interface NavItem {
  /** i18n key for the label. */
  labelKey: UIKey;
  /** Locale-agnostic path; localized at render time. */
  path: string;
}

/** Primary navigation — order matters (matches the plan). */
export const navItems: NavItem[] = [
  { labelKey: "nav.experience", path: "/experience" },
  { labelKey: "nav.projects", path: "/projects" },
  { labelKey: "nav.skills", path: "/skills" },
  { labelKey: "nav.education", path: "/education" },
  { labelKey: "nav.about", path: "/about" },
  { labelKey: "nav.blog", path: "/blog" },
];
