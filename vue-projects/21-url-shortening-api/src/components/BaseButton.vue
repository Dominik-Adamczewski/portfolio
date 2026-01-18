<template>
  <button class="px-4 py-2 cursor-pointer" :class="buttonClasses">
    <a v-if="isLink" :href="href" class="block">{{ text }}</a>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: String,
  type: {
    type: String,
    required: true,
    default: 'base'
  },
  width: {
    type: String,
    required: true,
    default: 'md'
  },
  rounded: {
    type: String,
    required: true,
    default: 'no-rounding'
  },
  isLink: {
    type: Boolean,
    required: true,
    default: false
  },
  href: {
    type: String,
    required: false,
    default: '#'
  }
});

const buttonTypeClasses = computed(() => ({
  cta: 'bg-proj-21-cyan hover:bg-proj-21-cyan-light text-white font-semibold',
  copiedState: 'bg-proj-21-dark-violet text-white font-semibold cursor-default',
  base: 'border text-black'
}));

const widthClasses = computed(() => ({
  xs: 'w-1/5',
  sm: 'w-1/3',
  md: 'w-1/2',
  full: 'w-full'
}));

const roundedClasses = computed(() => ({
  'no-rounding': 'rounded-none',
  'light-rounding': 'rounded-md',
  'strong-rounding': 'rounded-2xl'
}));

const buttonClasses = computed(() => {
  return `${buttonTypeClasses.value[props.type]} ${widthClasses.value[props.width] || widthClasses.value.md} ${roundedClasses.value[props.rounded]}`;
});

</script>

<style scoped>
</style>
