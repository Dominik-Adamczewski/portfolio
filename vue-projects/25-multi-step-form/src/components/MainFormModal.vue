<template>
  <section class="h-screen flex flex-col lg:flex-row lg:h-[600px] lg:w-3/4 lg:max-w-4xl lg:bg-white lg:rounded-md lg:p-4">
    <ModalSidebar />
    <FormSection />
  </section>
</template>

<script setup>
import ModalSidebar from './ModalSidebar.vue';
import FormSection from './FormSection.vue';
</script>

<style scoped>
</style>
