<template>
  <section class="boost-link flex flex-col items-center px-4 py-14">
    <h2 class="text-2xl font-semibold mb-4 text-white">Boost your links today</h2>
    <BaseButton class="mt-4" text="Get started" type="cta" :width="btnWidth" rounded="strong-rounding" />
  </section>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { useDevice } from '../composables/device';
import { computed } from 'vue';

const { device } = useDevice();

const btnWidth = computed(() => device.value === 'desktop' ? 'xs' : 'md');
</script>

<style scoped>
  .boost-link {
    background-color: hsl(257, 27%, 26%);
    background-image: url('../../public/images/bg-boost-mobile.svg');
    background-repeat: no-repeat;
    background-position: right;
  }
</style>
