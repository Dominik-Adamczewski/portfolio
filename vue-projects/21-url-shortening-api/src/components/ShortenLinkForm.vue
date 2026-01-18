<template>
  <div class="w-full shorten-link rounded-md max-w-xl lg:max-w-6xl px-5 py-6 lg:px-16 lg:py-12">
    <div>
      <form
        class="block w-full lg:flex lg:items-center lg:justify-between"
        @submit.prevent="store.submitShortenUrlForm()"
      >
        <input
          type="text" placeholder="Shorten a link here..."
          class="h-12 w-full lg:w-3/4 mb-4 lg:mb-0 p-2 bg-white rounded-md"
          :class="{ 'border-2 border-proj-21-red': store.formErrors.length }"
          v-model="store.longUrl"
          @input="store.clearFormErrors()"
        >
        <BaseButton text="Shorten it!" type="cta" :width="btnWidth" rounded="light-rounding" class="h-12" @click="store.submitShortenUrlForm()" />
      </form>
    </div>
    <ErrorMessage v-if="store.formErrors.length > 0" :errors="store.formErrors" class="block mt-1" />
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import ErrorMessage from './ErrorMessage.vue';
import { useDevice } from '../composables/device';
import { computed } from 'vue';
import { useUrlsStore } from '../stores/UrlsStore';

const store = useUrlsStore();

const { device } = useDevice();

const btnWidth = computed(() => device.value === 'desktop' ? 'xs' : 'full');
</script>

<style scoped>

  .shorten-link {
    background-color: hsl(257, 27%, 26%);
    background-image: url('../../public/images/bg-shorten-mobile.svg');
    background-repeat: no-repeat;
    background-position: right;
  }
</style>
