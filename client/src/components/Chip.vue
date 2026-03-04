<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'base',
    validator: (value) => ['base', 'blue', 'green', 'yellow', 'red'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
});

const chipColorClasses = {
  base: 'bg-portfolio-light-blue text-black',
  blue: 'bg-portfolio-primary-blue text-white',
  green: 'bg-portfolio-primary-green text-white',
  yellow: 'bg-portfolio-primary-yellow text-black',
  red: 'bg-portfolio-primary-red text-white',
  white: 'bg-white text-black',
};

const chipSizeClasses = {
  small: 'py-1 px-2',
  medium: 'py-2 px-4',
  large: 'py-3 px-6',
};

</script>
<template>
  <div class="rounded-md" :class="[chipColorClasses[props.color], chipSizeClasses[props.size]]">
    {{ props.text }}
  </div>
</template>