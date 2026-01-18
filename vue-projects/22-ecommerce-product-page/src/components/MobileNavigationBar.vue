<template>
  <section class="flex items-center justify-between p-6 lg:hidden relative">
    <div class="flex items-center">
      <button aria-label="Toggle navigation menu" class="w-5 h-5 mr-3" @click="toggleMobileNavigationMenu">
        <img src="/images/icon-menu.svg" alt="Hamburger menu icon" width="20" height="20">
      </button>
      <img src="/images/logo.svg" alt="Sneakers logo" class="mb-0.5">
    </div>
    <div class="flex items-center">
      <CartIcon @click="toggleCartView" />
      <button aria-label="Open user profile" class="w-8 h-8">
        <img src="/images/image-avatar.png" alt="">
      </button>
    </div>
    <BasketTooltip v-if="isCartVisible" class="absolute top-24 right-2.5 transform" @close="toggleCartView" />
  </section>
  <div
      v-if="isMobileMenuVisible"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="toggleMobileNavigationMenu"
  ></div>
  <Transition name="mobile-menu">
    <section
      class="fixed top-0 left-0 bg-white p-4 min-h-screen max-w-[65vw] w-full z-50"
      v-if="isMobileMenuVisible"
    >
      <img src="/images/icon-close.svg" alt="Close icon" class="mb-10" @click="toggleMobileNavigationMenu">
      <ul class="font-semibold">
        <li v-for="(link, index) in store.navbarLinks" :key="index" class="mb-4">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
    </section>
  </Transition>
</template>

<script setup>
import BasketTooltip from './CartTooltip.vue';
import CartIcon from './CartIcon.vue';
import { eCommerceStore } from '../stores/eCommerceStore';
import { ref } from 'vue';

const store = eCommerceStore();
const isMobileMenuVisible = ref(false);
const isCartVisible = ref(false);

function toggleMobileNavigationMenu () {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
}

function toggleCartView () {
  isCartVisible.value = !isCartVisible.value;
}

</script>

<style scoped>
  .mobile-menu-enter-active, .mobile-menu-leave-active {
    transition: transform 0.3s ease-out, opacity 0.2s ease;
  }

  .mobile-menu-enter-from, .mobile-menu-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  .mobile-menu-enter-to, .mobile-menu-leave-from {
    transform: translateX(0);
    opacity: 1;
  }
</style>
