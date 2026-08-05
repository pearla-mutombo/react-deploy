import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { repoRoot } from './public/repoRoot'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: repoRoot,
})
