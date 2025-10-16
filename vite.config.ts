import {defineConfig} from 'vite';
export default defineConfig({
    //base: 'https://cdn.example.com/assets/',
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