<template>
  <button
    class="border rounded-md py-2 px-8 duration-300 cursor-pointer"
    :class="{
      'bg-white hover:bg-proj-26-neutral-navy-900 text-proj-26-neutral-navy-900 hover:text-white': !secondary,
      'text-white hover:bg-white hover:text-proj-26-neutral-navy-900': secondary
    }"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  secondary: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
</style>
