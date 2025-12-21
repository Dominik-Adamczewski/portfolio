<template>
  <section class="flex items-center justify-between lg:max-w-3xl lg:mx-auto">
    <div>
      <GameCircle :circle-obj="store.userWeaponObj" :is-on-choosing-weapon-screen="false" />
      <p class="mt-3 text-white text-center">YOU PICKED</p>
    </div>
    <div>
      <GameCircle :circle-obj="store.enemyWeaponObj" :is-on-choosing-weapon-screen="false" />
      <p class="mt-3 text-white text-center">THE HOUSE PICKED</p>
    </div>
  </section>
  <GameResult />
</template>

<script setup>
import { onBeforeMount } from 'vue';
import GameCircle from './GameCircle.vue';
import GameResult from './GameResult.vue';
import { useGameStore } from '../stores/gameStore';

const store = useGameStore();

onBeforeMount(() => {
  store.calculateGameResult();
});

</script>

<style scoped>
</style>
