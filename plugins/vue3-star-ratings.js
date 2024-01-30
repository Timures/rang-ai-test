import { defineNuxtPlugin } from '#app'
import vue3StarRatings from "vue3-star-ratings";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('vue3StarRatings', vue3StarRatings)
})
