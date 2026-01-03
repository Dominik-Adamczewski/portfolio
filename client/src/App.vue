<script setup>
import MobileNavigationBar from './components/MobileNavigationBar.vue';
import SummarySection from './components/SummarySection.vue';
</script>

<template>
  <div class="container relative">
    <nav class="flex items-center justify-between p-4 w-full">
      <MobileNavigationBar />
    </nav>
    <main>
      <section>
        <SummarySection />
      </section>
    </main>
  </div>
</template>