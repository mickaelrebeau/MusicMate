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
         '/api': {
            target: 'http://localhost:3030',
            changeOrigin: true,
         },
      },
      port: 8080,
   },
});
