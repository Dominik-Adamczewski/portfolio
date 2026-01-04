<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  experienceData: {
    type: Object,
    required: true
  },
});

</script>

<template>
  <div>
    <div>
      <div>
        <h3>{{ props.experienceData.position }}</h3>
        <p>{{ props.experienceData.company }}</p>
      </div>
      <div>
        {{ props.experienceData.duration }}
      </div>
    </div>
    <ul>
      <li v-for="(listItem, index) in props.experienceData.descriptionListItems" :key="index">
        {{ listItem }}
      </li>
    </ul>
    <div>
      <p v-for="(skill, index) in props.experienceData.skills" :key="index">
        {{ skill }}
      </p>  
    </div>
  </div>
</template>