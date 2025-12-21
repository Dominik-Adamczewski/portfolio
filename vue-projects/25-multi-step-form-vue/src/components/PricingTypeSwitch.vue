<template>
  <div class="flex items-center justify-center gap-6 bg-proj-25-neutral-blue-100 rounded-md py-2 px-6">
    <span
      class="font-medium"
      :class="{ 'text-proj-25-primary-blue-950': !isYearly, 'text-proj-25-neutral-grey-500': isYearly }"
    >
      Monthly
    </span>
    <button
      class="w-10 h-5 bg-proj-25-primary-blue-950 rounded-full p-0.5 transition-all duration-20 cursor-pointer"
      @click="togglePricingType"
    >
      <div
        class="w-3.5 h-3.5 bg-white rounded-full transition-transform duration-200"
        :class="{ 'translate-x-5': isYearly }"
      />
    </button>
    <span
      class="font-medium"
      :class="{ 'text-proj-25-primary-blue-950': isYearly, 'text-proj-25-neutral-grey-500': !isYearly }"
    >
      Yearly
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMultiStepFormStore } from '../stores/multiStepFormStore';

const store = useMultiStepFormStore();
const isYearly = computed(() => store.currentPricingType === 'yearly');

const togglePricingType = () => {
  store.changePricingType();
};
</script>
