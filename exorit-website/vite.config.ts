import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name].[hash][extname]';
          
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name].[hash][extname]';
          }
          
          return 'assets/[ext]/[name].[hash][extname]';
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
