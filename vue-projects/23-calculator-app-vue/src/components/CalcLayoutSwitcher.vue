<template>
  <div class="md:w-30 md:flex md:items-center" :class="store.activeTheme.textClasses.screenText">
    <label class="mr-2 text-white font-semibold" for="calc-layout">Layout:</label>
    <select 
      v-model="store.currentLayout"
      class="w-40 h-8 px-2 text-white rounded-md cursor-pointer appearance-none" 
      :class="store.activeTheme.backgroundClasses.keypadBackground" 
      name="calc-layout" 
      id="calc-layout"
    >
      <option 
        v-for="(layout, index) in store.calculatorLayouts" 
        :key="index" 
        :value="layout.name"
      >
        {{ layout.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { calcStore } from '../stores/calcStore';

const store = calcStore();
</script>

<style scoped>

</style>
