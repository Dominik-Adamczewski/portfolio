<template>
  <section>
    <FormStepHeading
      heading="Finishing up"
      text="Double-check everything looks OK before confirming."
      class="mb-7"
    />
    <OrderSummary :summary-obj="store.getSummaryObject" />
  </section>
</template>

<script setup>
import FormStepHeading from './FormStepHeading.vue';
import OrderSummary from './OrderSummary.vue';

import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();
</script>

<style scoped>
</style>
