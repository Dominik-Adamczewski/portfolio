<template>
  <div class="sidebar min-h-40 lg:max-w-xs lg:rounded-md">
    <FormStepsCounter
      :steps="store.formSteps"
      class="pt-10"
    />
  </div>
</template>

<script setup>
import FormStepsCounter from './FormStepsCounter.vue';

import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();

</script>

<style scoped>
  .sidebar {
    background-image: url('../../public/images/bg-sidebar-mobile.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
  @media (min-width: 1024px) {
    .sidebar {
      background-image: url('../../public/images/bg-sidebar-desktop.svg');
    }
  }
</style>
