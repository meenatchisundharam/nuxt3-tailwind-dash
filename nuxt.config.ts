// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      link:[
        {
          rel:"stylesheet",
          href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
        },
        {
          rel:"stylesheet",
          href:"https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap",
        }
        ],
    },
  },
  devtools: { enabled: true }
})
