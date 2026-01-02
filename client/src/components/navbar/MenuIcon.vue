<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div>
    <i v-if="isMenuOpen" class="fa-solid fa-x"></i>
    <i v-else class="fa-solid fa-bars"></i>
  </div>
</template>