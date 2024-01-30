import { defineNuxtPlugin } from '#app'
import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('dayjs', dayjs)
})