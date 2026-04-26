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
  <div class="w-full bg-white rounded-md p-4 flex flex-col min-h-60">
    <div class="flex justify-between items-start w-full mb-4">
      <div class="p-4 rounded-full shrink-0" :class="iconBacgkgroundClasses[iconColor]">
        <i :class="[iconTypeClasses[iconType], iconColorClasses[iconColor]]" class="text-xl"></i>
      </div>
      <a v-if="course.link" :href="course.link" class="text-gray-400 hover:opacity-80" target="_blank">
        <i class="fa-solid fa-up-right-from-square"></i>
      </a>
    </div>
    <p class="font-semibold mb-2 lg:text-lg">{{ course.name }}</p>
    <div class="border-t border-gray-300 mt-auto pt-4">
      <div class="w-full flex items-center justify-between">
        <p class="text-gray-600">Issued by:</p>
        <p class="text-sm lg:text-base text-gray-400">{{ course.issuer }}</p>
      </div>
      <div v-if="course.certificateLink" class="w-full flex items-center justify-center mt-5">
        <a :href="course.certificateLink" target="_blank" class="hover:underline text-portfolio-primary-blue">
          View certificate
        </a>
      </div>
    </div>
  </div>
</template>