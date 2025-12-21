<template>
  <div class="flex flex-col h-full flex-grow justify-between lg:justify-center lg:flex-1 lg:pt-6 lg:mx-12">
    <section class="bg-white w-full mx-auto lg:mx-0 p-4 rounded-md -mt-8 lg:mt-0 md:max-w-xl lg:min-h-[420px]">
      <Transition mode="out-in">
        <StepOne v-if="store.currentStep === 1" />
        <StepTwo v-else-if="store.currentStep === 2" />
        <StepThree v-else-if="store.currentStep === 3" />
        <StepFour v-else-if="store.currentStep === 4 && !store.isFormSubmitted" />
        <ThankYouStep v-else-if="store.currentStep === 4 && store.isFormSubmitted" />
      </Transition>
    </section>
    <section
      v-if="!(store.currentStep === 4 && store.isFormSubmitted)"
      class="flex justify-end items-center pr-4 bg-white h-20 mt-10"
      :class="{ 'justify-between pl-4': store.currentStep > 1 }"
    >
      <BaseButton
        v-if="store.currentStep > 1"
        class="mr-4"
        text="Go Back"
        type="secondary"
        @click="store.goToThePreviousStep"
      />
      <BaseButton
        :text="store.currentStep === 4 ? 'Confirm' : 'Next step'"
        type="primary"
        @click="handleGoingToTheNextStep"
      />
    </section>
  </div>
</template>

<script setup>
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';
import StepFour from './StepFour.vue';
import ThankYouStep from './ThankYouStep.vue';
import BaseButton from './BaseButton.vue';

import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();

const handleGoingToTheNextStep = () => {
  if (store.currentStep === 1) {
    store.submitFirstStepOfTheForm();
    return;
  }
  if (store.currentStep === 4) {
    store.submitTheForm();
  }
  store.goToTheNextStep();
};
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
