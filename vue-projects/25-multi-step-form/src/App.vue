<template>
  <main class="main-container min-h-screen lg:flex lg:justify-center lg:items-center">
    <MainFormModal />
  </main>
</template>

<script setup>
import MainFormModal from './components/MainFormModal.vue';
</script>

<style scoped>
  .main-container {
    background-color: hsl(218, 100%, 97%);
  }
</style>
