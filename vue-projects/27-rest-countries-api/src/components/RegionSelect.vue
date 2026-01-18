<template>
  <div>
    <select
      name="regions"
      id="regions"
      class="w-2/3 h-12 rounded-md mt-10 lg:mt-0 px-2 border-r-8 border-transparent mb-8 lg:mb-0 lg:justify-self-end cursor-pointer hover:opacity-80"
      :class="{ 'bg-white': !store.isDarkModeEnabled, 'bg-proj-27-blue-900-dark-mode text-white': store.isDarkModeEnabled }"
      v-model="store.currentlySelectedRegion"
      @change="store.resetCurrentPage"
    >
      <option value="" disabled selected>Filter by Region</option>
      <option v-for="(region, index) in store.regions" :key="index" :value="region">{{ region }}</option>
    </select>
  </div>
</template>

<script setup>
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();
</script>

<style>
</style>
