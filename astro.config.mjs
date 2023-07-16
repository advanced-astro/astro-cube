import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://cosmo-cube.vercel.app/",
  integrations: [sitemap()],
});
