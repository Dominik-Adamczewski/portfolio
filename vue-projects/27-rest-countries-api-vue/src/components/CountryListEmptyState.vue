<template>
  <div
    class="text-center text-xl px-8 text-wrap break-words"
    :class="{ 'text-white': store.isDarkModeEnabled }"
  >
    Sorry, there are no countries with following search query: "{{ store.searchInput }}"
  </div>
</template>

<script setup>
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();
</script>

<style>
</style>
