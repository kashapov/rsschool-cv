import { defineConfig } from 'vite';

// Relative base so the built site works when served from the
// GitHub Pages project subpath (https://<user>.github.io/rsschool-cv/).
export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
