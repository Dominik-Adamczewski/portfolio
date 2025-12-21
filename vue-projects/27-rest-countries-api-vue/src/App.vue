<template>
  <section
    class="min-h-screen pb-20"
    :class="{ 'bg-proj-27-grey-50-light-mode': !store.isDarkModeEnabled, 'bg-proj-27-blue-950-dark-mode': store.isDarkModeEnabled }"
  >
    <nav
      class="h-20 flex items-center justify-between px-4 lg:px-20 shadow-lg"
      :class="{ 'bg-white': !store.isDarkModeEnabled, 'bg-proj-27-blue-900-dark-mode': store.isDarkModeEnabled }"
    >
      <p class="font-semibold" :class="{ 'text-white': store.isDarkModeEnabled }">Where in the world?</p>
      <DarkLightModeSwitcher />
    </nav>
    <section class="p-4 lg:px-20">
      <div class="lg:flex lg:justify-between lg:items-center lg:py-8">
        <SearchCountryInput class="lg:flex-grow lg:max-w-lg h-20"/>
        <RegionSelect class="lg:flex lg:flex-grow lg:max-w-sm lg:justify-end lg:h-20" />
      </div>
      <CountriesList :country-list-for-cards="store.filteredCountries" />
    </section>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import DarkLightModeSwitcher from './components/DarkLightModeSwitcher.vue';
import SearchCountryInput from './components/SearchCountryInput.vue';
import RegionSelect from './components/RegionSelect.vue';
import CountriesList from './components/CountriesList.vue';
import { useCountriesStore } from './stores/countriesStore';

const store = useCountriesStore();

onMounted(async () => {
  await store.fetchCountriesListData();
});
</script>

<style>
</style>
