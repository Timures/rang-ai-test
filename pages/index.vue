

<template>
    <container class="flex flex-col max-w-1240 mx-auto px-56 py-64">
        <h1 class="text-Black font-golos text-5xl font-bold leading-14">
            Аналитика по Автозаводской
        </h1>
        <PeriodSelector @select-period="handleChangePeriod"/>

        <div class="flex gap-2 mt-8">
            <h5 class="text-Black font-golos text-2xl font-bold leading-8">
                Динамика рейтинга и отзывов за 30 дней
            </h5>
            <Tooltip class="align-top" :content="'Какой то текст'" />
        </div>

        <div class="container-max pt-8 px-4 pb-12 rounded-md border border-dividers-borders-disabled-state mt-4">


            <div class="flex gap-10">
                <div class="flex gap-2">
                    <div class="text-Black font-golos text-4xl font-bold leading-10">1720</div>
                    <div class="text-Black font-Inter text-sm font-normal leading-4 py-1 text-wrap">
                        запросов <br /> отправлено
                    </div>
                </div>

                <div class="flex gap-2">
                    <div class="text-Green font-golos text-4xl font-bold leading-10">142</div>
                    <div class="text-Black font-Inter text-sm font-normal leading-4 py-1 text-wrap">
                        прирост <br /> отзывов
                    </div>
                </div>

                <div class="flex gap-2">
                    <div class="text-Orange font-golos text-4xl font-bold leading-10">22</div>
                    <div class="text-Black font-Inter text-sm font-normal leading-4 py-1 text-wrap">
                        негатива <br />перехвачено
                    </div>
                </div>

                <div class="flex gap-2">
                    <div class="text-Black font-golos text-4xl font-bold leading-10">4.5</div>
                    <div class="text-Black font-Inter text-sm font-normal leading-4 py-1 text-wrap">
                        <vue3-star-ratings v-model="rating" starColor="#FFEB3B" starSize="14" inactiveColor="#d2d2d2" />
                        629 отзывов
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-5 gap-4 items-top mt-6">
                <div class="max-w-185 text-wrap text-Black font-inter font-bold">
                    Площадки<br /> и их активность
                    <Tooltip class="align-center" :content="'Всплывающая подсказка про активность'" />
                </div>

                <div>
                    <div class="text-Black font-inter font-bold">Рейтинг и отзывы</div>
                    <div class="flex gap-6">
                        <div>1 янв</div>
                        <div>31 фев</div>
                    </div>
                </div>



                <div class="max-w-185 text-wrap text-Black font-inter font-bold">
                    Прирост отзывов<br /> и рейтинга
                </div>

                <div class="max-w-185 text-wrap text-Black font-inter font-bold">
                    Доля негативных<br /> отзывов на сегодня
                </div>

                <div class="flex max-w-185 text-wrap text-Black font-inter font-bold justify-center">
                    Место<br /> в городе
                </div>
            </div>

            <div class="mt-6">

                <ul class="platform-list">
                    <li v-for="platformItem in platformPeriod" :key="platformItem.id" class="grid grid-cols-5 gap-2">
                        <div class="col-span-1">
                            <div class="flex gap-4">
                                <ToggleBtn :is-checked="platformItem.status" @change-status="handleChangeStatus(platformItem.id)" />

                                <PlatformItem :platform-id="platformItem.id" />
                            </div>
                        </div>

                        <div class="col">
                            <div class="flex gap-6">
                                <div class="flex flex-col items-center">
                                    <span class="px-2 py-0 rounded-md bg-[#FCF0EA] text-Black font-inter leading-6">
                                        {{ platformItem.Rating.start }}
                                    </span>
                                    <span class="text-gray-500 font-Inter text-base font-normal leading-6">
                                        {{ platformItem.reviews.start }}
                                    </span>
                                </div>

                                <div class="flex flex-col items-center">
                                    <span class="px-2 py-0 rounded-md bg-[#E9F6F0] text-Black font-inter leading-6">
                                        {{ platformItem.Rating.end }}
                                    </span>
                                    <span class="text-gray-500 font-Inter text-base font-normal leading-6">
                                        {{ platformItem.reviews.end }}
                                    </span>
                                </div>
                            </div>
                        </div>



                        <div class="col">
                            <div class="flex justify-start">
                                <div class="flex flex-col items-center">
                                <span class="px-2 py-0 rounded-md text-Green font-inter leading-6 font-bold">
                                +{{ platformItem.IncreaseRating.rating }}
                                </span>
                                <span class="text-gray-500 font-Inter text-base font-bold leading-6">
                                +{{ platformItem.IncreaseRating.reviews }}
                                </span>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="flex gap-5">
                                <span class="px-2 py-0 rounded-md bg-[#E9F6F0] text-Black font-inter leading-6 h-6">
                                    {{ platformItem.ShareNegativeToday.percent }}%
                                </span>

                                <span class="text-Orange font-Inter text-base font-normal leading-6">
                                    {{ platformItem.ShareNegativeToday.reviews }} отзывов
                                </span>
                                <span> из {{ platformItem.ShareNegativeToday.total }}</span>
                            </div>
                        </div>

                        <div class="col">
                            <div class="flex gap-2 justify-center">
                                <span>
                                    {{ platformItem.PlaceCity.place }} из {{ platformItem.PlaceCity.total }}
                                </span>
                                <div v-show="platformItem.PlaceCity.isUp"
                                    class="text-Green font-Inter text-base font-normal leading-6">🠕
                                </div>

                                <div v-show="platformItem.PlaceCity.isDown"
                                    class="text-Orange font-Inter text-base font-normal leading-6">🠓
                                </div>

                            </div>
                        </div>


                    </li>
                </ul>


            </div>
        </div>

    </container>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';

