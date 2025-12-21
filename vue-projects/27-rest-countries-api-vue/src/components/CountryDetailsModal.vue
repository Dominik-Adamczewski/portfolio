<template>
  <section
    class="absolute top-20 left-0 w-full px-4 lg:px-20 pb-10"
    :class="{ 'bg-proj-27-grey-50-light-mode': !store.isDarkModeEnabled, 'bg-proj-27-blue-950-dark-mode': store.isDarkModeEnabled }"
  >
    <ButtonComponent text="Back" :with-arrow="true" @click="emit('countryDetailsClosed')" />
    <section :class="{ 'text-white': store.isDarkModeEnabled }">
      <div class="lg:flex lg:pr-8">
        <img class="rounded-t-md lg:rounded-md max-h-xl lg:max-h-[500px] w-full object-cover mb-6 lg:w-2/5 lg:mr-20" :src="props.countryDetailsObj.flags.svg" alt="Flag image">
        <div class="lg:max-h-lg lg:flex-grow lg:max-w-2xl">
          <h3 class="text-xl font-semibold mb-4">{{ props.countryDetailsObj.name }}</h3>
          <div class="lg:flex lg:items-center lg:gap-20 lg:w-full">
            <section class="mb-8">
              <div class="font-semibold mb-2">
                Native name:
                <span>{{ props.countryDetailsObj.nativeName }}</span>
              </div>
              <div class="font-semibold mb-2">
                Population:
                <span>{{ props.countryDetailsObj.population }}</span>
              </div>
              <div class="font-semibold mb-2">
                Region:
                <span>{{ props.countryDetailsObj.region }}</span>
              </div>
              <div class="font-semibold mb-2">
                Sub Region:
                <span>{{ props.countryDetailsObj.subregion }}</span>
              </div>
              <div class="font-semibold">
                Capital:
                <span>{{ props.countryDetailsObj.capital }}</span>
              </div>
            </section>
              <section class="mb-8">
                <div class="font-semibold mb-2">
                  Top level domain:
                  <span>{{ arrayToString(props.countryDetailsObj.topLevelDomain) }}</span>
                </div>
                <div class="font-semibold mb-2">
                  Currencies:
                  <span>{{ arrayToString(arrayFromObjectProperties(props.countryDetailsObj.currencies, 'name')) }}</span>
                </div>
                <div class="font-semibold mb-2">
                  Languages:
                  <span>{{ arrayToString(arrayFromObjectProperties(props.countryDetailsObj.languages, 'name')) }}</span>
                </div>
              </section>
          </div>
          <section v-if="props.countryDetailsObj.borders?.length > 0">
            <h4 class="font-semibold text-xl">Border Countries:</h4>
            <div class="mt-4 flex flex-wrap gap-2">
              <LabelComponent
                v-for="(borderCode, index) in props.countryDetailsObj.borders"
                class="cursor-pointer"
                :key="index"
                :text="store.getCountryNameFromAlphaCode(borderCode)"
                @click="$emit('borderCountryLabelClicked',store.getCountryNameFromAlphaCode(borderCode))"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import LabelComponent from './LabelComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

import { defineEmits, defineProps } from 'vue';
import { useCountriesStore } from '../stores/countriesStore';

const store = useCountriesStore();

const emit = defineEmits(['countryDetailsClosed', 'borderCountryLabelClicked']);

const props = defineProps({
  countryDetailsObj: {
    type: Object,
    required: true
  }
});

const arrayToString = (array) => {
  if (array.length) {
    if (array.length > 1) {
      return array.join(', ');
    }

    return array[0];
  }

  return '';
};

const arrayFromObjectProperties = (array, property) => {
  return array.map(object => {
    return object[property];
  });
};
</script>

<style>
</style>
