import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: './',
  server: {
    proxy: {
      '/api/shorten': {
        target: 'https://cleanuri.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/shorten/, '/api/v1/shorten')
      }
    }
  }
})
