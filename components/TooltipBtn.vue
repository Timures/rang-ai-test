<template>
    <button ref="btn" class="tooltip-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M7.33333 7.31962C7.33333 6.95143 7.63181 6.65295 8 6.65295C8.36819 6.65295 8.66667 6.95143 8.66667 7.31962V11.3196C8.66667 11.6878 8.36819 11.9863 8 11.9863C7.63181 11.9863 7.33333 11.6878 7.33333 11.3196V7.31962Z"
                fill="#9A9A9A" />
            <path
                d="M8 4.03414C7.63181 4.03414 7.33333 4.33262 7.33333 4.70081C7.33333 5.069 7.63181 5.36747 8 5.36747C8.36819 5.36747 8.66667 5.069 8.66667 4.70081C8.66667 4.33262 8.36819 4.03414 8 4.03414Z"
                fill="#9A9A9A" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8 1.33337C4.3181 1.33337 1.33333 4.31814 1.33333 8.00004C1.33333 11.6819 4.3181 14.6667 8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8 1.33337ZM2.66667 8.00004C2.66667 10.9456 5.05448 13.3334 8 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00004C13.3333 5.05452 10.9455 2.66671 8 2.66671C5.05448 2.66671 2.66667 5.05452 2.66667 8.00004Z"
                fill="#9A9A9A" />
        </svg>
    </button>
</template>
  
<script setup>
import { useTippy } from 'vue-tippy'

const btn = ref()
const props = defineProps(['content']);
useTippy(btn, {
    theme: 'custom',
    content: props.content,
    arrow: false,
    offset: [0, 2],
    placement: 'bottom-start',
})
</script>

<style lang="scss">
.tippy-box[data-theme~='custom'] {
    padding: 8px 20px 12px 16px;
  background-color: var(--Black, #000);
  color: var(--White, #FFF);
/* Desktop/Body S */
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 123.077% */
}

.tooltip-btn {
    width: 16px;
    height: 16px;
}
</style>