<script setup>
import { defineProps } from 'vue';
import Chip from '../Chip.vue';

const props = defineProps({
  experienceData: {
    type: Object,
    required: true
  },
  isLast: {
    type: Boolean,
    default: false
  }
});

</script>

<style scoped>
  .timeline-line {
    width: 2px;
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
    flex-shrink: 0;
    opacity: 0.2;
  }
</style>

<template>
  <div class="flex gap-4">
    <!-- Timeline -->
    <div class="flex flex-col items-center pt-2">
      <div class="w-3 h-3 rounded-full border-3 border-portfolio-primary-blue bg-white shrink-0"></div>
      <div v-if="!isLast" class="timeline-line grow mt-2"></div>
    </div>

    <!-- Work Experience Item -->
    <div 
      class="rounded-md p-4 mb-4 grow" 
      :class="{ 
        'border border-portfolio-primary-blue bg-blue-50': props.experienceData.isCurrent,
        'bg-portfolio-very-light-gray': !props.experienceData.isCurrent
      }"
    >
      <div class="md:flex md:items-center md:justify-between md:mb-4">
        <div>
          <h3 class="font-semibold text-lg">{{ props.experienceData.position }}</h3>
          <p class="text-sm text-portfolio-primary-blue">{{ props.experienceData.company }}</p>
        </div>
        <Chip 
          v-if="props.experienceData.isCurrent"
          :text="props.experienceData.duration" 
          color="blue"
          class="text-center my-3 lg:my-0 lg:text-left"
        />
        <span v-else class="block text-sm rounded-md bg-gray-100 p-2 font-semibold text-center text-gray-500 mt-2 mb-4 md:mt-0 md:mb-0">
          {{ props.experienceData.duration }}
        </span>
      </div>
      <p class="mb-4 text-sm text-gray-500 italic text-center lg:text-left lg:w-3/4">{{ props.experienceData.description }}</p>
      <ul class="list-disc pl-5">
        <li v-for="(listItem, index) in props.experienceData.descriptionListItems" :key="index" class="text-base">
          {{ listItem }}
        </li>
      </ul>
      <div class="flex items-center flex-wrap mt-3 text-sm">
        <Chip 
          v-for="(skill, index) in props.experienceData.skills" 
          :key="index" 
          :text="skill" 
          color="white"
          class="mt-2 mr-2"
        />
      </div>
    </div>
  </div>
</template>