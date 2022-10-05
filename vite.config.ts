import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'path'
// import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'url'
import { resolve, dirname } from 'node:path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vueI18n({
      // you need to set i18n resource including paths
      include: resolve(dirname(fileURLToPath(import.meta.url)), '../locales'),
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),    
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style.scss";
        `
      }
    }
  },
  resolve:{
    alias: {
      // '@': path.resolve(__dirname, './src'),
      '@': fileURLToPath(new URL('./src', import.meta.url) ),
    }
  }
})
