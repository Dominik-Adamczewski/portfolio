<template>
  <span class="text-proj-21-red">{{ errors[0] }}</span>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  errors: Array
})
</script>

<style scoped>
</style>
