import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const baseURL =
    mode === 'locale-dev' ? 'http://localhost:3000' : env.VITE_API_URL
  return {
    plugins: [react()],
    define: {
      __BASE_URL__: JSON.stringify(baseURL)
    }
  }
})
