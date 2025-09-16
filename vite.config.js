import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  
  return {
    base: isDev ? '/' : '/dist/',
    build: {
      outDir: 'web/dist',
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: {
          app: 'src/js/app.js',
        },
      },
    },
    server: {
      origin: 'http://localhost:5173',
      port: 5173,
      strictPort: true,
      cors: true,
    },
    css: {
      postcss: './postcss.config.js',
    },
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
        
      })
    ],
  }
})