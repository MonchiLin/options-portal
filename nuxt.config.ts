import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    // 'primeicons/primeicons.css',

    'ant-design-vue/lib/popover/style/index.css',

    '@/assets/css/main.scss',
  ]
})
