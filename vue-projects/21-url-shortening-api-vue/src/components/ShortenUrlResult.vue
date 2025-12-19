<template>
  <div class="bg-white w-full rounded-md px-6 pb-4 lg:p-4 lg:flex lg:items-center lg:justify-between">
    <div class="-mx-6 box-border lg:mx-0">
      <div class="border-b-1 border-slate-400 lg:border-none mx-6 lg:px-0 py-3 lg:py-0 mb-3 lg:mb-0">{{ longUrl }}</div>
    </div>
    <div class="lg:flex lg:items-center lg:justify-end lg:basis-96">
      <div class="mb-3 lg:mb-0 lg:mr-4">
        <a :href="shortenUrl" class="text-proj-21-cyan hover:text-proj-21-cyan-light">{{ shortenUrl }}</a>
      </div>
      <BaseButton :text="btnText" :type="btnType" :width="btnWidth" rounded="light-rounding" @click="copyShortenedLinkToClipboard" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { defineProps, ref, computed } from 'vue';
import { useDevice } from '../composables/device';

const { device } = useDevice();

const btnWidth = computed(() => device.value === 'desktop' ? 'sm' : 'full');
const btnText = ref('Copy');
const btnType = ref('cta');

const props = defineProps({
  longUrl: String,
  shortenUrl: String
});

const copyShortenedLinkToClipboard = async () => {
  await navigator.clipboard.writeText(props.shortenUrl);
  btnText.value = 'Copied!';
  btnType.value = 'copiedState';
  setTimeout(() => {
    btnText.value = 'Copy';
    btnType.value = 'cta';
  }, 3000);
}
</script>
