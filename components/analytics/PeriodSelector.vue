<template>
  <div class="period-selector">
    <button
      v-for="period in periods"
      :key="period.id"
      @click="handlePeriodClick(period.id)"
      :class="{ active: selectedPeriod === period.id }"
    >
      {{ period.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emits = defineEmits()
const periods = ref([
  { id: '1day', label: '1 день' },
  { id: '2days', label: '2 дня' },
  { id: '1week', label: 'Неделя' },
  { id: '1month', label: 'Месяц' },
  { id: '3months', label: '3 месяца' },
])

const selectedPeriod = ref('1day')

const handlePeriodClick = (periodId: string) => {
  selectedPeriod.value = periodId
  emits('periodChange', periodId)
}
</script>

<style scoped>
.period-selector {
  display: flex;
  gap: 10px;
}

.period-selector button {
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #fff;
}

.period-selector button.active {
  background-color: #4caf50;
  color: #fff;
  border: 1px solid #4caf50;
}
</style>
