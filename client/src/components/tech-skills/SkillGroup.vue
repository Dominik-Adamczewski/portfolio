<script setup>
import TechSkill from './TechSkill.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['automation', 'programming-languages', 'tools', 'social'].includes(value)
  },
  skills: {
    type: Array,
    required: true
  }
});

const groupTypeFontAwesomeIcons = {
  automation: 'fa-solid fa-robot',
  programmingLanguages: 'fa-solid fa-code',
  tools: 'fa-solid fa-tools',
  social: 'fa-solid fa-users'
};

</script>

<template>
  <div class="bg-portfolio-very-light-gray p-4 mb-3 rounded-md lg:min-h-50">
    <div class="flex items-center">
      <div 
        :class="{
          'bg-portfolio-primary-blue text-white': props.type === 'automation',
          'bg-portfolio-primary-purple text-white': props.type === 'programmingLanguages',
          'bg-portfolio-primary-green text-white': props.type === 'tools',
          'bg-portfolio-primary-orange text-white': props.type === 'social'
        }"
        class="w-10 h-10 flex items-center justify-center rounded-md mb-4 mr-2"
      >
        <i :class="groupTypeFontAwesomeIcons[props.type]"></i>
      </div>
      <h3 class="font-semibold text-lg mb-4">{{ props.name }}</h3>
    </div>
    <div>
      <div v-for="(skill, index) in props.skills" :key="index" class="mb-4">
        <TechSkill :skill="skill" />
      </div>
    </div>
  </div>
</template>