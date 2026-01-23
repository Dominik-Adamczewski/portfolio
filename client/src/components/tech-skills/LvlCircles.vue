<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  lvl: {
    type: Number,
    required: true
  }
});

</script>

<template>
  <span>
    <i
      v-for="n in 5"
      :key="n"
      :class="n <= props.lvl ? 'fa-solid fa-circle text-portfolio-primary-blue' : 'fa-regular fa-circle text-gray-300'"
      class="mx-0.5"
    ></i>
  </span>
</template>