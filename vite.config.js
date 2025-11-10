import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative base so the built site works correctly when hosted under
  // GitHub Pages (or any subpath). This makes asset links relative.
  base: './',
  plugins: [react()],
})
