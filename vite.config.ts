import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {ManifestV3Export, crx} from '@crxjs/vite-plugin'
import manifestJson from './public/manifest.json'
import tsconfigPaths from 'vite-tsconfig-paths'
import {resolve} from 'path'

const manifest = manifestJson as ManifestV3Export
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({manifest}), tsconfigPaths()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        popup: resolve(__dirname, 'popup.html'),
        options: resolve(__dirname, 'options.html'),
        side_panel: resolve(__dirname, 'sidepanel.html')
      }
    }
  }
})
