<template>
  <div class="flex items-center cursor-pointer justify-end relative w-full" @click="handleThemeChange">
    <div class="uppercase mr-6 leading-none font-bold" :class="store.activeTheme.textClasses.screenText">theme</div>
    <div 
      class="dot-container relative w-16 h-5 rounded-xl flex items-center justify-between px-2" 
      :class="store.activeTheme.backgroundClasses.keypadBackground"
    >
      <span v-for="(item, index) in props.themes" :key="index" class="-mt-10" :class="store.activeTheme.textClasses.screenText">
        {{ index + 1 }}
      </span>
      <div
        class="absolute w-3 h-3 rounded-full transition-all duration-300"
        :class="[dotPositionClass, store.activeTheme.keysClasses.mainKeyBackground]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { calcStore } from '../stores/calcStore';

const store = calcStore();

const props = defineProps({
  themes: Array,
});

const handleThemeChange = () => {
  store.applyNextTheme();
};

const dotPositionClass = computed(() => {
  switch (store.currentTheme) {
    case 2:
      return 'theme-2';
    case 3:
      return 'theme-3';
    default:
      return 'theme-1';
  }
});
</script>

<style scoped>
  .theme-1 {
    left: 8%;
  }

  .theme-2 {
    left: 50%;
    transform: translateX(-50%);
  }

  .theme-3 {
    left: 81%;
    transform: translateX(-50%);
  }
</style>
