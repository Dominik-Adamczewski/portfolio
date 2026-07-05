<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  projectData: {
    type: Object,
    required: true
  },
  iconColor: {
    type: String,
    required: true,
    validator: (value) => ['blue', 'green', 'red', 'yellow'].includes(value)
  },
  testReportIconType: {
    type: String,
    required: true,
    validator: (value) => ['chart', 'file', 'list'].includes(value)
  }
});

const iconColorClasses = {
  blue: 'text-portfolio-primary-blue',
  green: 'text-portfolio-primary-green',
  red: 'text-portfolio-primary-red',
  yellow: 'text-portfolio-primary-yellow'
};

const iconBacgkgroundClasses = {
  blue: 'bg-portfolio-bg-blue',
  green: 'bg-portfolio-bg-green',
  red: 'bg-portfolio-bg-red',
  yellow: 'bg-portfolio-bg-yellow'
};

const testReportIconClasses = {
  chart: 'fa-solid fa-chart-simple',
  file: 'fa-solid fa-file-lines',
  list: 'fa-solid fa-list'
};
</script>

<template>
  <div class="w-full bg-white rounded-md p-4 flex flex-col min-h-52">
    <div class="flex items-center w-full mb-4">
      <div class="p-4 mr-2 rounded-full shrink-0" :class="iconBacgkgroundClasses[iconColor]">
        <i :class="iconColorClasses[iconColor]" class="fa-solid fa-robot text-xl"></i>
      </div>
      <p class="font-semibold lg:text-lg">{{ projectData.name }}</p>
    </div>
    <div class="text-sm text-gray-500">
      {{ projectData.description }}
    </div>
    <div class="grow flex items-end">
      <a :href="projectData.githubLink" target="_blank" class="text-gray-400 hover:text-gray-500 mt-4 inline-block mr-4">
        <i class="fa-solid fa-code"></i>
        Github
      </a>
      <a :href="projectData.reportUrl" target="_blank" class="text-gray-400 hover:text-gray-500 mt-4 inline-block mr-4">
        <i :class="testReportIconClasses[testReportIconType]"></i>
        Report
      </a>
      <a v-if="projectData.githubActionsLink" :href="projectData.githubActionsLink" target="_blank" class="text-gray-400 hover:text-gray-500 mt-4 inline-block">
        <i :class="testReportIconClasses[testReportIconType]"></i>
        CI/CD Report
      </a>
    </div>
  </div>
</template>