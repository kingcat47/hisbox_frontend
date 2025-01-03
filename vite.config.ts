import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  publicDir: "public",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
