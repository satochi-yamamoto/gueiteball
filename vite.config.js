import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    },
    // Otimizações para produção
    minify: 'terser',
    sourcemap: false,
    reportCompressedSize: false
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  // Otimizações de performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});
