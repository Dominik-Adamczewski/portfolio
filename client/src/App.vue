<script setup>
import MobileNavigationBar from './components/MobileNavigationBar.vue';
import SummarySection from './components/SummarySection.vue';
import BaseSection from './components/BaseSection.vue';
import WorkExperienceItem from './components/work-experience/WorkExperienceItem.vue';

import { usePortfolioStore } from './stores/portfolioStore';

const store = usePortfolioStore();
</script>

<template>
  <div class="container relative">
    <nav class="flex items-center justify-between p-4 w-full">
      <MobileNavigationBar />
    </nav>
    <main>
      <SummarySection />
      <BaseSection title="About Me">
        <p v-for="(paragraph, index) in store.aboutMeParagraphs" :key="index" class="text-sm text-gray-400 leading-6 mt-2">
          {{ paragraph }}
        </p>
      </BaseSection>
      <BaseSection title="Work Experience" class="bg-linear-to-br from-portfolio-blue-tinted-gray to-white">
        <WorkExperienceItem v-for="(workExperienceItem, index) in store.workExperienceItems" :key="index" :experienceData="workExperienceItem" />
      </BaseSection>
    </main>
  </div>
</template>