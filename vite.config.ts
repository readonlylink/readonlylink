import vue from '@vitejs/plugin-vue'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: '0.0.0.0' },
  test: { environment: 'jsdom' },
  build: { sourcemap: true },
  plugins: [vue(), splitVendorChunkPlugin(), pluginRewriteAll()],
})
