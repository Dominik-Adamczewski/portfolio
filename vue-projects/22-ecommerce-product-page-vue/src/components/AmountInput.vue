<template>
  <div class="bg-proj-22-light-grayish-blue w-full h-14 mt-4 rounded-md flex items-center justify-between px-4">
    <button class="cursor-pointer" :class="{ 'invisible': props.modelValue === 0 }" @click="removeOneItem">
      <img src="/images/icon-minus.svg" alt="Minus icon">
    </button>
    <input 
      type="number" 
      class="bg-proj-22-light-grayish-blue font-semibold w-10 text-center" 
      :value="props.modelValue"
      readonly
    >
    <button class="cursor-pointer" :class="{ 'invisible': props.modelValue === store.getInStockAmount }" @click="addOneItem">
      <img src="/images/icon-plus.svg" alt="Plus icon">
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { eCommerceStore } from '../stores/eCommerceStore';

const store = eCommerceStore();

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  }
});

const emit = defineEmits(['update:modelValue']);

function addOneItem() {
  if (props.modelValue === store.getInStockAmount) {
    return;
  }
  const newValue = props.modelValue + 1;
  emit('update:modelValue', newValue);
}

function removeOneItem() {
  if (props.modelValue === 0) {
    return;
  }
  const newValue = props.modelValue - 1;
  emit('update:modelValue', newValue);
}
</script>

<style scoped>

</style>