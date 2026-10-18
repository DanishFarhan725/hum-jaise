// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to the real domain once it exists (used for canonical URLs and the sitemap later).
  site: 'https://humjaise.netlify.app',
  trailingSlash: 'always',
  // English is the only locale today. Urdu pages can be added under /ur/ without changing English URLs.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    routing: { prefixDefaultLocale: false },
  },
});
