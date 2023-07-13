import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/register": "https://taskrapi.onrender.com",
      "/login": "https://taskrapi.onrender.com",
      "/verifySession": "https://taskrapi.onrender.com",
      "/employee": "https://taskrapi.onrender.com",
      "/teams": "https://taskrapi.onrender.com",
    }
  }
})
