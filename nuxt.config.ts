// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',  // Ensure fully static site generation
  nitro: {
    prerender: {
      routes: ['/']  // Explicitly set routes to prerender
    },
    output: {
      dir: 'dist', // Set Nitro output to `dist` directly
      publicDir: 'dist', // Align public directory with `dist`
    },
    preset: 'static' // Explicitly set preset to static to avoid server artifacts
  },
  generate: {
    dir: 'dist' // Final static output location
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
