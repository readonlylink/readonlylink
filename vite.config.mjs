import vue from '@vitejs/plugin-vue'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: '0.0.0.0' },
  build: { sourcemap: true },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('x-'),
        },
      },
    }),
    splitVendorChunkPlugin(),
  ],
})
