import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  server: {
    port: 1234
  },
  build: {
    outDir: 'dist'
  }
});
