<script setup>
import BadgeComponent from './summary-section/BadgeComponent.vue';
import HeadingComponent from './summary-section/HeadingComponent.vue';
import BaseButton from './BaseButton.vue';
import { usePortfolioStore } from '../stores/portfolioStore';

const store = usePortfolioStore();
</script>

<template>
  <section class="bg-linear-to-br from-portfolio-blue-tinted-gray to-white text-center py-12 px-8">
    <BadgeComponent text="QA Specialist" />
    <HeadingComponent class="mt-6" />
    <p class="text-sm text-gray-400 leading-6 mt-2">5+ years of experience in manual and automated testing. Dedicated to delivering bug-free user experiences and bridging the gap between development and operations.</p>
    <div class="flex flex-col items-center">
      <BaseButton text="Download CV" icon="download" class="my-4" />
      <BaseButton text="View GitHub" type="secondary" icon="code" />
    </div>
  </section>
</template>