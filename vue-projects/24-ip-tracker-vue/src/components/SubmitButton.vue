<template>
  <button class="w-12 h-12 bg-black hover:bg-slate-700 rounded-r-md flex items-center justify-center absolute top-0 right-0 cursor-pointer">
    <img
      v-if="!props.isLoading"
      src="/images/icon-arrow.svg"
      alt="Arrow icon"
      class="w-3/4 h-3/4 object-contain"
    />
    <img
      v-else
      src="/images/icon-spinner.svg"
      alt="Spinner loading icon"
      class="w-3/4 h-3/4 object-contain animate-spin"
    />
  </button>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isLoading: Boolean
});
</script>

<style scoped>
img#animated-image {
  animation: spin 1s linear infinite;
  display: block;
  margin: 0 auto;
  width: 48px;
  height: 48px;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
