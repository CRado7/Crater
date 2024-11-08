import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Vite's default port
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001', // Your server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/graphql/, '/graphql'),
      }
    }
  }
});
