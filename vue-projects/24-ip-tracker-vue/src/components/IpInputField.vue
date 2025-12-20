<template>
  <div class="w-full md:max-w-lg md:mx-auto relative">
    <input
      ref="ipInput"
      v-model.trim="store.ipInputData"
      type="text"
      class="w-full h-12 rounded-md pl-4 pr-14 bg-white"
      placeholder="Search for any IP Address"
      @focus="store.clearErrors"
      @keydown="preventInvalidIpCharacters"
      @keyup.enter="store.submitIpAddress"
    >
    <SubmitButton
      :is-loading="store.isLoading"
      @click="store.submitIpAddress"
    />
    <span
      v-if="store.errors?.length"
      class="text-red-500 font-semibold text-xs"
    >
      {{ store.errors[0] }}
    </span>
  </div>
</template>

<script setup>
import SubmitButton from './SubmitButton.vue';
import { useIpTrackerStore } from '../stores/ipTrackerStore';
import { ref, watch } from 'vue';

const store = useIpTrackerStore();
const ipInput = ref(null);

const focusInputField = () => {
  ipInput.value?.focus();
};

const preventInvalidIpCharacters = (e) => {
  const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',
    'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'
  ];

  if (e.ctrlKey || e.metaKey) return; // Allow: Ctrl+V, Cmd+V (paste), Ctrl+C (copy), Ctrl+A (select all)

  if (!allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
};

watch(() => store.wasResetDone, (newVal) => {
  if (newVal) {
    focusInputField();
    store.wasResetDone = false; // Reset flag to avoid repeated calls
  }
});
</script>

<style scoped></style>
