<script setup>
import { defineProps } from 'vue';
import Chip from '../Chip.vue';

const props = defineProps({
  experienceData: {
    type: Object,
    required: true
  },
});

</script>

<template>
  <div class="rounded-md bg-white p-4">
    <div>
      <div>
        <h3 class="font-semibold text-lg">{{ props.experienceData.position }}</h3>
        <p class="text-sm text-portfolio-primary-blue">{{ props.experienceData.company }}</p>
      </div>
      <span class="block text-sm rounded-md bg-gray-100 p-2 font-semibold text-center text-gray-500 mt-2 mb-4">
        {{ props.experienceData.duration }}
      </span>
    </div>
    <ul class="list-disc pl-5">
      <li v-for="(listItem, index) in props.experienceData.descriptionListItems" :key="index" class="text-base text-gray-500">
        {{ listItem }}
      </li>
    </ul>
    <div class="flex items-center flex-wrap mt-3 text-sm">
      <Chip v-for="(skill, index) in props.experienceData.skills" :key="index" :text="skill" class="mt-2 mr-2" />
    </div>
  </div>
</template>