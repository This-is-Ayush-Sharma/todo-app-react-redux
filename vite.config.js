import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Ensure modern JavaScript is used
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Ensure that the output is optimized for modern browsers
        format: 'es',
      },
    },
  },
})