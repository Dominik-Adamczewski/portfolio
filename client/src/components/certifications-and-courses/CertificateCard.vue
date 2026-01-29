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
  <div class="w-full bg-white rounded-md p-4 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <div class="p-4 rounded-full" :class="iconBacgkgroundClasses[iconColor]">
        <i class="fa-solid fa-medal text-xl" :class="iconColorClasses[iconColor]"></i>
      </div>
      <div>
        <p class="font-semibold">{{ certificate.name }}</p>
        <div>
          <span class="text-xs text-gray-400" v-for="(item, index) in certificate.details" :key="index">
            {{ item }}
            <span v-if="index < certificate.details.length - 1">• </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>