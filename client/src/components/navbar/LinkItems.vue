<script setup>
import { defineEmits } from 'vue';
import { usePortfolioStore } from '../../stores/portfolioStore';

const emits = defineEmits(['linkClicked']);

const store = usePortfolioStore();
</script>

<template>
  <ul>
    <li v-for="(navbarLink, index) in store.navbarLinks" :key="index" class="mb-4">
      <a :href="navbarLink.href" @click="emits('linkClicked')" class="text-lg font-medium text-black hover:underline">
        {{ navbarLink.name }}
      </a>
    </li>
  </ul>
</template>