// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',  // This should be 'static' for static site generation
  nitro: {
    prerender: {
      routes: ['/']  // Specify routes to be prerendered
    },
    output: {
      dir: 'dist',
      publicDir: 'dist' // Override public directory to avoid nesting
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
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
