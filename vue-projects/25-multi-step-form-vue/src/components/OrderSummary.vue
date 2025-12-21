<template>
  <section class="bg-proj-25-neutral-blue-100 rounded-md p-4">
    <div
      class="pb-2 mb-3 flex items-center justify-between"
      :class="{ 'border-b': summaryObj.chosenAddOnsData.length > 0 }"
    >
      <div>
        <span class="text-proj-25-primary-blue-950 font-semibold">
          {{ summaryObj.planData.label }}
        </span>
        <button
          class="underline text-proj-25-neutral-grey-500 cursor-pointer hover:text-proj-25-neutral-grey-700 block"
          @click="store.goBackToCurrentPlanStep"
        >
          Change
        </button>
      </div>
      <div class="text-proj-25-primary-blue-950 font-semibold">
        {{ summaryObj.planData.priceLabel }}
      </div>
    </div>
    <div>
      <div
        v-for="(item, index) in summaryObj.chosenAddOnsData"
        :key="index"
      >
        <div class="flex items-center justify-between">
          <span class="text-proj-25-neutral-grey-500 mb-3">{{ item.label }}</span>
          <span class="text-proj-25-primary-blue-950">{{ item.priceLabel }}</span>
        </div>
      </div>
    </div>
  </section>
  <div class="mt-4 px-4 text-proj-25-neutral-grey-500 flex items-center justify-between">
    <span>Total {{ store.currentPlan === 'monthly' ? '(per month)' : '(per year)' }}</span>
    <span class="text-lg font-semibold text-proj-25-primary-purple-600">
      +${{ summaryObj.totalPrice }}/{{ store.currentPricingType === 'monthly' ? 'mo' : 'year' }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();
const summaryObj = computed(() => store.getSummaryObject);
</script>

<style scoped>
</style>
