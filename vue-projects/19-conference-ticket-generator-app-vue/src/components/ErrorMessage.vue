<template>
  <div class="text-red-700 flex items-center mt-1">
    <img 
      src="/images/icon-info-error.svg" 
      alt="Info icon"
      class="mr-1"
    >
    <span class="mt-0.5">{{ errors[0] }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  errors: Array,
});

</script>

<style>

</style>