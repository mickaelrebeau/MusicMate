import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    proxy: {
      '/': {
        // target: 'http://localhost:3030',
        target: 'https://musicmate.up.railway.app/',
        changeOrigin: true,
      },
    },
    port: 8080,
  },
});
