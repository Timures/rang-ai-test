<template>
    <button :class="{ 'active': isSelected }" @click="handleClick">
      {{ label }}
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, onMounted } from "vue";
  
  const label = defineProps("label");
  const selectedPeriod = ref<number>(30);
  
  const handleClick = (): void => {
    selectedPeriod.value = label.value;
  };
  
  const isSelected = () => selectedPeriod.value === label.value;
  
  onMounted(() => {
    isSelected(); // Ensure the initial state is set
  });
  </script>
  
  <style scoped>
  /* Добавим стили для активных кнопок */
  .active {
    background-color: #4caf50;
    color: white;
  }
  </style>
  