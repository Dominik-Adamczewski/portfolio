<script setup>
import { defineProps, ref, computed, onMounted } from 'vue';
import ChevronIcon from './front-end-projects/ChevronIcon.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const carouselRef = ref(null);
const scrollPosition = ref(0);
const maxScrollLeft = ref(0);

onMounted(() => {
  maxScrollLeft.value = carouselRef.value.scrollWidth - carouselRef.value.clientWidth;
});

const handleScroll = (e) => {
  scrollPosition.value = e.target.scrollLeft;
  maxScrollLeft.value = e.target.scrollWidth - e.target.clientWidth;
};

const canScrollLeft = computed(() => scrollPosition.value > 0);
const canScrollRight = computed(() => scrollPosition.value < maxScrollLeft.value);

const scrollLeft = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: -300, behavior: 'smooth' });
  };
};

const scrollRight = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: 300, behavior: 'smooth' });
  };
};

</script>

<style scoped>
  .scrollbar-hide {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
</style>

<template>
  <div class="relative">
    <ChevronIcon 
      v-if="canScrollLeft" 
      @click="scrollLeft" 
      :direction="'left'"
      class="absolute -left-6 top-1/2 -translate-y-1/2 z-10" 
    />
    <ul 
      ref="carouselRef" 
      @scroll="handleScroll"
      class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
      <li v-for="(item, index) in props.items" :key="index" class="shrink-0 snap-start max-w-80">
        <slot :item="item" :index="index"></slot>
      </li>
    </ul>
    <ChevronIcon 
      v-if="canScrollRight" 
      @click="scrollRight" 
      class="absolute -right-6 top-1/2 -translate-y-1/2 z-10" 
      :direction="'right'"
    />
  </div>
</template>