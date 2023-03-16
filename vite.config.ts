import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: '0.0.0.0' },
  test: { environment: 'jsdom' },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          postmark: ['@xieyuheng/postmark'],
          highlight: ['highlight.js'],
          vue: ['vue'],
          'sanitize-html': ['sanitize-html'],
        },
      },
    },
  },

  plugins: [vue(), pluginRewriteAll()],
})
