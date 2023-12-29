import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
import { ja as jaJP } from 'date-fns/locale'
import DateFnsAdapter from '@date-io/date-fns'
import { ja, en } from 'vuetify/locale'

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
    locale: {
      locale: 'ja',
      fallback: 'en',
      messages: { ja, en }
    },
    date: {
      adapter: DateFnsAdapter,
      locale: {
        ja: jaJP
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})