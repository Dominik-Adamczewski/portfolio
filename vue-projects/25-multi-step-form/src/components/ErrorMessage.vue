<template>
  <span
    class="mt-1 text-sm text-proj-25-primary-red-500"
  >
    {{ props.text }}
  </span>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: () => '',
    required: true
  }
});

</script>
<style scoped>
</style>
