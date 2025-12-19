<template>
  <div class="relative w-full lg:w-2/5">
    <div class="lg:aspect-square min-h-[375px] lg:min-h-72 w-full">
      <transition name="fade" mode="out-in">
        <img 
          :key="store.currentImg" 
          :src="store.currentImg" 
          alt="Product image" 
          class="min-h-72 max-h-[600px] object-cover w-full h-full lg:rounded-md lg:cursor-pointer" 
          @click="toggler = !toggler"
          width="410"
          height="410"
        />
      </transition>
    </div>
    <FsLightbox :toggler="toggler" :sources="store.getImagesOfFirstProduct" />
    <GalleryArrow 
      v-if="store.currentImageIndex < store.getImagesArrayLengthForProduct() - 1"
      class="absolute right-2 top-1/2 -translate-y-1/2 lg:hidden" 
      direction="right" 
      @click="store.showNextImage"
    />
    <GalleryArrow 
      v-if="store.currentImageIndex !== 0"
      class="absolute left-2 top-1/2 -translate-y-1/2 lg:hidden" 
      direction="left" 
      @click="store.showPreviousImage"
    />
    <section v-if="store.products[0].productThumbnailImages.length > 0" class="hidden lg:flex lg:items-center lg:justify-between lg:w-full lg:mt-6">
      <ThumbnailImages />
    </section>
  </div>
</template>

<script setup>
import GalleryArrow from './GalleryArrow.vue';
import ThumbnailImages from './ThumbnailImages.vue';
import FsLightbox from 'fslightbox-vue';
import { eCommerceStore } from '../stores/eCommerceStore';
import { ref } from 'vue';

const toggler = ref(false);

const store = eCommerceStore();

</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>
