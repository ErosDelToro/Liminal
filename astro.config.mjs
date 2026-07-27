// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs and sitemap generation. Set to the primary live
  // domain (bare, no-www; www 301-redirects to it via Netlify).
  site: 'https://liminal.coach',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Keep utility pages out of the sitemap — nothing to index there.
      filter: (page) =>
        !page.includes("/thanks") && !page.includes("/404"),
    }),
  ],
});