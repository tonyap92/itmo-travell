// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({ 
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [['defineStore', 'definePiniaStore']],
      },
    ],
    ['@nuxtjs/tailwindcss'],
    ['@vueuse/nuxt'],
  ],
  app: {
    head: {
      title: 'Places',
      meta: [{ name: 'description', content: 'Places' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap',
        },
      ],
    },
  },
  extends: ['./backend'],

  ssr: false,
})
