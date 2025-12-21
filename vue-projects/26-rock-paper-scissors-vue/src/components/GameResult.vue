<template>
  <section class="text-center mt-20">
    <div class="text-white text-4xl font-semibold mb-6">
      <span v-if="store.gameResult === GameResult.USER_WON">YOU WON!</span>
      <span v-else-if="store.gameResult === GameResult.ENEMY_WON">YOU LOST!</span>
      <span v-else>DRAW :| Try again</span>
    </div>
    <BaseButton text="PLAY AGAIN" @click="store.resetTheGame" />
  </section>
</template>

<script setup>
import { useGameStore, GameResult } from '../stores/gameStore';
import BaseButton from './BaseButton.vue';

const store = useGameStore();
</script>

<style scoped>
</style>
