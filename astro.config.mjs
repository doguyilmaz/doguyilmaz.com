import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://doguyilmaz.com",
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/api/") &&
        !page.includes("/draft/"),
      serialize(item) {
        if (item.url.includes("/blog/")) {
          return { ...item, changefreq: "monthly", priority: 0.9 };
        }
        if (item.url === "https://doguyilmaz.com/") {
          return { ...item, changefreq: "daily", priority: 1.0 };
        }
        if (item.url.includes("/legal/")) {
          return { ...item, changefreq: "monthly", priority: 0.1 };
        }
        return item;
      },
    }),
    prefetch({ throttle: 3 }),
  ],
});
