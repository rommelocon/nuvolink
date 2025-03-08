import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    [react()],
    tailwindcss(),
  
  ],
  base: '/nuvolink/', // Set this to your repository name
  build: {
    outDir: 'dist'
  }
})