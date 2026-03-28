import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment, change base to '/your-repo-name/'
// e.g. base: '/arms-and-dealt/'
// For Netlify or local dev, leave as '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
