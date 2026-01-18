<template>
  <div class="flex flex-col mb-4">
    <label
      :for="props.id"
      class="text-proj-25-primary-blue-950"
    >
      {{ props.label }}
    </label>
    <input
      :id="props.inputId"
      v-model="model"
      :type="props.inputType"
      :placeholder="props.placeholder"
      :tabindex="props.tabindex"
      class="border border-proj-25-neutral-grey-500 p-2 rounded-md"
      @focus="store.clearErrorMessage(props.label)"
      @keydown="blockTypingLetterCharacters"
    >
    <ErrorMessage
      v-if="props.errors.length > 0"
      :text="props.errors[0]"
    />
  </div>
</template>

<script setup>
import { defineProps, defineModel } from 'vue';
import ErrorMessage from './ErrorMessage.vue';

import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();

const model = defineModel();

const props = defineProps({
  inputId: {
    type: String,
    default: () => ''
  },
  label: {
    type: String,
    default: () => '',
    required: true
  },
  placeholder: {
    type: String,
    default: () => '',
    required: true
  },
  inputType: {
    type: String,
    default: () => 'text'
  },
  tabindex: {
    type: String,
    default: '0',
    required: true
  },
  errors: {
    type: Array,
    required: false,
    default: () => []
  }
});
const blockTypingLetterCharacters = (e) => {
  if (props.inputType === 'phone') {
    const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '(', ')', 'Backspace', 'Enter', 'Tab', 'Ctrl'];
    if (!allowedCharacters.includes(e.key)) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
</style>
