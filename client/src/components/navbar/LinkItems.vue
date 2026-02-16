<script setup>
import { defineEmits } from 'vue';
import { usePortfolioStore } from '../../stores/portfolioStore';

const emits = defineEmits(['linkClicked']);

const store = usePortfolioStore();
</script>

<template>
  <ul class="lg:flex">
    <li v-for="(navbarLink, index) in store.navbarLinks" :key="index" class="mb-4 lg:mb-0 lg:mr-6">
      <a :href="navbarLink.href" @click="emits('linkClicked')" class="text-lg font-medium text-gray-600 hover:underline">
        {{ navbarLink.name }}
      </a>
    </li>
  </ul>
</template>