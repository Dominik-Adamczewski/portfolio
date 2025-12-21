<template>
  <section>
    <component :is="currentStepComponent" />
  </section>
</template>

<script setup>
import { computed } from 'vue';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';
import { useGameStore } from '../stores/gameStore';

const store = useGameStore();

const stepComponents = {
  1: StepOne,
  2: StepTwo,
  3: StepThree
};

const currentStepComponent = computed(() => {
  return stepComponents[store.currentStep];
});
</script>

<style scoped>
</style>
