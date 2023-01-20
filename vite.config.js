import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://hernan53865.github.io/rick-and-morty/",
  plugins: [react()],
})
