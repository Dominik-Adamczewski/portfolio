<script setup>
import { defineProps } from 'vue';
import Chip from '../Chip.vue';

const props = defineProps({
  education: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="bg-white p-4 rounded-md mb-4">
    <div>
      <div class="flex items-center justify-between">
        <div 
          :class="{ 
            'bg-gray-200 text-gray-600': education.degree !== 'master',
            'bg-portfolio-primary-blue text-white': education.degree === 'master'
          }"
          class="w-10 h-10 flex items-center justify-center rounded-md"
        >
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <div>
          <Chip :text="education.date" />
        </div>
      </div>
      <div class="mt-2">
        <p class="font-semibold">{{ education.name }}</p>
        <p class="text-sm text-gray-600">{{ education.institution }}</p>
        <p class="text-xs italic text-gray-600">{{ education.description }}</p>
      </div>
    </div>
  </div>
</template>