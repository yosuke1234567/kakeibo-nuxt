import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    // ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: { fa },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})