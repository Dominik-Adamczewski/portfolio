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
    <div class="bg-gray-100 rounded-md p-4 max-w-xs">
      <div class="h-44 w-full overflow-hidden rounded-md bg-gray-400">
        <img 
          v-if="projectData.metaData.image"
          :src="projectData.metaData.image" 
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <div class="flex items-center justify-between mt-2">
          <h3 class="font-semibold text-lg my-2 w-3/4">{{ projectData.title }}</h3>
          <Chip 
            size="small" 
            :color="getChipColor(projectData.metaData.difficulty)" 
            :text="projectData.metaData.difficulty" 
          />
        </div>
        <p class="text-sm text-gray-500 mb-4">{{ projectData.metaData.description }}</p>
        <div class="flex items-center flex-wrap">
          <Chip v-for="(tech, index) in projectData.metaData.technologies" :key="index" :text="tech" class="mr-2 mt-2" />
        </div>
      </div>
    </div>
  </a>
</template>