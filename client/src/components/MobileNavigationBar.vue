<script setup>
import { ref } from 'vue';
import NameLogo from './navbar/NameLogo.vue';
import MenuIcon from './navbar/MenuIcon.vue';
import LinkItems from './navbar/LinkItems.vue';

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
  <NameLogo />
  <MenuIcon :is-menu-open="isHamburgerMenuOpen" @click="toggleHamburgerMenu" />
  <Transition name="menu">
    <div v-if="isHamburgerMenuOpen" class="absolute top-14 left-0 bg-white w-full p-4 z-10">
      <LinkItems />
    </div>
  </Transition>
</template>