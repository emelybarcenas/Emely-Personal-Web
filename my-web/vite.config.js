import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    postcss:'./postcss.config.js',
  },
  server: {
    host: '0.0.0.0',  // Allows access from external devices
    port: 3000,  // Or any port you prefer
  }
})
