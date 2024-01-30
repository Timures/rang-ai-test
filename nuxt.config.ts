// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [
    '~/plugins/vue-datepicker.js',
    '~/plugins/vue-tippy.js',
    '~/plugins/vue3-star-ratings.js'
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker']
}
})