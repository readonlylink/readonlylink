import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin, defineConfig } from 'vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: '0.0.0.0' },
  test: { environment: 'jsdom' },
  build: { sourcemap: true },
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    // Vite 2 plugin that fix dev server not rewriting the path includes a dot.
    // - repo: https://github.com/ivesia/vite-plugin-rewrite-all
    // - issues:
    //   - https://github.com/vitejs/vite/issues/2190
    //   - https://github.com/vitejs/vite/issues/2415
    //   - https://github.com/vitejs/vite/issues/4344
    pluginRewriteAll(),
  ],
})
