# Portfolio — Build Plan

> Working guideline for turning the `astro-theme-jucelito-silva` template into
> **Thierno DIALLO's** personal software-engineer portfolio. We tick items off as we go.

---

## 1. Profile
- **Name:** Thierno DIALLO
- **Role:** Software Engineer
- **Domain:** _(already owned — to plug in at deploy)_

## 2. Confirmed decisions
| Topic | Decision |
|---|---|
| Languages | Bilingual **FR + EN** with a visitor language switcher (full i18n) |
| Default language | Auto-detect from browser, fallback to **English** |
| Blog languages | UI in both; each post written in **one** language (chosen per post) |
| Theme | **Light + dark**, visitor toggle (persisted), respects system preference |
| Accent color | Keep **orange**, tuned per theme (bright accent; deeper shade for light-mode text) |
| Tech-skill logos | Free brand icons via **Simple Icons / Devicon** |
| Certifications | On the **Education page** (Education + Certifications), also shown in About |
| Utility controls | **Header top-right** cluster: language · theme · CV; CV link also in footer |
| Dependencies | Upgrade Astro + all deps to **latest stable**; fix all audit issues |
| Content now | **Realistic dummy data** (~5 experiences, 7 projects, 15 skills, 3 diplomas); real data later |
| Code quality | Reusable/DRY components, single source of truth, clean & well-commented |

## 3. Site architecture

### Navigation (header)
- **Logo** = "Thierno DIALLO" → Home (the old `[ Start ]` nav item is removed).
- **Nav order:** Experience · Projects · Technical Skills · Education · About · Blog.
- Each nav item → a **dedicated page** with the full content of that area.
- **Utility cluster** (top-right, separate from nav): language switcher · theme toggle · CV download. Folds into the mobile menu on small screens.

### Pages
| Route | Content |
|---|---|
| `/` (Home) | Hero → Education → Top Experiences ∥ Top Projects |
| `/experience` | Full list of experiences |
| `/projects` | Full list of projects |
| `/skills` | Full technical skills (all categories, with logos) |
| `/education` | Education **+ Certifications** |
| `/about` | About me → Experience → Projects → Technical Skills → Education (aggregation) |
| `/blog` + posts | Articles (per-post language) |

> French pages served under `/fr/...` (English is the unprefixed default).

### Home page (top → bottom)
1. **Hero** — name, role, a **4–6 line prose intro** (replaces the `const passion = "coding"` snippet), **profile photo**, and a **"Main Technical Skills"** block (replaces `$ cat skills.json`) listing key skills with logos + a **"See all skills →"** link to `/skills`. _(Removed: the "Want a project?" and "Download résumé" buttons.)_
2. **Education** — full list (few entries → **no** "see more").
3. **Top Experiences ∥ Top Projects** — two columns side-by-side on wide screens, **stacked** (Experiences then Projects) on narrow screens. Each shows 2–3 featured items and a **"See all →"** link to its page.
4. **Footer** — kept.
- Alternating section background bands throughout.
- _(Removed: Services section, the stats/percentages, and the "Let's work together" section.)_

### About page
- **About me** — a detailed personal intro (who I am, interests, hobbies).
- Then **Education → Experience → Projects → Technical Skills**, reusing the same components (full views), with alternating background bands.

## 4. Content model — single source of truth
All content lives **once** in typed data files and is rendered by reusable components everywhere it appears (home "Top" views, dedicated pages, and the About aggregation). No duplication.

- `src/data/profile.ts` — name, role, intro paragraph, location, socials (GitHub, LinkedIn…), email, `cvUrl`.
- `src/data/experiences.ts` — `{ title, organization, period, description, featured }` (*featured* drives "Top Experiences").
- `src/data/projects.ts` — `{ title, description, technologies[], repoUrl?, liveUrl?, image?, featured }` (repo/live buttons render only when present).
- `src/data/skills.ts` — categories, each with skills `{ name, icon }` (icon = Simple Icons slug); a `main` flag drives the hero's "Main Technical Skills".
- `src/data/education.ts` — `{ degree, institution, period, description }`.
- `src/data/certifications.ts` — `{ name, issuer, date, credentialUrl?, logo? }` — **empty for now**; the section shows a tasteful empty state until filled.
- **Translatable text** fields hold both languages, e.g. `description: { en, fr }`; UI labels live in `src/i18n/{en,fr}.ts`.

## 5. Reusable components (planned)
- **Content:** `ExperienceItem` / `ExperienceList`, `ProjectCard` / `ProjectGrid`, `SkillCategoryCard` / `SkillsGrid`, `EducationItem` / `EducationList`, `CertificationItem` / `CertificationList`.
- **Layout/UI:** `Section` (alternating-background wrapper), `SectionHeading`, `SeeMoreLink` (the consistent "See all →" affordance for Skills / Experiences / Projects), `Header`, `Footer`.
- **Islands (interactive):** `ThemeToggle`, `LanguageSwitcher`, `CvButton`, mobile menu.

