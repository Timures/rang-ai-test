<script setup lang="ts">
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import dayjs from 'dayjs'
import { ref } from "vue";

// /const dateValue = ref("");

const formatter = ref({
  date: 'DD.MM.YYYY'
})

const formatDate = (date: dayjs) => dayjs(date).format("DD.MM.YYYY");

type DateValue = string | string[];
const dateValue = ref<DateValue>([]);

interface PeriodItem {
  label: string,
  days: number
}

const periodList:PeriodItem[] = [
  { label: "Yesterday", days: 1 },
  { label: "Last 7 Days", days: 7 },
  { label: "Last 30 Days", days: 30 },
  { label: "Last 90 Days", days: 90 },
  { label: "Last Year", days: 365 }
]

interface Period {
  subtract: number;
  unit: string;
}

const periods: Record<string, Period> = {
  "1": { subtract: 1, unit: "day" },
  "7": { subtract: 1, unit: "week" },
  "30": { subtract: 1, unit: "month" },
  "90": { subtract: 3, unit: "month" },
  "365": { subtract: 1, unit: "year" },
};

const setDateRange = (days: number): void => {
  const period = periods[days];
  if (period) {
    const endDate = dayjs();
    const startDate = dayjs().subtract(period.subtract, period.unit);
    dateValue.value = [formatDate(startDate), formatDate(endDate)];
    selectedPeriod.value = Number(days);
  }
};

const getDefaultDateRange = (): DateValue => {
  const endDate = dayjs();
  const startDate = dayjs().subtract(29, "day");
  return [formatDate(startDate), formatDate(endDate)];
};

const selectedPeriod = ref<number>(30);

const handleDate = () => {
  // Reset the active class for period buttons when the datepicker value changes
  console.log('reset selected period');
  
  selectedPeriod.value = -1;
};

onMounted(() => {
  // Устанавливаем значение по умолчанию (last 30 days) при монтировании компонента
  dateValue.value = getDefaultDateRange();
});

</script>

<template>
  <div>
    <vue-tailwind-datepicker v-model="dateValue" :formatter="formatter" :separator="' — '" @update:model-value="handleDate" />
    <div class="flex space-x-4 mt-4">
      <button v-for="(period, index) in periodList" :key="index" @click="setDateRange(period.days)" :class="{ 'active': selectedPeriod === period.days }">
        {{ period.label }}
      </button>
     
    </div>

  </div>
</template>

<style scoped>
button.active {
background: blue;
color: red;
}
</style>