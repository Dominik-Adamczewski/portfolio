<template>
  <section v-if="store.shortenUrls.length > 0" class="mb-20 -mt-8 max-w-lg w-full lg:max-w-6xl">
    <ShortenUrlResult
      v-for="shortenUrlObj in store.shortenUrls"
      :key="shortenUrlObj.id"
      :long-url="shortenUrlObj.originalUrl"
      :shorten-url="shortenUrlObj.shortUrl"
      class="mb-8"
    />
  </section>
  <section class="text-center mb-16">
    <h2 class="text-2xl font-semibold">Advanced Statistics</h2>
    <p class="mt-4 text-proj-21-grayish-violet">Track how your links are performing across the web with our advanced statistics dashboard.</p>
  </section>
  <section class="lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-6 lg:max-w-6xl lg:w-full">
    <SocialProof
      v-for="(socialProof, index) in store.socialProofItems"
      :id="socialProof.id"
      :key="socialProof.id"
      :heading="socialProof.heading"
      :paragraph="socialProof.text"
      :icon-path="socialProof.iconPath"
      :is-last="index === store.socialProofItems.length - 1"
    />
  </section>
</template>

<script setup>
import { useUrlsStore } from '../stores/UrlsStore';
import SocialProof from './SocialProof.vue';
import ShortenUrlResult from './ShortenUrlResult.vue';
import { onMounted } from 'vue';

const store = useUrlsStore();

onMounted(() => {
  store.setShortenLinksWithDataFromLocalStorage();
});
</script>

<style scoped>
</style>
