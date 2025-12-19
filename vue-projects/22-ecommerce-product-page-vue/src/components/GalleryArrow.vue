<template>
  <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center overflow-hidden">
    <img
      v-if="direction === 'right'"
      src="/images/icon-next.svg"
      alt="Arrow right icon"
      class="w-3 h-3 object-contain"
    >
    <img
      v-else-if="direction === 'left'"
      src="/images/icon-previous.svg"
      alt="Arrow left icon"
      class="w-3 h-3 object-contain"
    >
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  direction: {
    type: String,
    default: 'right'
  }
});

</script>

<style scoped>

</style>