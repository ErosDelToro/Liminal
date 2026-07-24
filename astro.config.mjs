// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs and sitemap generation. Update to the Netlify
  // preview URL while testing, then to the live domain at cutover.
  site: 'https://www.liminal.coach',

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