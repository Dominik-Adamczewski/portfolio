<template>
  <section class="game-container mx-auto min-h-[320px] relative">
    <GameCircle
      v-for="(item, index) in store.availableWeapons"
      :key="index"
      :circle-obj="item"
      @choose-weapon="handleChoosingUserWeapon"
    />
  </section>
</template>

<script setup>
import GameCircle from './GameCircle.vue';

import { useGameStore } from '../stores/gameStore';

const store = useGameStore();

const handleChoosingUserWeapon = (chosenWeaponObj) => {
  store.assignWeaponToTheUser(chosenWeaponObj);
  store.moveToTheNextStep();
};
</script>

<style scoped>
  .game-container {
    background-image: url('../public/images/bg-triangle.svg');
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    max-width: 320px;
  }

  @media (min-width: 768px) {
    .game-container {
      background-size: 80%;
    }
  }

  @media (min-width: 1024px) {
    .game-container {
      background-size: 100%;
    }
  }
</style>
