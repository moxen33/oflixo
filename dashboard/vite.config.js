import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const baseUrl = mode == 'production' ? env.VITE_URL : env.BASE_URL
  return {
    base: baseUrl,
    server: {
      open: true, // 👈 Automatically open the browser when the server starts
    },
    plugins: [react()],
     optimizeDeps: {
      include: ['quill'], // 👈 Force Vite to pre-bundle 'quill'
    },
    build: {
      outDir: 'build',
      minify: true,
      commonjsOptions: {
        transformMixedEsModules: true, // 👈 Allow CJS inside ESM
      },

    }
  }
})
