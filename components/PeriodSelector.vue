<script setup lang="ts">
import { ref, onMounted, defineEmits} from 'vue';

const dateValue = ref();

// In case of a range picker, you'll receive [Date, Date]
const format = (dateRange:Date[]) => {
    const startDate = dateRange[0];
    const endDate = dateRange[1];

    const startDay = startDate.getDate().toString().padStart(2, '0');
    const startMonth = (startDate.getMonth() + 1).toString().padStart(2, '0');
    const startYear = startDate.getFullYear();

    const endDay = endDate.getDate().toString().padStart(2, '0');
    const endMonth = (endDate.getMonth() + 1).toString().padStart(2, '0');
    const endYear = endDate.getFullYear();

    return `${startDay}.${startMonth}.${startYear} - ${endDay}.${endMonth}.${endYear}`;
}

interface PeriodItem {
    label: string,
    days: number
}

const periodList: PeriodItem[] = [
    { label: "Вчера", days: 1 },
    { label: "Неделя", days: 7 },
    { label: "30 дней", days: 30 },
    { label: "90 дней", days: 90 },
    { label: "Год", days: 365 }
]

const emits = defineEmits(['selectPeriod']);

const setDateRange = (days: number): void => {

    const startDate = new Date();

    switch (days) {
        case 1:
            const endDate1DayAgo = new Date(startDate);
            endDate1DayAgo.setDate(startDate.getDate() - 1);
            dateValue.value = [startDate, endDate1DayAgo];
            selectedPeriod.value = days
            selectedPeriodInput.value = true
            break;

        case 7:
            const endDate7DaysAgo = new Date(startDate);
            endDate7DaysAgo.setDate(startDate.getDate() - 7);
            dateValue.value = [startDate, endDate7DaysAgo];
            selectedPeriod.value = days
            selectedPeriodInput.value = true
            break;

        case 30:
            const endDate30DaysAgo = new Date(startDate);
            endDate30DaysAgo.setDate(startDate.getDate() - 30);
            dateValue.value = [startDate, endDate30DaysAgo];
            selectedPeriod.value = days
            selectedPeriodInput.value = true
            break;

        case 90:
            const endDate90DaysAgo = new Date(startDate);
            endDate90DaysAgo.setDate(startDate.getDate() - 90);
            dateValue.value = [startDate, endDate90DaysAgo];
            selectedPeriod.value = days
            selectedPeriodInput.value = true
            break;

        case 365:
            const endDate1YearAgo = new Date(startDate);
            endDate1YearAgo.setFullYear(startDate.getFullYear() - 1);
            dateValue.value = [startDate, endDate1YearAgo];
            selectedPeriod.value = days
            selectedPeriodInput.value = true
            break;

        default:
            break;
    }

    
    emits('selectPeriod', days);
    console.log('setDateRange', days);
};

const getDefaultDateRange = () => {

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() - 30);
    return dateValue.value = [startDate, endDate];

};

const selectedPeriod = ref<number>(30);
const selectedPeriodInput = ref(false)

const handleDate = () => {
    // Reset the active class for period buttons when the datepicker value changes
    selectedPeriod.value = -1;
    selectedPeriodInput.value = false
};

onMounted(() => {
    // Устанавливаем значение по умолчанию (last 30 days) при монтировании компонента
    dateValue.value = getDefaultDateRange();
});
</script>

<template>
    <div class="flex gap-4 mt-4">
        <div class="flex space-x-4">
            <button v-for="(period, index) in periodList" :key="index" @click="setDateRange(period.days)"
                :class="selectedPeriod === period.days ? 'bg-input-textarea' : 'bg-white'"
                class="text-black font-inter text-base font-normal leading-6 flex items-center gap-10 px-5 py-1 rounded-md border border-dividers-borders-disabled-states">
                {{ period.label }}
            </button>

        </div>

        <div class="vue-datepicker max-w-320" >
            <VueDatePicker v-model="dateValue" range multi-calendars locale="ru" :format="format" :range-separator="'-'"
                @update:model-value="handleDate" cancelText="Отмена" selectText="Выбрать"  :class="{ active: selectedPeriodInput }"/> 
        </div>

    </div>
</template>

<style lang="scss">

.dp__theme_light {
    --dp-background-color: #fff;
    &.active {
        --dp-background-color: #f5f5f5;
    }
}
</style>