import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace'

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        //  Toggle the booleans here to enable / disable Phaser 3 features:
      ],
    },
  },
})
