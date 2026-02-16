<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: false
  }
});

</script>

<template>
  <section class="px-4 lg:px-24 2xl:px-60 py-8" :id="props.id">
    <h2 class="font-semibold text-xl relative inline-block pb-2 mb-4">
      {{ props.title }}
      <span class="absolute bottom-0 left-0 w-4/5 h-1 bg-linear-to-r from-portfolio-primary-blue to-portfolio-primary-purple"></span>
    </h2>
    <slot></slot>
  </section>
</template>