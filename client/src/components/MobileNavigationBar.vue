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

<template>
  <nav class="flex items-center justify-between p-4 w-full">
    <NameLogo />
    <MenuIcon :is-menu-open="isHamburgerMenuOpen" @click="toggleHamburgerMenu" />
  </nav>
  <div v-if="isHamburgerMenuOpen">
    <LinkItems />
  </div>
</template>