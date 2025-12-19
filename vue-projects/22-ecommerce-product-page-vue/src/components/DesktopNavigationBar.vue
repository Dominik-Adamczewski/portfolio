<template>
  <section class="flex items-center justify-between max-w-6xl h-24 border-b mb-20 relative">
    <div class="flex items-center h-full">
      <div class="h-full flex items-center">
        <img src="/images/logo.svg" alt="Sneakers logo" class="mr-6" width="138" height="20">
      </div>  
      <ul class="font-semibold flex items-center gap-6 h-full mt-2">
        <li 
          v-for="(link, index) in store.navbarLinks" 
          :key="index"  
          class="h-full flex items-center border-b-4 border-transparent hover:border-proj-22-orange-hover"
        >
          <a :href="link.href" class="text-gray-700 hover:text-black h-full flex items-center">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <CartIcon @click="toggleCartView" />
      <button aria-label="Open user profile" class="w-10 h-10 rounded-full cursor-pointer hover:outline hover:outline-proj-22-orange-hover">
        <img src="/images/image-avatar.png" alt="" width="40" height="40">
      </button>
    </div>
    <BasketTooltip v-if="isCartVisible" class="absolute top-20 right-0" ref="cartTooltipRef" @close="toggleCartView" />
  </section>
</template>

<script setup>
import BasketTooltip from './CartTooltip.vue';
import CartIcon from './CartIcon.vue';
import { eCommerceStore } from '../stores/eCommerceStore';
import { ref } from 'vue';
const store = eCommerceStore();

const isCartVisible = ref(false);
const cartTooltipRef = ref(null);

function toggleCartView () {
  isCartVisible.value = !isCartVisible.value;
}

</script>

<style scoped>

</style>
