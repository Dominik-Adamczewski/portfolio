<template>
  <section
    v-if="props.ipDataResults?.length > 0"
    class="border md:max-w-5xl min-h-32 rounded-md bg-white p-4 text-center flex flex-col md:flex-row md:items-center md:text-left gap-4"
  >
    <div class="flex flex-col md:flex-row md:items-center w-full">
      <div
        v-for="(idDataResult, index) in props.ipDataResults"
        :key="index"
        class="mb-4 md:mb-0 px-4 md:pr-8 w-full md:w-auto"
        :class="{ 'md:border-r': index !== props.ipDataResults.length - 1 }"
      >
        <div class="text-gray-500 font-semibold text-xs md:mb-2">
          {{ idDataResult.label }}
        </div>
        <span class="font-bold text-xl md:text-2xl">{{ idDataResult.data }}</span>
      </div>
    </div>
    <div
      v-if="store.isIpFetchSuccessful"
      class="text-center md:text-right w-full md:w-auto"
    >
      <button
        class="border border-black rounded-md capitalize px-4 py-2 hover:bg-black hover:text-white font-semibold cursor-pointer"
        @click="store.resetApp"
      >
        Reset
      </button>
    </div>
  </section>
</template>
<script setup>
import { defineProps } from 'vue';
import { useIpTrackerStore } from '../stores/ipTrackerStore';

const store = useIpTrackerStore();

const props = defineProps({
  ipDataResults: {
    type: Array,
    default: () => []
  }
});

</script>

<style scoped>

</style>
