import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 8080,
    open: 'http://localhost:8080/',
    host: '0.0.0.0',
    proxy: {},
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
    },
  },
  assetsInclude: ['**/*.json'],
  optimizeDeps: {
    include: ['react', 'ReactDOM', 'react-router-dom', 'typescript'],
    exclude: ['electron'],
  },
  build: {
    minify: 'terser',
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es',
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'src/assets/[ext]/[name]-[hash].[ext]',
      }
    },
  },
});
