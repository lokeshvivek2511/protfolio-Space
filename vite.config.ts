import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Shortcut for cleaner imports
    },
  },
  base: "/", // Ensures relative paths for Netlify or GitHub Pages
  build: {
    outDir: "dist",            // ✅ Required for Netlify (don't go outside root)
    emptyOutDir: true,         // Clean previous builds
    sourcemap: false,          // Optional: Set true if you need debugging
    chunkSizeWarningLimit: 1000, // Optional: Increase limit to avoid warnings
  },
  server: {
    port: 3000, // Dev server port
    fs: {
      strict: true,
    },
  },
  preview: {
    port: 3000, // Port for preview build
  },
});
