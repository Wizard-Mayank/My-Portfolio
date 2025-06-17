import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Correct GitHub repo name
const repoName = 'My-Portfolio'; // ✅ THIS is your actual repo name

export default defineConfig({
  base: `/${repoName}/`, // ✅ Always serve from this path on GitHub Pages
  plugins: [react()],
})
