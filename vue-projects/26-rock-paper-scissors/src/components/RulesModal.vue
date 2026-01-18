<template>
  <section class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="absolute top-0 lg:top-1/2 lg:-translate-y-1/2 left-0 lg:left-1/2 lg:-translate-x-1/2 right-0 min-h-screen lg:min-h-fit lg:max-w-xl bg-white grid grid-rows-[min-content_1fr_min-content] lg:grid-rows-[min-content_1fr] lg:grid-cols-2 gap-6 p-6 items-center lg:rounded-lg">
      <h2 class="text-3xl font-semibold text-proj-26-neutral-gray-600 lg:col-start-1 lg:row-start-1 text-center lg:text-left">RULES</h2>
      <img class="lg:col-span-2 lg:row-start-2 justify-self-center" src="/images/image-rules.svg" alt="Rules image">
      <img class="w-5 h-5 cursor-pointer justify-self-center lg:col-start-2 lg:row-start-1 lg:justify-self-end" src="/images/icon-close.svg" alt="Close icon" @click="$emit('close')">
    </div>
  </section>
</template>

<script setup>
import { defineEmits } from 'vue';

defineEmits(['close']);
</script>

<style scoped>
</style>
