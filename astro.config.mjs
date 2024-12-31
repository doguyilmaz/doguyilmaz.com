import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://doguyilmaz.com",
  output: "server",
  integrations: [tailwind(), mdx(), sitemap(), prefetch({ throttle: 3 })],
});
