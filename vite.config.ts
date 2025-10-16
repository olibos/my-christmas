import {defineConfig} from 'vite';
export default defineConfig({
    base: 'https://olibos.github.io/my-christmas/',
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