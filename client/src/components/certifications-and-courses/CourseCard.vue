<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  iconType: {
    type: String,
    required: true,
    validator: (value) => ['code', 'book'].includes(value)
  },
  iconColor: {
    type: String,
    required: true,
    validator: (value) => ['blue', 'green', 'red', 'yellow'].includes(value)
  },
  course: {
    type: Object,
    required: true
  }
});

const iconColorClasses = {
  blue: 'text-portfolio-primary-blue',
  green: 'text-portfolio-primary-green',
  red: 'text-portfolio-primary-red',
  yellow: 'text-portfolio-primary-yellow'
};

const iconBacgkgroundClasses = {
  blue: 'bg-portfolio-bg-blue',
  green: 'bg-portfolio-bg-green',
  red: 'bg-portfolio-bg-red',
  yellow: 'bg-portfolio-bg-yellow'
};

const iconTypeClasses = {
  code: 'fa-solid fa-laptop-code',
  book: 'fa-solid fa-book-open'
};

</script>

<template>
  <a :href="course.link" target="_blank">
    <div class="w-full bg-white hover:opacity-80 rounded-md p-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="p-4 rounded-full" :class="iconBacgkgroundClasses[iconColor]">
          <i :class="[iconTypeClasses[iconType], iconColorClasses[iconColor]]" class="text-xl"></i>
        </div>
        <div>
          <p class="font-semibold mb-4">{{ course.name }}</p>
          <p class="text-sm text-gray-600 mb-1">{{ course.issuer }}</p>
          <p class="text-xs italic text-gray-600">Passed: {{ course.date }}</p>
        </div>
      </div>
    </div>
  </a>
</template>