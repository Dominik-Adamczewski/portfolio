<template>
  <div
    class="rounded-lg grid gap-6 p-6"
    :class="store.activeTheme.backgroundClasses.keypadBackground"
  >
    <section 
      v-for="(row, index) in store.activeLayout.layout"
      :key="index"
      class="flex gap-4"
    >
      <CalcKey
        v-for="(calcKey, index) in row"
        :key="index"
        :key-object="calcKey"
        :class="{
          'col-span-2 col-start-1': index === row - 2,
          'col-span-2 col-start-3': index === row - 1
        }"
        @keyClick="store.addDigitToCurrentExpression"
      />
    </section>
  </div>
</template>

<script setup>
import { calcStore } from '../stores/calcStore';
import CalcKey from './CalcKey.vue';

const store = calcStore();
console.log(store);
</script>

<style>

</style>
