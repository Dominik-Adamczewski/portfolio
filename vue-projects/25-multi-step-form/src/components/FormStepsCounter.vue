<template>
  <div class="w-full max-w-[50%] md:max-w-sm mx-auto">
    <div class="flex items-center justify-between lg:flex-col lg:items-start lg:ml-12">
      <FormStep
        v-for="(step, index) in props.steps"
        :key="index"
        :step-number="step.stepNumber"
        :step-number-label="step.stepNumberLabel"
        :step-text="step.stepText"
        :is-active="step.stepNumber === store.currentStep"
      />
    </div>
  </div>
</template>

<script setup>
import FormStep from './FormStep.vue';

import { defineProps } from 'vue';
import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();

const props = defineProps({
  steps: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
</style>
