<script setup lang="ts">
  import { ref } from 'vue';
import PeriodSelector from '~/components/PeriodSelector.vue'
import Tooltip from '~/components/TooltipBtn.vue'
import vue3starRatings from "vue3-star-ratings";
import ToggleBtn from '~/components/ToggleBtn.vue'
import PlatformItem from '~/components/PlatformItem.vue';
const rating = ref(4.5)

</script>

<template>
    <container class="flex flex-col max-w-1240 mx-auto px-56 py-64">
        <h1 class="text-Black font-golos text-5xl font-bold leading-14">
            Аналитика по Автозаводской
        </h1>
        <PeriodSelector />

        <div class="flex gap-2 mt-8">
            <h5 class="text-Black font-golos text-2xl font-bold leading-8">
                Динамика рейтинга и отзывов за 30 дней
            </h5>
            <Tooltip class="align-top" :content="'Какой то текст'" />
        </div>

        <div class="pt-8 px-4 pb-12 rounded-md border border-dividers-borders-disabled-state mt-4">
      

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
            
            <div class="flex gap-10 items-top mt-6">
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

                <div class="max-w-185 text-wrap text-Black font-inter font-bold">
                    Место<br /> в городе
                </div>
            </div>
       
            <div class="mt-6">

               

                <div>
                    <ToggleBtn />
                </div>

                <div class="">
                    <PlatformItem :platformId="1" />
                </div>

            </div>
        </div>

    </container>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>