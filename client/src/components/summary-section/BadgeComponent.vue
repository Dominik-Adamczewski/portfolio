<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  iconType: {
    type: String,
    default: 'check',
    validator: (value) => ['check'].includes(value)
  }
});

const badgeColorClasses = {
  check: 'text-portfolio-primary-blue border-portfolio-primary-blue-lightest',
};
</script>

<template>
  <span :class="[badgeColorClasses[props.iconType]]" class="font-semibold text-sm px-4 py-2 border rounded-2xl box-border">
    <i class="fa-regular fa-circle-check mr-1"></i>
    {{ props.text }}
  </span>
</template>