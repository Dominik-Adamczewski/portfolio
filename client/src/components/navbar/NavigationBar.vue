<script setup>
import { ref } from 'vue';
import MenuIcon from './MenuIcon.vue';
import LinkItems from './LinkItems.vue';

const isHamburgerMenuOpen = ref(false);

const toggleHamburgerMenu = () => {
  isHamburgerMenuOpen.value = !isHamburgerMenuOpen.value;
}
</script>

<style scoped>
  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.3s ease;
    transform-origin: top;
    overflow: hidden;
  }

  .menu-enter-from,
  .menu-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }

  .menu-enter-to,
  .menu-leave-from {
    opacity: 1;
    transform: scaleY(1);
  }
</style>

<template>
  <!-- Mobile nav -->
  <div class="lg:hidden">
    <MenuIcon :is-menu-open="isHamburgerMenuOpen" @click="toggleHamburgerMenu" />
    <Transition name="menu">
      <div v-if="isHamburgerMenuOpen" class="absolute top-14 left-0 bg-portfolio-very-light-gray w-full p-4 z-10">
        <LinkItems @link-clicked="toggleHamburgerMenu" />
      </div>
    </Transition>
  </div>
  <!-- Desktop nav -->
  <div class="hidden lg:flex lg:items-center">
    <LinkItems />
    <a href="mailto:dominik_adamczewski@wp.pl" class="bg-black text-white rounded-xl py-2 px-4 hover:opacity-90">Contact me</a>
  </div>
</template>