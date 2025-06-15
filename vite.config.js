import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub repo name
const repoName = 'Wizard-Mayank.github.io';

export default defineConfig({
  // In dev, serve from '/', in production use '/<repoName>/'
  base: process.env.NODE_ENV === 'production'
    ? `/${repoName}/`
    : '/',
  plugins: [react()],
})
