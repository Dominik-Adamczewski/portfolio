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
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  icon: {
    type: String,
    default: null,
    validator: (value) => [null, 'download', 'code'].includes(value)
  }
});

const buttonColorClasses = {
  primary: 'text-white bg-linear-to-r from-portfolio-primary-blue to-portfolio-primary-purple',
  secondary: 'text-black bg-white border border-gray-300',
};

const fontAwesomeIcons = {
  download: 'fa-solid fa-download',
  code: 'fa-solid fa-code',
};
</script>

<template>
  <button :class="[buttonColorClasses[props.type]]" class="font-semibold text-sm px-4 py-2 rounded-2xl w-full">
    <i v-if="props.icon" :class="fontAwesomeIcons[props.icon]" class="mr-1"></i>
    {{ props.text }}
  </button>
</template>