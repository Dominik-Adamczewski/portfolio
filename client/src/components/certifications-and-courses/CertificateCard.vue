<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  iconColor: {
    type: String,
    required: true,
    validator: (value) => ['blue', 'green', 'red', 'yellow'].includes(value)
  },
  certificate: {
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

</script>

<template>
  <div class="w-full bg-white rounded-md p-4 flex items-center lg:items-stretch justify-between lg:w-68 lg:min-h-60">
    <div class="flex items-center gap-4 lg:flex-col lg:items-start lg:w-full">
      <div class="p-4 rounded-full lg:shrink-0" :class="iconBacgkgroundClasses[iconColor]">
        <i class="fa-solid fa-medal text-xl" :class="iconColorClasses[iconColor]"></i>
      </div>
      <div class="lg:w-full lg:flex lg:flex-col lg:flex-1">
        <p class="font-semibold lg:text-lg mb-4">{{ certificate.name }}</p>
        <div class="lg:border-t border-gray-300">
          <div class="mt-6">
            <p class="text-xs lg:text-sm text-gray-400 mt-1" v-for="(item, index) in certificate.details" :key="index">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>