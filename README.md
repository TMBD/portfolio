# Thierno DIALLO — Portfolio

A fast, **bilingual (English / French)** personal portfolio and blog built with
**Astro**, **Tailwind CSS**, and **TypeScript**. It ships with a light/dark
theme, SEO metadata, RSS feeds, and a fully **content-driven** architecture:
everything you see is generated from a handful of typed data files, so keeping
your portfolio up to date is quick and safe.

> **Cloning this for your own portfolio?** You almost never need to touch the
> components. Everything you'll want to change lives in four places —
> `src/data/` (your content), `src/content/blog/` (your articles),
> `src/i18n/` (interface labels), and `public/` (your photo, CV, icons).
> This README explains exactly **where** and **how** to update each one.

---

## Tech stack

- **[Astro](https://astro.build/)** — pages & components, i18n routing, sitemap, RSS (static output)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling and design tokens
- **[TypeScript](https://www.typescriptlang.org/)** — the typed content model
- **[astro-icon](https://github.com/natemoo-re/astro-icon) + [Iconify](https://icon-sets.iconify.design/)** — brand / tech logos (`logos` and `simple-icons` sets)
- **MDX & Markdown** — blog posts

---

## Quick start

**Prerequisites:** Node 20+ (see [.nvmrc](.nvmrc)) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:4321
npm run build    # build the static site to ./dist
npm run preview  # preview the production build locally
```

---

## How the content model works

All content lives **once** in typed files and is rendered by reusable components
everywhere it appears (homepage previews, dedicated pages, and the About page).
Change something in one place and it updates across the whole site — no
duplication.

**Bilingual by default.** Any text a visitor reads uses a `{ en, fr }` object
(the `Localized` type). Always provide **both** languages:

```ts
role: { en: "Software Engineer", fr: "Ingénieur logiciel" },
```

English is served at the root (`/`), French under `/fr/`. A language switcher in
the header lets visitors change language and stays on the same page.

### Where everything lives

| I want to update… | Edit this file |
| --- | --- |
| Name, role, intro, "about me", email, socials, CV & photo paths | [src/data/profile.ts](src/data/profile.ts) |
| Work experience | [src/data/experiences.ts](src/data/experiences.ts) |
| Projects | [src/data/projects.ts](src/data/projects.ts) |
| Technical skills (and their logos) | [src/data/skills.ts](src/data/skills.ts) |
| Education / diplomas | [src/data/education.ts](src/data/education.ts) |
| Certifications | [src/data/certifications.ts](src/data/certifications.ts) |
| Blog posts | [src/content/blog/](src/content/blog/) (one `.md` / `.mdx` per post) |
| Interface labels (nav, buttons, section subtitles…) | [src/i18n/ui.ts](src/i18n/ui.ts) |
| Navigation menu (items & order) | [src/config/site.ts](src/config/site.ts) |
| Photo, CV, favicon, social-share image | [public/](public/) |
| Site URL / domain (for SEO, sitemap, RSS) | [astro.config.mjs](astro.config.mjs) |
| Colors, accent, fonts | [src/styles/global.css](src/styles/global.css) |

---

## What appears on the homepage — and how to control it

The homepage shows **previews**, not everything. You choose what's promoted with
two simple flags:

| Homepage block | Comes from | To feature an item |
| --- | --- | --- |
| Hero → **Main Technical Skills** | skills flagged `main: true` | add `main: true` to the skill |
| **Top Experiences** (first 3) | experiences flagged `featured: true` | add `featured: true` to the experience |
| **Top Projects** (first 3) | projects flagged `featured: true` | add `featured: true` to the project |
| **Education** | all education entries | shown in full (no flag needed) |

> Only the **first 3** featured experiences/projects are shown on the homepage.
> To pick *which* three, reorder the entries in the array — items are read
> top-to-bottom. The "See all →" links always lead to the full page.

---

## Updating each content type

### Profile & identity — [src/data/profile.ts](src/data/profile.ts)

Your name, role, hero intro, longer "about me" text, contact email, social
links, and the paths to your CV and photo. Example:

```ts
export const profile: Profile = {
  name: "Your Name",
  role: { en: "Software Engineer", fr: "Ingénieur logiciel" },
  location: { en: "Paris, France", fr: "Paris, France" },
  email: "you@example.com",
  cvUrl: "/cv.pdf",          // file in /public
  photo: "/profile.svg",     // file in /public
  intro: { en: "Short hero intro…", fr: "Courte intro…" },
  about: { en: "Longer about-me…", fr: "À propos plus long…" },
  socials: [
    { label: "GitHub",   href: "https://github.com/you",        icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/you",   icon: "linkedin" },
    { label: "Email",    href: "mailto:you@example.com",        icon: "email" },
  ],
};
```

**Social icons:** use `"email"` for the envelope, `"linkedin"` for the LinkedIn
logo, and any [Simple Icons](https://simpleicons.org/) slug (e.g. `"github"`,
`"x"`, `"mastodon"`) for the rest.

### Experience — [src/data/experiences.ts](src/data/experiences.ts)

An array of roles, **newest first**. Add `featured: true` to promote one to the
homepage's *Top Experiences*.

```ts
{
  id: "acme-senior",                                   // unique, kebab-case
  role: { en: "Senior Engineer", fr: "Ingénieur senior" },
  organization: "Acme Corp",
  period: { en: "2022 — Present", fr: "2022 — Présent" },
  location: { en: "Paris, France", fr: "Paris, France" }, // optional
  description: { en: "What you did…", fr: "Ce que vous avez fait…" },
  featured: true,                                      // optional → homepage
}
```

### Projects — [src/data/projects.ts](src/data/projects.ts)

`repoUrl` and `liveUrl` are **optional** — each button only renders when its URL
is present. Add `featured: true` to promote one to the homepage's *Top Projects*.

```ts
{
  id: "devboard",
  name: "DevBoard",
  description: { en: "What it is…", fr: "Ce que c'est…" },
  technologies: ["React", "TypeScript", "Node.js"],    // shown as tags
  repoUrl: "https://github.com/you/devboard",          // optional
  liveUrl: "https://devboard.example.com",             // optional
  image: "/projects/devboard.png",                     // optional (in /public)
  featured: true,                                      // optional → homepage
}
```

### Skills — [src/data/skills.ts](src/data/skills.ts)

Skills are grouped into **categories**. Each skill has a name and an **icon**.
Add `main: true` to promote a skill to the hero's *Main Technical Skills*.

```ts
{
  id: "backend",
  title: { en: "Backend", fr: "Backend" },
  skills: [
    { name: "Node.js",    icon: "logos:nodejs-icon", main: true },
    { name: "PostgreSQL", icon: "logos:postgresql" },
  ],
}
```

**Finding an icon name:** browse [icones.js.org](https://icones.js.org/) and use
the full-color **`logos`** set — copy the name in the form `logos:<slug>`
(e.g. `logos:docker-icon`). The homepage "Main Technical Skills" list is derived
automatically from every skill flagged `main: true`.

### Education — [src/data/education.ts](src/data/education.ts)

Diplomas and programs, **newest first**. Shown in full on the homepage and the
Education page (no featured flag needed).

```ts
{
  id: "msc-cs",
  degree: { en: "MSc, Computer Science", fr: "Master, Informatique" },
  institution: "Sorbonne University",
  period: { en: "2013 — 2015", fr: "2013 — 2015" },
  location: { en: "Paris, France", fr: "Paris, France" }, // optional
  description: { en: "Focus areas…", fr: "Spécialisations…" },
}
```

### Certifications — [src/data/certifications.ts](src/data/certifications.ts)

Starts **empty** — the Education page shows a friendly empty state until you add
one. To add a certification, push an object to the array:

```ts
export const certifications: Certification[] = [
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2026",
    credentialUrl: "https://…",     // optional
    icon: "amazonwebservices",      // optional Simple Icons slug
  },
];
```

### Blog posts — [src/content/blog/](src/content/blog/)

One Markdown (`.md`) or MDX (`.mdx`) file per post. **The filename becomes the
URL** (e.g. `building-with-astro.md` → `/blog/building-with-astro`). Each post is
written in a **single language**, set by the `lang` field:

- `lang: "en"` → appears in the English blog at `/blog/<slug>`
- `lang: "fr"` → appears in the French blog at `/fr/blog/<slug>`

**Frontmatter fields** (validated by the schema in
[src/content.config.ts](src/content.config.ts)):

```yaml
---
title: "Building this site with Astro"        # required
description: "A quick look at the stack."      # required
pubDate: "2026-06-20"                          # required (YYYY-MM-DD)
updatedDate: "2026-07-01"                      # optional
heroImage: "/blog/astro.png"                   # optional (file in /public)
lang: "en"                                      # "en" | "fr" (default "en")
tags: ["astro", "web"]                         # optional
translationKey: "astro-stack"                  # optional — see below
---

Your post content in **Markdown** goes here.
```

**Linking translations (optional):** give an English post and its French
counterpart the **same** `translationKey`. The language switcher will then jump
between the two. Without a `translationKey`, switching language on a post simply
lands on that language's blog index.

To create a post: add a new file, fill in the frontmatter, write your content.
It appears automatically in the right blog list and RSS feed.

---

## Interface labels & navigation

- **Labels** (nav items, buttons, section subtitles, empty states, etc.) live in
  [src/i18n/ui.ts](src/i18n/ui.ts) — one entry per key, in both `en` and `fr`.
  Keep the two objects in sync (same keys).
- **Navigation menu** (which items appear and in what order) is defined once in
  [src/config/site.ts](src/config/site.ts) and rendered in both the header and
  footer. Each item points to a label key from `ui.ts`.

---

## Assets — [public/](public/)

Replace these files with your own (keep the same names, or update the paths in
`src/data/profile.ts` / `astro.config.mjs`):

| File | Used for |
| --- | --- |
| `profile.svg` | Hero profile photo (swap for a `.jpg`/`.png` and update `profile.photo`) |
| `cv.pdf` | Downloadable CV (the "Download CV" button) |
| `favicon.svg` | Browser tab icon |
| `og.svg` | Social-share / Open Graph preview image |

## Site URL & SEO

Set your production URL in [astro.config.mjs](astro.config.mjs) (`site: '…'`).
It powers canonical URLs, `hreflang` alternates, the sitemap, and RSS feeds.
Per-page titles and descriptions are handled by the page components.

## Theme & colors

Light/dark theming and the orange accent are defined as CSS variables (design
tokens) in [src/styles/global.css](src/styles/global.css). Adjust the accent and
surface colors there; the toggle, persistence, and no-flash behavior are already
wired up.

---

## Project structure

```
src/
├── components/
│   ├── content/     # Experience, Project, Skills, Education, Certification, Social, Blog cards
│   ├── i18n/        # Language switcher
│   ├── layout/      # Header, Footer
│   ├── pages/       # Full page bodies (shared by the EN and FR routes)
│   ├── theme/       # Theme toggle
│   └── ui/          # Section, SectionHeading, SeeMoreLink, CvButton
├── config/          # site.ts — nav + site name
├── content/blog/    # Your blog posts (.md / .mdx)
├── data/            # ← your portfolio content (single source of truth)
├── i18n/            # ui.ts (labels) + utils.ts (helpers)
├── layouts/         # Layout.astro, BlogPost.astro
├── pages/           # Routes (English at /, French under /fr/) + RSS feeds
└── styles/          # global.css (design tokens)
public/              # Static assets (photo, CV, favicon, OG image)
```

Pages under `src/pages/` are thin: they simply render the matching component from
`src/components/pages/`, so the English and French routes share one
implementation.

---

## Deployment

The site builds to fully static files in `./dist` (no server needed). Run
`npm run build` and deploy the output to any static host (Cloudflare Pages,
Netlify, Vercel, GitHub Pages, …). Remember to set `site` in
[astro.config.mjs](astro.config.mjs) to your final URL.

---

This is a personal portfolio project. Feel free to fork it and adapt it to build
your own.
