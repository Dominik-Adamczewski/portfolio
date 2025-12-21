<template>
  <button
    @click="store.toggleDarkMode"
    class="cursor-pointer hover:opacity-80"
  >
    <i
      class="fa-solid mr-2"
      :class="{ 'fa-moon text-black': !store.isDarkModeEnabled, 'fa-sun text-white': store.isDarkModeEnabled }"
      aria-hidden="true"
    >
    </i>
    <span :class="{ 'text-white': store.isDarkModeEnabled }">
      {{ store.isDarkModeEnabled ? 'Light mode' : 'Dark mode' }}
    </span>
  </button>
</template>

<script setup>
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();
</script>

<style>
</style>
