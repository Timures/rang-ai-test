<template>
  <div class="container mx-auto">
    <h1>Аналитика по Автозаводской</h1>
    <PeriodSelector @periodChange="handlePeriodChange" />
    <p v-if="selectedPeriod">Выбран период: {{ selectedPeriod }}</p>
  </div>
</template>

<script setup lang="ts">
import PeriodSelector from '~/components/analytics/PeriodSelector.vue'
import { ref } from 'vue'

const selectedPeriod = ref('')
const handlePeriodChange = (periodId: string) => {
  selectedPeriod.value = periodId
  // Тут ты можешь выполнить дополнительные действия при изменении периода
}

// Возможно, тут ты хочешь выполнить какие-то действия при изменении периода

</script>