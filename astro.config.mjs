import vercel from "@astrojs/vercel";
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    plugins: [tailwind()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
      fallbackType: "redirect",
    },
  },
});
