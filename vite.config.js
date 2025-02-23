import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['protfolio3-d.onrender.com'],
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true, // Ensures Vite fails if 5173 is in use
    cors: true, // Enables CORS for API calls
    open: false, // Prevents auto-opening the browser
    allowedHosts: ['protfolio3-d.onrender.com'], // Allow AWS or Render
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Helps with debugging
  },
})
