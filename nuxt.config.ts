// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Jasco\'s Sushi"
    },
  },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        code: 'es-NI',
        name: 'Español (Nicaragua)',
        iso: 'es-NI',
        file: 'es-NI.json'
      }
      ],
    langDir: 'locales',
    vueI18n: './i18n.config.ts' 
  }
})
