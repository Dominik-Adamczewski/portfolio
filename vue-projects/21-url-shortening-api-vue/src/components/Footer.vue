<template>
  <section class="bg-proj-21-very-dark-blue text-center pb-10 lg:pb-14 lg:pt-10 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
    <img src="/images/logo-white.svg" alt="Shortly logo" class="block my-10 lg:my-0 lg:self-start">
    <div v-for="(linkSection, index) in linkSections" :key="index" class="my-4 lg:my-0 lg:min-h-40 lg:self-start">
      <span class="text-white">{{ linkSection.label }}</span>
      <ul v-for="(link, linkIndex) in linkSection.links" :key="linkIndex">
        <li class="my-2">
          <a class="text-proj-21-grayish-violet hover:text-proj-21-gray" :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-between w-1/2 lg:w-auto mt-4 lg:self-start">
      <a v-for="(socialMediaLink, index) in socialMediaLinks" :href="socialMediaLink.href" :key="index" class="lg:mr-4">
        <img :src="socialMediaLink.iconPath" :alt="socialMediaLink.alt">
      </a>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  linkSections: Array,
  socialMediaLinks: Array
});
</script>
