import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// Absolute site URL for canonical / Open Graph tags. Set VITE_SITE_URL to a
// custom domain, otherwise Vercel's production URL is used automatically.
const siteUrl = (
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "")
).replace(/\/$/, "");

const siteUrlPlugin = () => ({
  name: "site-url",
  transformIndexHtml: (html) => {
    const imageVersion = createHash("sha256")
      .update(readFileSync(new URL("./public/og.png", import.meta.url)))
      .digest("hex").slice(0, 12);
    return html.replaceAll("__SITE_URL__", siteUrl).replaceAll("__OG_VERSION__", imageVersion);
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
  build: {
    rollupOptions: {
      output: {
        // long-lived vendor chunks cache across deploys
        manualChunks(id) {
          if (/node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return "react";
          if (/node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id)) return "motion";
        },
      },
    },
  },
});
