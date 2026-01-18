<template>
  <div>
    <div class="relative w-full">
      <input
        class="w-full h-12 rounded-md pl-16 pr-4"
        :class="{ 'bg-white': !store.isDarkModeEnabled, 'bg-proj-27-blue-900-dark-mode placeholder-white text-white': store.isDarkModeEnabled }"
        type="text"
        placeholder="Search for a country..."
        v-model="store.searchInput"
        @input="store.resetCurrentPage"
      >
      <i
        class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-6"
        :class="{ 'text-white': store.isDarkModeEnabled }"
      ></i>
      <button v-if="store.searchInput?.length > 0" class="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer" @click="store.clearSearchInputField">
        <i class="fa-solid fa-x"></i>
      </button>
    </div>
    <div
      v-if="store.searchInput || (store.currentlySelectedRegion && store.currentlySelectedRegion !== 'All countries')"
      class="mt-2"
      :class="{ 'text-white': store.isDarkModeEnabled }"
    >
      Showing {{ store.currentlyFilteredCountriesCount }} out of {{ store.allCountriesCount }} countries
    </div>
  </div>
</template>

<script setup>
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();
</script>

<style>
</style>
