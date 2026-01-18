<template>
  <div class="min-h-screen pt-[30%] md:pt-[10%] px-4 flex items-start justify-center" :class="store.activeTheme.backgroundClasses.appBackground">
    <div class="w-auto max-w-xl flex-grow">
      <CalcHeader class="mb-10" />
      <CalcScreen class="mb-6" />
      <CalcKeyboard />
    </div>
  </div>
</template>

<script setup>
import CalcHeader from './components/CalcHeader.vue';
import CalcScreen from './components/CalcScreen.vue';
import CalcKeyboard from './components/CalcKeyboard.vue';
import { calcStore } from './stores/calcStore';

const store = calcStore();
</script>

<style>

</style>
