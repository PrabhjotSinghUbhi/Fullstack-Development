import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import t from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/jokes': "http://localhost:4000"
    }
  },
  plugins: [react(), t()],
})
