<script setup>
import BadgeComponent from './summary-section/BadgeComponent.vue';
import HeadingComponent from './summary-section/HeadingComponent.vue';
import { usePortfolioStore } from '../stores/portfolioStore';

const store = usePortfolioStore();
</script>

<template>
  <div class="bg-linear-to-br from-portfolio-blue-tinted-gray to-white text-center pt-10">
    <BadgeComponent text="QA Specialist" />
    <HeadingComponent class="mt-6" />
  </div>
</template>