<template>
  <span
    class="w-auto border rounded-md py-2 px-6 hover:opacity-80"
    :class="{
      'text-white bg-proj-27-blue-900-dark-mode border-proj-27-blue-900-dark-mode': store.isDarkModeEnabled,
      'text-black bg-white': !store.isDarkModeEnabled
      }"
    >
      {{ props.text }}
    </span>
</template>

<script setup>
import { defineProps } from 'vue';
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();

const props = defineProps({
  text: {
    type: Object,
    required: true
  }
});
</script>

<style>
</style>
