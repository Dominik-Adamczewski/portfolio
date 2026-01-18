<template>
  <div class="flex items-center justify-between w-full">
    <span class="text-3xl font-bold" :class="store.activeTheme.textClasses.screenText">calc</span>
    <div class="flex flex-col-reverse md:flex-row md:items-center">
      <CalcLayoutSwitcher class="mr-0 md:mr-10" />
      <CalcThemeSwitcher class="mb-2 md:mb-0" :themes="store.themes" />
    </div>
  </div>
</template>

<script setup>
import CalcThemeSwitcher from './CalcThemeSwitcher.vue';
import CalcLayoutSwitcher from './CalcLayoutSwitcher.vue';
import { calcStore } from '../stores/calcStore';

const store = calcStore();
</script>

<style>

</style>
