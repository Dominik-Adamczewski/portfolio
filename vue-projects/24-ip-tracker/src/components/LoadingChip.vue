<template>
  <div class="text-center">
    <span class="inline-block md:text-xl bg-white border-2 border-black py-2 px-6 rounded-2xl text-center">
      Checking IP Address<span class="inline-block w-6 text-left">{{ dots }}</span>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dots = ref('');
let intervalId = null;

const startLoadingAnimation = () => {
  let dotCount = 0;

  intervalId = setInterval(() => {
    dotCount = (dotCount + 1) % 4; // 0 to 3
    dots.value = '.'.repeat(dotCount);
  }, 500);
};

onMounted(() => {
  startLoadingAnimation();
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
/* Optional: subtle animation */
span {
  transition: all 0.2s ease-in-out;
}
</style>
