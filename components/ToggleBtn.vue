<template>
  <label class="flex cursor-pointer select-none items-center">
    <div class="relative">
      <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
      <div
        :class="{ 'bg-blue-500': isChecked, 'bg-gray-300': !isChecked }"
        class="block h-6 w-12 rounded-full transition"
      ></div>
      <div
        :class="{ 'translate-x-full bg-white border-blue-500': isChecked }"
        class="dot absolute left-0 top-0 h-6 w-6 rounded-full bg-white transition border border-gray-300"
      ></div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  isChecked: Boolean
})

const emits = defineEmits(['changeStatus'])

const handleCheckboxChange = () => {
  props.isChecked = !props.isChecked
  // отправляем в бэк, изменение статуса
  emits('changeStatus')
}
</script>
