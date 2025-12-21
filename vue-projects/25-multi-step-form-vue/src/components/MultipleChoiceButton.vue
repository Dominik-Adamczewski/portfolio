<template>
  <div
    class="border border-proj-25-neutral-grey-500 rounded-md my-4 hover:bg-proj-25-neutral-blue-100"
    :class="{ 'border-proj-25-primary-purple-600 bg-proj-25-neutral-blue-100': isChecked }"
  >
    <label class="cursor-pointer flex items-center p-3">
      <input
        v-model="isChecked"
        type="checkbox"
        name="scales"
        class="mr-3 w-5 h-5 accent-proj-25-primary-purple-600 rounded-md"
        @change="handleCheck"
      >
      <div class="flex items-center justify-between w-full">
        <div class="text-sm">
          <div class="font-semibold text-proj-25-primary-blue-950">{{ props.contentObj.primaryLabel }}</div>
          <div class="text-proj-25-neutral-grey-500">{{ props.contentObj.secondaryLabel }}</div>
        </div>
        <div class="text-sm text-proj-25-primary-purple-600">
          {{ store.currentPricingType === 'monthly' ? props.contentObj.priceMonthlyLabel : props.contentObj.priceYearlyLabel }}
        </div>
      </div>
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import { useMultiStepFormStore } from '../stores/multiStepFormStore';

const store = useMultiStepFormStore();
const emit = defineEmits(['update:checked']);
const isChecked = ref(false);

const props = defineProps({
  contentObj: {
    type: Object,
    required: true
  }
});

const handleCheck = () => {
  emit('update:checked', { isChecked: isChecked.value, primaryLabel: props.contentObj.primaryLabel });
};

onMounted(() => {
  if (store.chosenAddOns.find(addOn => addOn.primaryLabel === props.contentObj.primaryLabel)) {
    isChecked.value = true;
  }
});
</script>

<style scoped>
</style>
