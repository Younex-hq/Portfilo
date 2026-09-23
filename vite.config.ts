import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";

// GitHub Pages base path:
// - Project site  (USERNAME.github.io/REPO-NAME) -> set VITE_BASE="/REPO-NAME/"
// - User/Org site (USERNAME.github.io)           -> leave default "/"
// Set via env var or .env.production file
const base = process.env.VITE_BASE || "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
