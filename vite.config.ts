import {defineConfig} from 'vite';
export default defineConfig({
    base: 'https://poc.bossaer.eu/',
    build: {
    rollupOptions: {
      output: {
        entryFileNames: 'christmas.js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]'
      },
    },
  },
});