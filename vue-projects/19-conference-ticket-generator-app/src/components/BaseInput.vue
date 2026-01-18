<template>
  <label class="text-white mt-6 block">
    {{ label }}
    <input 
      v-model="model"
      type="text" 
      class="block w-full rounded-md h-12 bg-transparent border border-slate-400 focus-visible:outline-slate-600 px-2 mt-2"
      :placeholder="placeholder"
      @change="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      @input="$emit('input')"
    >
  </label>
  <ErrorMessage 
    v-if="errors?.length > 0"
    :errors="errors"
  />
</template>

<script setup>
import { defineProps, defineEmits, defineModel } from 'vue';
import ErrorMessage from './ErrorMessage.vue';

const model = defineModel();

defineProps({
  label: String,
  placeholder: String,
  errors: Array,
  modelValue: String,
});

defineEmits(['update:modelValue', 'blur', 'input']);

</script>

<style>

</style>