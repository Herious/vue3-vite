import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8095,
    proxy: {
      '/api': {
        target: 'http://localhost:3096',
        changeOrigin: true
      }
    }
  }
})
