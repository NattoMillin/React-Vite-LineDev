import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({    
  base: process.env.Vite_GITHUB_PAGES  // この行を追加
      ? "React-Vite-LineDev"            // この行を追加
      : "./",                     // この行を追加
  plugins: [react()],
})
