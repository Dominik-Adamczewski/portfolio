<template>
  <section>
    <FormStepHeading
      heading="Pick add-ons"
      text="Add-ons help enhance your gaming experience."
      class="mb-7"
    />
    <div>
      <MultipleChoiceButton
        v-for="(item, index) in store.availableAddOns"
        :key="index"
        :content-obj="item"
        @update:checked="handleCheckingAddOn"
      />
    </div>
  </section>
</template>

<script setup>
import FormStepHeading from './FormStepHeading.vue';
import MultipleChoiceButton from './MultipleChoiceButton.vue';

import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();

const handleCheckingAddOn = (data) => {
  if (data.isChecked) {
    return store.chooseAddOn(data.primaryLabel);
  }
  return store.unChooseAddOn(data.primaryLabel);
};
</script>

<style scoped>
</style>
