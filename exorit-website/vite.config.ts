import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    modulePreload: true,
    rollupOptions: {
      output: {
        format: 'es',
        generatedCode: {
          constBindings: true
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer'
            }
            return 'vendor'
          }
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          const extType = name.split('.').at(1) || 'asset';
          const finalExtType = /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType) ? 'img' : extType;
          return `assets/${finalExtType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
