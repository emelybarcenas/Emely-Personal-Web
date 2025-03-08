import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures assets load correctly
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    outDir: "dist",
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
