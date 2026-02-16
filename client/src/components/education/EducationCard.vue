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
  <div class="bg-portfolio-very-light-gray p-4 rounded-md mb-4">
    <div>
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex items-center">
          <div 
            :class="{ 
              'bg-gray-200': education.degree !== 'master',
              'bg-portfolio-primary-blue text-white': education.degree === 'master'
            }"
            class="w-10 h-10 flex items-center justify-center rounded-md mr-4"
          >
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <div class="mt-2">
            <p class="font-semibold">{{ education.name }}</p>
            <p class="text-sm">{{ education.institution }}</p>
            <p class="text-xs italic">{{ education.description }}</p>
          </div>
        </div>
        <div>
          <span 
          :class="{
            'bg-blue-50 text-portfolio-primary-blue': education.degree == 'master',
            'bg-gray-100 text-gray-500': education.degree !== 'master'
          }" 
          class="block text-sm rounded-md p-2 font-semibold text-center mt-4 md:mt-0"
          >
            {{ props.education.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>