<template>
  <section class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div
      class="absolute bottom-0 lg:top-1/2 lg:-translate-y-1/2 left-0 lg:left-1/2 lg:-translate-x-1/2 right-0 min-h-48 lg:min-h-fit lg:max-w-xl bg-white p-6 rounded-md"
    >
      <h2 class="text-xl text-center mb-4">We saved score from your last game</h2>
      <p class="mb-6">Would you like to continue with points from previous game, or start over?</p>
      <div class="flex flex-col lg:flex-row items-center justify-around">
        <BaseButton class="w-full lg:w-auto mb-2" text="Start over" :secondary="false" @click="$emit('start-over')" />
        <BaseButton class="w-full lg:w-auto" text="Continue last game" :secondary="false" @click="$emit('continue')" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineEmits } from 'vue';
import BaseButton from './BaseButton.vue';

defineEmits(['start-over', 'continue']);
</script>

<style scoped>
</style>
