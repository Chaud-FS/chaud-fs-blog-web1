import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    // Surface large chunks instead of hiding the warning.
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Split heavy vendors into their own long-cacheable chunks so the
        // initial route only downloads what it actually needs.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          const nid = id.replace(/\\/g, '/')
          if (nid.includes('/three/') || nid.includes('@react-three')) return 'three'
          if (
            nid.includes('react-markdown') ||
            nid.includes('remark') ||
            nid.includes('micromark') ||
            nid.includes('mdast') ||
            nid.includes('unist') ||
            nid.includes('hast') ||
            nid.includes('vfile') ||
            nid.includes('property-information') ||
            nid.includes('space-separated') ||
            nid.includes('comma-separated') ||
            nid.includes('decode-named') ||
            nid.includes('character-entities') ||
            nid.includes('html-void')
          )
            return 'markdown'
          if (nid.includes('react-router') || nid.includes('@remix-run')) return 'router'
          return 'vendor'
        },
      },
    },
  },
})
