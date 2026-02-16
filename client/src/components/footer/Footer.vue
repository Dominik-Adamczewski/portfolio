<script setup>
import EmailItem from './EmailItem.vue';

const links = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/dominik-adamczewski/' },
  { label: 'Github', link: 'https://github.com/Dominik-Adamczewski' },
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <section class="bg-portfolio-very-light-gray py-8 px-4 text-center border-t border-gray-300">
    <div class="flex items-center flex-col">
      <div class="bg-portfolio-primary-blue w-14 h-14 rounded-md flex items-center justify-center mb-4">
        <i class="fa-solid fa-magnifying-glass text-white text-2xl"></i>
      </div>
      <p class="font-semibold text-2xl mb-4">Let's ensure quality together</p>
      <p class="text-sm leading-6 mt-2 mb-4">
        Open for new opportunities. Feel free to reach out if you're looking for a QA Specialist who cares about the details.
      </p>
      <div class="mb-4">
        <EmailItem text="dominik_adamczewski@wp.pl" />
      </div>
      <div class="mb-6">
        <a v-for="(link, index) in links" :key="index" :href="link.link" target="_blank" class="hover:text-portfolio-primary-blue mr-4">
          {{ link.label }}
        </a>
      </div>
    </div>
    <span class="text-xs">© {{ currentYear }} Dominik Adamczewski. All rights reserved.</span>
  </section>
</template>