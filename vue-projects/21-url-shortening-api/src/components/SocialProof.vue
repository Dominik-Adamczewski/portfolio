<template>
  <div
    class="text-center bg-white rounded-md p-6 relative"
    :class="{
      'social-proof-container my-20': !isLast && (device === 'mobile' || device === 'tablet'),
      'social-proof-container--desktop': !isLast && (device === 'desktop'),
      'lg:mt-8': id === 2,
      'lg:mt-16': id === 3
    }"
  >
    <div class="bg-proj-21-dark-violet p-5 rounded-full flex items-center justify-center w-fit mx-auto -mt-14 mb-6">
      <img :src="props.iconPath" alt="Social proof icon" class="w-10 h-10">
    </div>
    <h3 class="text-xl mb-4">{{ props.heading }}</h3>
    <p class="text-proj-21-grayish-violet">{{ props.paragraph }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useDevice } from '../composables/device';

const { device } = useDevice();

const props = defineProps({
  id: Number,
  heading: String,
  paragraph: String,
  iconPath: String,
  isLast: Boolean
});

</script>

<style scoped>
  .social-proof-container::after, .social-proof-container__desktop::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: -50px;
    background: hsl(180, 66%, 49%);
    width: 5px;
    height: 50px;
  }

  .social-proof-container--desktop::after {
    left: 100%;
    bottom: 50%;
    width: 50px;
    height: 5px;
  }
</style>
