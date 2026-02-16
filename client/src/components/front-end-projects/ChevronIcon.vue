<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  direction: {
    type: String,
    default: 'left'
  }
});
</script>

<template>
  <div class="bg-white border border-gray-400 rounded-full w-10 h-10 hidden lg:flex items-center justify-center shadow-md cursor-pointer">
    <i :class="`fa-solid fa-chevron-${props.direction} text-portfolio-primary-blue`"></i>
  </div>
</template>