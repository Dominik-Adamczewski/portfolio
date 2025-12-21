<template>
  <CountryDetailsModal
    v-if="store.isCountryDetailsViewOpened"
    :country-details-obj="store.countryForDetailsView"
    @country-details-closed="handleCountryDetailsClose"
    @borderCountryLabelClicked="handleBorderCountryClick"
  />
  <div v-else class="w-full sm:px-6 md:px-8 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 auto-rows-fr">
    <CountryListCard
      v-for="(country, index) in paginatedCountries"
      :key="index"
      :country-obj="country"
      @country-details-opened="handleCountryDetailsOpen"
    />
  </div>
  <div class="px-8 flex justify-center align-center mt-16">
    <PaginationComponent
      v-if="store.currentlyFilteredCountriesCount > 0"
      :total-pages="totalPages"
      :current-page="store.currentPage"
      :per-page="perPage"
      @page-changed="handlePageChange"
    />
  </div>
  <CountryListEmptyState v-if="store.currentlyFilteredCountriesCount === 0" />
</template>

<script setup>
import PaginationComponent from './PaginationComponent.vue';

import CountryListCard from './CountryListCard.vue';
import CountryListEmptyState from './CountryListEmptyState.vue';
import CountryDetailsModal from './CountryDetailsModal.vue';
import { defineProps, ref, computed, nextTick } from 'vue';
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();

const props = defineProps({
  countryListForCards: {
    type: Array,
    required: true
  }
});

const perPage = 30;
const currentScrollPosition = ref(null);

const totalPages = computed(() => {
  if (props.countryListForCards) {
    return Math.ceil(props.countryListForCards.length / perPage);
  }
  return null;
});

const paginatedCountries = computed(() => {
  const start = (store.currentPage - 1) * perPage;
  const end = start + perPage;
  if (props.countryListForCards) {
    return props.countryListForCards.slice(start, end);
  }
  return [];
});

const handlePageChange = (page) => {
  store.currentPage = page;
};

const handleCountryDetailsOpen = (countryName) => {
  store.isCountryDetailsViewOpened = true;
  store.countryForDetailsView = store.getCountryForDetailsView(countryName);
  currentScrollPosition.value = window.scrollY;
};

const handleCountryDetailsClose = async () => {
  store.isCountryDetailsViewOpened = false;
  store.countryForDetailsView = null;
  await nextTick();
  window.scrollTo(0, currentScrollPosition.value);
};

const handleBorderCountryClick = (borderCountryName) => {
  store.countryForDetailsView = store.getCountryForDetailsView(borderCountryName);
};
</script>

<style>
</style>
