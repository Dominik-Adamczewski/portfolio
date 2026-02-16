<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'contactButton'].includes(value)
  },
  icon: {
    type: String,
    default: null,
    validator: (value) => [null, 'download', 'code'].includes(value)
  },
  size: {
    type: String,
    default: 'full',
    validator: (value) => ['small', 'medium', 'large', 'full'].includes(value)
  }
});

const buttonColorClasses = {
  primary: 'text-white bg-linear-to-r from-portfolio-primary-blue to-portfolio-primary-purple',
  secondary: 'text-black bg-white border border-gray-300',
  contactButton: 'text-white bg-black'
};

const fontAwesomeIcons = {
  download: 'fa-solid fa-download',
  code: 'fa-solid fa-code',
};

const sizeClasses = {
  small: 'w-24',
  medium: 'w-32',
  large: 'w-48',
  full: 'w-full',
};
</script>

<template>
  <button :class="[buttonColorClasses[props.type], sizeClasses[props.size]]" class="font-semibold text-sm px-4 py-2 rounded-2xl cursor-pointer hover:opacity-90">
    <i v-if="props.icon" :class="fontAwesomeIcons[props.icon]" class="mr-1"></i>
    {{ props.text }}
  </button>
</template>