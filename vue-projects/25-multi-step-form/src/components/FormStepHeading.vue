<template>
  <div>
    <h1 class="text-proj-25-primary-blue-950 text-3xl mb-3">
      {{ props.heading }}
    </h1>
    <p class="mb-3 text-proj-25-neutral-grey-500">
      {{ props.text }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
</style>
