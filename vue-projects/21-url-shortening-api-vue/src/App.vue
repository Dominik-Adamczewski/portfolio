<template>
  <div class="px-5 pt-8 pb-32 grid overflow-x-hidden max-w-6xl lg:mx-auto">
    <MobileNavigationBar :links="store.navigationLinks" />
    <DesktopNavigationBar :links="store.navigationLinks" />
    <GetStartedSection class="mt-5" />
  </div>
  <div class="px-5 pb-20 bg-gray-200 flex flex-col items-center">
    <ShortenLinkForm class="-translate-y-20" />
    <SocialProofSection />
  </div>
  <BoostYourLinksSection />
  <Footer :link-sections="store.footerLinkSections" :social-media-links="store.socialMediaIcons" />
</template>

<script setup>
import MobileNavigationBar from './components/MobileNavigationBar.vue';
import DesktopNavigationBar from './components/DesktopNavigationBar.vue';
import GetStartedSection from './components/GetStartedSection.vue';
import ShortenLinkForm from './components/ShortenLinkForm.vue';
import SocialProofSection from './components/SocialProofSection.vue';
import BoostYourLinksSection from './components/BoostYourLinksSection.vue';
import Footer from './components/Footer.vue';
import { useUrlsStore } from './stores/UrlsStore';

const store = useUrlsStore();
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
}
</style>
