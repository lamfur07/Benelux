// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['gsap']
    }
  },

  integrations: [react(), sitemap()],
  site: 'https://cipres-agency.vercel.app',
  output: 'server',
  adapter: vercel(),
});
