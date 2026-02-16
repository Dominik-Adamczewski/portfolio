<script setup>
import BadgeComponent from './summary-section/BadgeComponent.vue';
import HeadingComponent from './summary-section/HeadingComponent.vue';
import BaseButton from './BaseButton.vue';
import { usePortfolioStore } from '../stores/portfolioStore';

const store = usePortfolioStore();
</script>

<template>
  <section class="bg-white text-center py-12 px-8 lg:text-center">
    <BadgeComponent text="QA Specialist" />
    <HeadingComponent class="mt-6" />
    <div class="flex items-center justify-center">
      <p class="text-sm text-gray-400 leading-6 mt-2 md:w-1/2">5+ years of experience in manual and automated testing. Dedicated to delivering bug-free user experiences and bridging the gap between development and operations.</p>
    </div>
    <div class="flex flex-col lg:flex-row items-center lg:justify-center gap-3">
      <BaseButton text="Download CV" icon="download" class="my-4 md:max-w-40" />
      <BaseButton text="View GitHub" type="secondary" icon="code" class="md:max-w-40" />
    </div>
  </section>
</template>