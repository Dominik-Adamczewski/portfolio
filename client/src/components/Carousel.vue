<script setup>
import { defineProps, ref } from 'vue';
import ProjectCard from './front-end-projects/ProjectCard.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const carouselRef = ref(null);
const scrollPosition = ref(0);

const handleScroll = (e) => {
  scrollPosition.value = e.target.scrollLeft;
};

</script>

<template>
  <ul 
    ref="carouselRef" 
    @scroll="handleScroll"
    class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mr-8">
    <li v-for="(item, index) in props.items" :key="index" class="shrink-0 snap-start first:ml-0 last:mr-8 max-w-80">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>