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
    <div class="w-full bg-white hover:opacity-80 rounded-md p-4 flex items-center justify-between lg:w-68 lg:min-h-60">
      <div class="flex lg:flex-col items-center lg:items-start gap-4">
        <div class="p-4 rounded-full" :class="iconBacgkgroundClasses[iconColor]">
          <i :class="[iconTypeClasses[iconType], iconColorClasses[iconColor]]" class="text-xl"></i>
        </div>
        <div>
          <p class="font-semibold mb-4 lg:text-lg">{{ course.name }}</p>
          <div class="border-t border-gray-300 mt-4 pt-4 lg:flex lg:items-center lg:justify-between text-gray-400">
            <div>
              <p class="text-sm lg:text-base mb-1 text-gray-600">{{ course.issuer }}</p>
              <p class="text-xs lg:text-sm italic">Passed: {{ course.date }}</p>
            </div>
            <div class="hidden lg:flex">
              <i class="fa-solid fa-up-right-from-square text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>