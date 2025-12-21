<template>
  <section class="min-h-screen bg-gradient-to-b from-proj-26-gradient-from to-proj-26-gradient-to p-7 flex flex-col">
    <header>
      <ScoreBoard class="mb-28 md:mb-32 lg:max-w-3xl lg:mx-auto" />
    </header>
    <main class="min-h-[360px] lg:min-h-[440px]">
      <PlayBoard />
    </main>
    <footer class="text-center lg:text-right mt-32 lg:mt-12 justify-self-end grow flex justify-center items-center">
      <BaseButton class="lg:mb-12" text="RULES" :secondary="true" @click="openRulesModal" />
    </footer>
  </section>
  <RulesModal v-if="isRulesModalVisible" @close="closeRulesModal" />
  <LoadLastGameResultModal
    v-if="isLoadLastGameResultModalVisible"
    @start-over="startGameFromScratch"
    @continue="continueGameWithLastScore"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ScoreBoard from './components/ScoreBoard.vue';
import PlayBoard from './components/PlayBoard.vue';
import BaseButton from './components/BaseButton.vue';
import RulesModal from './components/RulesModal.vue';
import LoadLastGameResultModal from './components/LoadLastGameResultModal.vue';
import { useGameStore } from './stores/gameStore';

const store = useGameStore();

const isRulesModalVisible = ref(false);
const isLoadLastGameResultModalVisible = ref(false);

const openRulesModal = () => {
  isRulesModalVisible.value = true;
};

const openLastGameResultModal = () => {
  isLoadLastGameResultModalVisible.value = true;
};

const closeRulesModal = () => {
  isRulesModalVisible.value = false;
};

const startGameFromScratch = () => {
  isLoadLastGameResultModalVisible.value = false;
  store.clearLastGameScore();
};

const continueGameWithLastScore = () => {
  store.currentScore = Number(store.getScoreFromLocalStorage());
  isLoadLastGameResultModalVisible.value = false;
};

onMounted(() => {
  if (store.getScoreFromLocalStorage()) {
    openLastGameResultModal();
  }
});
</script>

<style scoped>
</style>
