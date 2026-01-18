<template>
  <button 
    class="flex items-center justify-center text-base px-4 py-2 cursor-pointer text-black rounded-md bg-proj-22-orange hover:bg-proj-22-orange-hover disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
    :disabled="props.isDisabled"
  >
    <div class="flex items-center gap-2">
      <img v-if="props.iconPath" :src="props.iconPath" alt="Button icon" class="w-4 h-4 object-contain" width="16" height="16">
      <span class="mt-1">{{ props.text }}</span>
    </div>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: String,
  iconPath: String,
  isDisabled: Boolean,
});

</script>

<style scoped>
</style>
