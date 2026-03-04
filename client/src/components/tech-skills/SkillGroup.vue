<script setup>
import TechSkill from './TechSkill.vue';

const props = defineProps({
  name: { type: String, required: true },
  type: { type: String, required: true },
  skills: { type: Array, required: true },
  isExpanded: { type: Boolean, default: false }
});

const emit = defineEmits(['toggle']);

const groupTypeFontAwesomeIcons = {
  automation: 'fa-solid fa-robot',
  'programming-languages': 'fa-solid fa-code',
  tools: 'fa-solid fa-tools',
  social: 'fa-solid fa-users'
};
</script>

<template>
  <div class="bg-portfolio-very-light-gray p-4 mb-3 rounded-md lg:min-h-42">
    <div class="flex items-center">
      <div
        :class="{
          'bg-portfolio-primary-blue text-white': props.type === 'automation',
          'bg-portfolio-primary-purple text-white': props.type === 'programming-languages',
          'bg-portfolio-primary-green text-white': props.type === 'tools',
          'bg-portfolio-primary-orange text-white': props.type === 'social'
        }"
        class="w-10 h-10 flex items-center justify-center rounded-md mb-4 mr-2"
      >
        <i :class="groupTypeFontAwesomeIcons[props.type]"></i>
      </div>
      <h3 class="font-semibold text-lg mb-4">{{ props.name }}</h3>
    </div>

    <div class="max-h-48 relative" :class="{ 'overflow-y-hidden': !props.isExpanded, 'max-h-max': props.isExpanded }">
      <div v-for="(skill, index) in props.skills" :key="index" class="mb-4">
        <TechSkill :skill="skill" />
      </div>
      <div
        v-if="props.skills.length > 4 && !props.isExpanded"
        class="absolute bottom-0 left-0 w-full pt-16 pb-2 px-2 flex justify-center
               bg-linear-to-t from-portfolio-very-light-gray to-transparent"
      >
        <button
          @click="emit('toggle')"
          class="text-sm font-semibold text-portfolio-primary-blue hover:underline cursor-pointer"
        >
          + Show more
        </button>
      </div>
    </div>
    <div v-if="props.skills.length > 4 && props.isExpanded" class="flex justify-center mt-2">
      <button
        @click="emit('toggle')"
        class="text-sm font-semibold text-portfolio-primary-blue hover:underline cursor-pointer"
      >
        - Show less
      </button>
    </div>
  </div>
</template>