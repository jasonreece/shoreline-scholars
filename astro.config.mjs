// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shorelinescholars.org',
  output: 'static',

  redirects: {
    '/teen-tuesdays': '/teen-electives'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/branding') &&
        !page.includes('/thank-you') &&
        !page.includes('/enroll/') &&
        !page.includes('/vision')
    })
  ]
});