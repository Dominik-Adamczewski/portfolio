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
  <div class="w-full bg-white rounded-md p-4 flex flex-col min-h-60">
    <div class="p-4 rounded-full shrink-0 self-start mb-4" :class="iconBacgkgroundClasses[iconColor]">
      <i class="fa-solid fa-medal text-xl" :class="iconColorClasses[iconColor]"></i>
    </div>
    <p class="font-semibold lg:text-lg">{{ certificate.name }}</p>
    <div class="border-t border-gray-300 mt-auto pt-4">
      <p class="text-xs lg:text-sm text-gray-400 mt-1" v-for="(item, index) in certificate.details" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>