<template>
  <div class="bg-white flex flex-col lg:flex-row-reverse lg:items-center lg:mt-10">
    <div class="w-full">
      <img src="/images/illustration-working.svg" alt="Person working image" class="mx-auto w-4/5 sm:w-3/5 lg:mx-0 lg:ml-20 lg:w-full">
    </div>
    <div class="mt-3 text-center lg:text-left">
      <h1 class="text-3xl lg:text-6xl text-center lg:text-left font-semibold">More than just shorter links</h1>
      <p class="mt-2 text-proj-21-grayish-violet lg:text-xl">Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <BaseButton class="mt-4 lg:mt-8" text="Get started" type="cta" :width="device === 'desktop' ? 'sm' : 'md'" rounded="strong-rounding" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { useDevice } from '../composables/device';

const { device } = useDevice();
</script>

<style scoped>
</style>
