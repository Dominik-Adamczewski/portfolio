<template>
  <header class="flex items-center justify-between lg:hidden">
    <img src="/images/logo.svg" alt="Shortly logo">
    <img
      :src="isNavigationVisible ? 'images/close-x.svg' : '/images/burger-menu.svg'"
      alt="Hamburger menu icon"
      class="w-6 h-6"
      @click="toggleNavigationMenu"
    >
  </header>
  <Transition name="grow">
    <div class="bg-proj-21-dark-violet rounded-lg pb-2 my-3" v-if="isNavigationVisible">
      <a
        v-for="(link, index) in links"
        :href="link.href"
        :key="index"
        class="block text-center text-slate-100 font-semibold py-3"
      >
        {{ link.label }}
      </a>
      <div class="border-t border-gray-400 py-3"></div>
      <a href="#" class="block text-center text-slate-100 font-semibold pb-3">Login</a>
      <a href="#" class="block text-center text-slate-100 font-semibold py-2 mb-2 bg-proj-21-cyan mx-6 rounded-2xl">Sign up</a>
    </div>
  </Transition>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const isNavigationVisible = ref(false);

defineProps({
  links: Array
});

function toggleNavigationMenu () {
  isNavigationVisible.value = !isNavigationVisible.value;
}
</script>

<style scoped>
  .grow-enter-active, .grow-leave-active {
    transition: max-height 0.5s ease-out, opacity 0.3s ease;
    overflow: hidden;
  }

  .grow-enter-from, .grow-leave-to {
    max-height: 0;
    opacity: 0;
  }

  .grow-enter-to, .grow-leave-from {
    max-height: 300px; /* Adjust based on your menu height */
    opacity: 1;
  }
</style>
