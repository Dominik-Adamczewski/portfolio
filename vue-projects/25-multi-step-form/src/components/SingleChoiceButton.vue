<template>
  <label
    class="flex lg:flex-col border p-4 my-2 items-center lg:items-start lg:justify-between rounded-md cursor-pointer lg:h-full lg:w-[90%] hover:border-proj-25-primary-purple-600 focus-within:bg-proj-25-neutral-blue-100"
    :class="{ 'border-proj-25-primary-purple-600': isChosen }"
  >
    <input
      type="radio"
      class="sr-only"
      :name="props.inputName"
      :checked="props.isChosen"
      @change="handleChoosingPlan"
    >
    <img
      :src="props.contentObj.imgUrl"
      :alt="props.contentObj.imgAlt"
      class="mr-4"
      :class="{ 'self-start': store.currentPricingType === 'yearly' }"
    >
    <div>
      <p class="text-lg text-proj-25-primary-blue-950 font-semibold">
        {{ props.contentObj.type }}
      </p>
      <p class="text-proj-25-neutral-grey-500">
        {{ store.currentPricingType === 'monthly' ? props.contentObj.priceMonthlyLabel : props.contentObj.priceYearlyLabel }}
      </p>
      <p
        v-if="store.currentPricingType === 'yearly'"
        class="text-xs mt-1 text-proj-25-primary-blue-950"
      >
        2 months free
      </p>
    </div>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useMultiStepFormStore } from '../stores/multiStepFormStore';

const store = useMultiStepFormStore();

const emit = defineEmits(['plan-chosen']);

const props = defineProps({
  contentObj: {
    type: Object,
    required: true
  },
  isChosen: {
    type: Boolean,
    required: true,
    default: false
  },
  inputName: {
    type: String,
    required: true
  }
});

const handleChoosingPlan = () => {
  emit('plan-chosen', props.contentObj.type);
};
</script>

<style scoped>
</style>
