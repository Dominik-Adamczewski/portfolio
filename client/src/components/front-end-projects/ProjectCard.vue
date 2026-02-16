<script setup>
import { defineProps, computed } from 'vue';
import Chip from '../Chip.vue';

const props = defineProps({
  projectData: {
    type: Object,
    required: true
  },
});

const getChipColor = (difficulty) => {
  switch (difficulty) {
    case 'Newbie':
      return 'blue';
    case 'Junior':
      return 'green';
    case 'Intermediate':
      return 'yellow';
    case 'Advanced':
      return 'red';  
    default:
      return 'base';
  }
};

</script>

<template>
  <a :href="projectData.url" target="_blank">
    <div class="bg-white rounded-md p-4 w-72 lg:w-80 h-full flex flex-col">
      <div class="h-44 w-full overflow-hidden rounded-md bg-gray-400 shrink-0">
        <img 
          v-if="projectData.metaData.image"
          :src="projectData.metaData.image" 
          class="w-full h-full object-cover"
          :alt="projectData.title"
        />
      </div>
      <div class="flex-1 flex flex-col">
        <div class="flex items-center justify-between mt-2 gap-2">
          <h3 class="font-semibold text-lg my-2 flex-1 line-clamp-2">{{ projectData.title }}</h3>
          <Chip 
            size="small" 
            :color="getChipColor(projectData.metaData.difficulty)" 
            :text="projectData.metaData.difficulty" 
          />
        </div>
        <p class="text-sm text-gray-500 mb-4 line-clamp-3">{{ projectData.metaData.description }}</p>
        <div class="flex items-center flex-wrap mt-auto">
          <Chip v-for="(tech, index) in projectData.metaData.technologies" :key="index" :text="tech" class="mt-2 mr-2" />
        </div>
      </div>
    </div>
  </a>
</template>