import PeriodSelector from '~/components/PeriodSelector.vue'
import Tooltip from '~/components/TooltipBtn.vue'
import vue3starRatings from "vue3-star-ratings";
import ToggleBtn from '~/components/ToggleBtn.vue'
import PlatformItem from '~/components/PlatformItem.vue';
const rating = ref(4.5)


interface Platform {
    id: number;
    status: boolean;
    Rating: {
        start: number,
        end: number
    };
    reviews: {
        start: number,
        end: number
    };
    IncreaseRating: {
        rating: number,
        reviews: number
    };
    ShareNegativeToday: {
        percent: number,
        reviews: number,
        total: number
    };
    PlaceCity: {
        place: number,
        total: number,
        isUp: boolean,
        isDown: boolean
    };
}
const platformPeriod = ref<Array<Platform>>([]);

    // получаем данные при изменении периода - пока только за неделю и месяц
    const receivedDays = ref();
    
const handleChangePeriod = (days:number) => {
    receivedDays.value = days
    console.log('change period ', receivedDays.value);
    // Пример вызова
    fetchDataBasedOnDays(receivedDays.value)
   
};

const fetchDataBasedOnDays = async (days:number) => {
    if (days === 7) {
        await fetchDataByPeriod('/api/week');
    } 

    if(days === 30){
        await fetchDataByPeriod('/api/month');
    }
    
    else {
        // Добавь другие условия, если необходимо
        console.log('No endpoint for the given number of days.');
    }

 
}

const fetchDataByPeriod = async (endpoint:string) => {
    try {
        const response = await fetch(endpoint);
        const responseData = await response.json();
        platformPeriod.value = responseData.data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// загружаем данные по умолчанию 30 дней
const fetchData = async () => {
    try {
        const response = await fetch('/api/month');
        const responseData = await response.json();
        platformPeriod.value = responseData.data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


// отправляем в бэк изменение статуса 
const handleChangeStatus = (platformID:number) => {
    console.log('change status', platformID)
    submitChangeStatus(platformID)
    
}

const submitChangeStatus = async (platformID:number) => {
    const { data: responseData } = await useFetch('/api/change', {
        method: 'post',
        body: { 
         id: platformID
        }
    })

    console.log(responseData.value)
}

onMounted(() => {
    fetchData();
});
</script>
  
<style lang="scss">
.container-max {
    max-width: 1128px;
}
.platform-list {
    li {
        &:not(:last-child){
            margin-bottom: 16px;
        }
    }
}
</style>
  