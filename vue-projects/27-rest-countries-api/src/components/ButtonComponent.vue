<template>
    <button
      class="flex items-center justify-center border rounded-md py-2 px-6 mt-10 mb-16 cursor-pointer hover:opacity-80"
      :class="{
        'text-white bg-proj-27-blue-900-dark-mode border-proj-27-blue-900-dark-mode': store.isDarkModeEnabled,
        'text-black bg-white': !store.isDarkModeEnabled
      }"
    >
      <i v-if="props.withArrow" class="fa-solid fa-arrow-left mr-2" aria-hidden="true"></i>
      {{ props.text }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();

const props = defineProps({
  text: {
    type: Object,
    required: true
  },
  withArrow: {
    type: Boolean,
    default: false
  }
});
</script>

<style>
</style>
