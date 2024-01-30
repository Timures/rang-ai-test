import { defineNuxtPlugin } from '#app'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional for styling

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueTippy', VueTippy)
})
