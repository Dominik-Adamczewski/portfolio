<template>
  <div class="max-w-6xl w-full mx-auto lg:px-6">
    <header>
      <MobileNavigationBar class="flex lg:hidden" />
      <DesktopNavigationBar class="hidden lg:flex" />
    </header>
    <main class="pb-20 lg:flex lg:justify-between lg:px-10">
      <GalleryView />
      <ProductDescription />
    </main>
  </div>
</template>

<script setup>
import MobileNavigationBar from './components/MobileNavigationBar.vue';
import DesktopNavigationBar from './components/DesktopNavigationBar.vue';
import GalleryView from './components/GalleryView.vue';
import ProductDescription from './components/ProductDescription.vue';
import { eCommerceStore } from './stores/eCommerceStore';
import { onMounted } from 'vue';

const store = eCommerceStore();

onMounted(() => {
  store.loadCartStateFromLocalStorage();
});
</script>
<style>

</style>
