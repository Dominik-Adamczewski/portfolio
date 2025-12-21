<template>
  <div
    class="rounded-md cursor-pointer w-full max-w-80 h-full flex flex-col shadow-lg overflow-hidden mx-auto"
    :class="{ 'bg-white hover:bg-slate-50': !store.isDarkModeEnabled, 'bg-proj-27-blue-900-dark-mode hover:bg-gray-900 text-white': store.isDarkModeEnabled }"
    @click="emit('countryDetailsOpened', props.countryObj.name)"
  >
    <img
      class="rounded-t-md h-44 sm:h-52 w-full object-cover bg-white flex-shrink-0"
      :src="props.countryObj.flag"
      alt="Flag image"
    >
    <div class="px-4 pt-4 pb-8 flex flex-col flex-grow">
      <p class="text-xl font-semibold mb-2 line-clamp-2">{{ props.countryObj.name }}</p>
      <p>
        <span v-if="props.countryObj.region" class="font-semibold">Population:</span>
        {{ props.countryObj.population }}
      </p>
      <p>
        <span v-if="props.countryObj.region" class="font-semibold">Region:</span>
        {{ props.countryObj.region }}
      </p>
      <p>
        <span v-if="props.countryObj.capital" class="font-semibold">Capital:</span>
        {{ props.countryObj.capital }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();

const emit = defineEmits(['countryDetailsOpened']);

const props = defineProps({
  countryObj: {
    type: Object,
    required: true
  }
});
</script>

<style>
</style>
