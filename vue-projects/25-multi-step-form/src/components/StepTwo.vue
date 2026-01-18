<template>
  <section>
    <FormStepHeading
      heading="Select your plan"
      text="You have the option of monthly or yearly billing."
      class="mb-7"
    />
    <div class="lg:flex lg:justify-between lg:w-full lg:h-40 lg:gap-3">
      <SingleChoiceButton
        v-for="(plan, index) in store.availablePlans"
        :key="index"
        :content-obj="plan"
        :is-chosen="store.currentPlan === plan.type"
        name="plan"
        :input-name="plan.type"
        @plan-chosen="store.changeCurrentPlan"
      />
    </div>
    <PricingTypeSwitch class="my-5 lg:mt-10" />
  </section>
</template>

<script setup>
import FormStepHeading from './FormStepHeading.vue';
import SingleChoiceButton from './SingleChoiceButton.vue';
import PricingTypeSwitch from './PricingTypeSwitch.vue';

import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();
</script>

<style scoped>
</style>