## 6. Technical approach
- **Upgrade first:** `@astrojs/upgrade` to latest **Astro** + integrations, bump remaining deps, drive `npm audit` to zero (or document anything unavoidable). Verify `dev` + `build`.
- **i18n:** Astro's built-in i18n routing (`en` default unprefixed, `fr` under `/fr`), browser-language auto-detect + English fallback; UI strings in dictionaries, content bilingual in data; the language switcher preserves the current page.
- **Theme:** class-based light/dark via Tailwind v4, persisted in `localStorage`, system-preference default, with a no-flash inline script.
- **Accent:** orange design tokens with per-theme shades (CSS variables).
- **Rendering strategy:** presentational sections as **Astro components** (fast, static, SEO-friendly, easy i18n); keep interactivity as small **islands** (theme, language, menu). Less shipped JS, cleaner code.
- **Motion/UX:** subtle scroll-reveal + hover micro-interactions + smooth transitions for a lively, modern feel — lightweight (CSS + a small reveal utility), not heavy libraries.
- **Code quality:** TypeScript throughout, clear folder structure, small focused components, meaningful names, and comments explaining intent.

## 7. Add / Change / Remove (summary)
### ➕ Add
- Dedicated pages `/experience`, `/projects`, `/skills`, `/education`; expand `/about` into the aggregation; keep `/blog`.
- Education, Certifications (placeholder), Home "Top Experiences ∥ Top Projects" + "Main Technical Skills" blocks.
- i18n (FR/EN) + language switcher; light/dark theme toggle; CV button.
- Data files (single source of truth) + reusable components; tech-skill logos.
- Dummy realistic content; placeholder CV PDF, favicon, OG image.

### ✏️ Change
- Everything Portuguese → EN/FR; name/role → Thierno DIALLO / Software Engineer.
- Hero snippet → prose intro; skills heading → "Main Technical Skills" + see-all.
- Header nav order + logo-to-home; footer name/social/links fixed and kept.
- Projects gain repo + live links + tech list; fix the old "View all" mis-link.
- `astro.config.mjs` `site` → domain; per-page SEO metadata.

### ➖ Remove
- Services section, invented stats, hero CTAs, "Let's work together" section.
- 5 demo blog posts + unused placeholder images.

## 8. Ordered phases
> In practice we process each area once (remove + translate + rebrand + data-ify + logos) to avoid rework.

### Phase 0 — Safety & baseline
- [x] Commit pristine clone; create a `customize` branch.

### Phase 1 — Upgrade & harden
- [x] Upgraded to latest Astro (7.0.9) + integrations; bumped all deps to latest stable.
- [x] Resolved `npm audit` (16 → 0 vulnerabilities); `dev` + `build` verified.

### Phase 2 — Foundations (i18n, theme, layout primitives)
- [x] Configure Astro i18n (EN default, FR, auto-detect + fallback).
- [x] Add light/dark theme system + toggle (no-flash, persisted).
- [x] Set up orange design tokens per theme.
- [x] Build layout primitives: `Section`, `SectionHeading`, `SeeMoreLink`, updated `Header` (new nav + utility cluster), `Footer`, shared `Layout`.

### Phase 3 — Data model & reusable components
- [ ] Create `src/data/*` files + `src/i18n/*` dictionaries.
- [ ] Build reusable content components that render from the data.

### Phase 4 — Pages
- [ ] Home (Hero → Education → Top Experiences ∥ Top Projects).
- [ ] `/experience`, `/projects`, `/skills`, `/education` (+ Certifications), `/about` aggregation.

### Phase 5 — Dummy content
- [ ] Fill data files with realistic dummy data (~5 exp, 7 projects, 15 skills, 3 diplomas); placeholder CV + photo.

### Phase 6 — Blog
- [ ] Remove demo posts; adjust schema (language, tags); add 1–2 sample posts; fix RSS metadata.

### Phase 7 — Motion, SEO & polish
- [ ] Scroll-reveal + micro-interactions; responsive + a11y pass (contrast in both themes).
- [ ] Per-page meta/OG, sitemap, favicon; remove unused assets.

### Phase 8 — Deploy
- [ ] Push fork; connect Cloudflare/Netlify/Vercel (free); custom domain + DNS; set `site`.

### Phase 9 — Later (optional)
- [ ] Swap dummy → real content. Visual CMS (Decap/Tina). Blog comments (Giscus). Analytics.

## 9. Notes
- Nav labels use natural per-language wording (EN: Experience, Education; FR: Expériences, Formations). Tell me if you prefer different words.
- "See more" affordance = a styled link ("See all →"); consistent for Skills, Experiences, Projects (not Education).

## 10. Progress log
- 2026-07-14 — Security review clean; deps installed; dev server verified; plan aligned to Thierno's requirements.
- 2026-07-15 — Phase 0 ✅ (baseline commit + `customize` branch). Phase 1 ✅ — Astro 5.8.1 → 7.0.9, all deps latest stable, 16 → 0 vulnerabilities, build + dev verified. Only `package.json` / `package-lock.json` changed.
- 2026-07-15 — Phase 2 ✅ — Astro i18n (EN + FR, auto-detect), light/dark theme system (tokens + no-flash toggle), and layout primitives (`Section`, `SectionHeading`, `SeeMoreLink`, `Header`, `Footer`, `Layout`, `LanguageSwitcher`, `ThemeToggle`, `CvButton`). New `/` + `/fr/` home shells + themed `404`. Verified in both languages and themes. Old `about`/`blog` keep the legacy look until their phases.
