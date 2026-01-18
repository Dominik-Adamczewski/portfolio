<template>
  <ThumbnailImage 
    v-for="(image, index) in store.products[0].productThumbnailImages" 
    :key="index" 
    :src="image"
    :id="index"
    :is-active="index === store.currentImageIndex"
    @thumbnail-click="onThumbnailClick"
  />
</template>

<script setup>
import ThumbnailImage from './ThumbnailImage.vue';
import { eCommerceStore } from '../stores/eCommerceStore';

const store = eCommerceStore();

function onThumbnailClick(id) {
  store.showParticularImage(id);
}
</script>

<style scoped>

</style>