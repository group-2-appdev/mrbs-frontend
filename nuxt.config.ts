// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',  // Confirm target is static
  nitro: {
    prerender: {
      routes: ['/'],  // Define routes for prerendering
    },
    output: {
      dir: '.output',   // Use default .output directory for clarity
    },
  },
  generate: {
    dir: 'dist',       // Output final static files in `dist`
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
