<template>
  <div 
    class="w-full h-24 rounded-lg flex items-center justify-end p-6 overflow-x-auto" 
    :class="[store.activeTheme.backgroundClasses.screenBackground]"
  >
    <span
      class="text-4xl font-semibold whitespace-nowrap text-right" 
      :class="[
        store.isCalcScreenPureText 
          ? 'text-red-500' 
          : store.activeTheme.textClasses.screenText
      ]"
    >
      {{ store.screenDisplay }}
    </span>
  </div>
</template>
<script setup>
import { calcStore } from '../stores/calcStore';

const store = calcStore();
console.log(store);
</script>

<style>

</style>
