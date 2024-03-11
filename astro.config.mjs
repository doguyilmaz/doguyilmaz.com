import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel/serverless';
import { SITE_URL } from './src/data/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  site: SITE_URL,
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      wrap: false,
    },
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
