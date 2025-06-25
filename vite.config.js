import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["ebay-automation.netlify.app"],
  },
  proxy: {
    "/api": "http://casinos-give-preferences-require.trycloudflare.com", // or your Cloudflare tunnel URL
  },
});
