// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    errorHandler: false,
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  target: 'static',
  nitro: {
    preset: 'netlify'  // Ensures Nitro builds with Netlify-specific settings
  },
  ssr: true,
  tailwindcss: {
    // Options
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
