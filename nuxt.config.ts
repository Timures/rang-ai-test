// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [
    '~/plugins/vue-tailwind-datepicker.js',
    '~/plugins/dayjs.js'
  ],
})