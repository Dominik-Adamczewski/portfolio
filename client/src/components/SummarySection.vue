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
      <p class="text-sm text-gray-400 leading-6 mt-2 md:w-1/2">QA specialist with around 5 years of manual testing experience and over 2 years in test automation. Dedicated to delivering exceptional user experiences by ensuring software releases are as bug-free as possible. I thrive on collaborating with teams to achieve quality outcomes.</p>
    </div>
    <div class="flex flex-col lg:flex-row items-center lg:justify-center gap-3">
      <a href="https://www.linkedin.com/in/dominik-adamczewski/" target="_blank" rel="noopener noreferrer">
        <BaseButton text="LinkedIn profile" icon="linkedIn" class="my-4 md:max-w-40" />
      </a>
      <a href="https://github.com/Dominik-Adamczewski" target="_blank" rel="noopener noreferrer">
        <BaseButton text="View GitHub" type="secondary" icon="code" class="md:max-w-40" />
      </a>
    </div>
  </section>
</template>