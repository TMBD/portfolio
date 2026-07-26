// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';
import externalLinks from './src/plugins/externalLinks.mjs';

const site = 'https://thierno.dev';

// https://astro.build/config
export default defineConfig({
  site,

  // Bilingual routing: English is the default (unprefixed), French under /fr.
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [mdx(), sitemap(), icon()],

  // Keep internal navigation in the current tab; open cited sources safely.
  markdown: {
    processor: unified({
      rehypePlugins: [[externalLinks, { siteOrigin: site }]],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});