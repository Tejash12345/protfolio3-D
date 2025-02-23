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
    strictPort: true, // Ensures Vite fails if port 5173 is unavailable
    cors: true, // Enables CORS for API calls from different origins
    open: false, // Prevents auto-opening browser on startup
    allowedHosts: ['protfolio3-d.onrender.com'], // Allow AWS or Render deployment
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Helps debugging AWS issues
  },
})
