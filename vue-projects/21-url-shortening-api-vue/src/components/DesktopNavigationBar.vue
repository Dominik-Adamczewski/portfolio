<template>
  <header class="hidden lg:flex lg:items-center lg:justify-between">
    <div class="flex items-center">
      <img src="/images/logo.svg" alt="Shortly logo" class="mr-4">
      <a
        v-for="(link, index) in links"
        :href="link.href"
        :key="index"
        class="block text-center font-semibold mx-2 text-proj-21-grayish-violet hover:text-proj-21-gray"
      >
        {{ link.label }}
      </a>
    </div>
    <div class="flex items-center justify-end w-1/4">
      <a class="mr-6 text-proj-21-grayish-violet font-semibold cursor-pointer hover:text-proj-21-gray">Login</a>
      <BaseButton text="Sign up" type="cta" rounded="strong-rounding" :is-link="true" href="#" />
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseButton from './BaseButton.vue';

defineProps({
  links: Array
});

</script>

<style scoped>

</style>
