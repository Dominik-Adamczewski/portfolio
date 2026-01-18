<template>
  <div class="border-4 border-proj-26-neutral-gray-600 rounded-md p-4 lg:p-8 flex items-center justify-between">
    <div class="text-white font-semibold leading-none text-xl lg:text-3xl">
      ROCK<br>
      PAPER<br>
      SCISSORS
    </div>
    <ScoreBrick :score="store.currentScore" />
  </div>
</template>

<script setup>
import ScoreBrick from './ScoreBrick.vue';
import { useGameStore } from '../stores/gameStore';

const store = useGameStore();
</script>

<style scoped>
</style>
