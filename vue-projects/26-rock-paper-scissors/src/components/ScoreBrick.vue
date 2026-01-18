<template>
  <div class="w-28 h-24 bg-white rounded-md flex flex-col justify-center items-center">
    <p class="text-sm text-proj-26-primary-blue-700 tracking-[3px]">SCORE</p>
    <p class="text-5xl text-proj-26-neutral-gray-600 tracking-[-8px] font-semibold mr-3">{{ props.score }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  score: {
    type: Number,
    required: true
  }
});
</script>

<style scoped>
</style>
