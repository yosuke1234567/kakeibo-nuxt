// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'kakeibo by nuxt',
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&family=Zen+Maru+Gothic:wght@400;500&display=swap' }]
    }
  },
  build: {
    transpile: ['vuetify']
  },
  css: ['@/assets/main.scss'],
  typescript: {
    strict: true
  }
})
