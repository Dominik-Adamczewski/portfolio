<template>
  <div class="lg:flex lg:items-center lg:mb-3">
    <div
      class="w-6 h-6 text-white border border-white flex items-center justify-center rounded-full p-4 cursor-default lg:mr-3"
      :class="{ 'bg-proj-25-primary-blue-300 border-proj-25-primary-blue-300 text-proj-25-primary-blue-950': isActive }"
    >
      {{ props.stepNumber }}
    </div>
    <div class="hidden lg:block">
      <div class="text-proj-25-neutral-grey-500">
        {{ props.stepNumberLabel }}
      </div>
      <div class="text-white font-semibold">
        {{ props.stepText }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  stepNumber: {
    type: Number,
    default: 0
  },
  stepNumberLabel: {
    type: String,
    default: null
  },
  stepText: {
    type: String,
    default: null
  },
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
</style>
