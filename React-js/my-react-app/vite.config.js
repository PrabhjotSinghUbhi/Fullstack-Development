import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // add imports
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),], // use the imports
})
