<template>
  <img 
    :src="src" 
    alt="Product thumbnail image"
    class="lg:rounded-md lg:w-20 lg:h-20 lg:cursor-pointer"
    :class="{ 'border-2 border-proj-22-orange opacity-50': isActive }"
    @click="handleThumbnailClick"
    width="80"
    height="80"
  >
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['thumbnailClick']);

const props = defineProps({
  id: Number,
  src: String,
  isActive: Boolean
});

function handleThumbnailClick() {
  emit('thumbnailClick', props.id);
}

</script>

<style scoped>

</style>