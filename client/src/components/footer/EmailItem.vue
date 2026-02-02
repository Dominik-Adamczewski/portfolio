<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
});
</script>

<template>
  <span class="flex items-center">
    <a :href="`mailto:${text}`" class="font-semibold text-portfolio-primary-blue hover:underline">
      <i class="fa-solid fa-envelope mr-1"></i>
      {{ text }}
    </a>
  </span>
</template>