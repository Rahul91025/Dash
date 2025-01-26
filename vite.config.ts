import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',  // Bind to all interfaces (needed for Render)
    port: 3000,        // Set the port Render expects (optional, defaults to 3000)
  },
  build: {
    outDir: 'dist',     // Output directory for production build
    minify: 'esbuild',  // Minify using esbuild
    target: 'esnext',   // Set to latest JavaScript for better optimization
  },
});
