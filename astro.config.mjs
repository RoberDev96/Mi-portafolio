// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://robertdev96.vercel.app',
  
  // SEO y performance
  integrations: [
    icon(), 
    react(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
        },
      },
    })
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimizar bundle
      minify: 'terser',
      sourcemap: false,
    }
  },

  // Output y rendering
  output: 'static',
  
  // Compresión y optimización
  compressHTML: true,

  // Prefetch
  prefetch: {
    prefetchAll: true,
  },
});
