<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden">
    <header class="top-background min-h-[30vh] p-6 flex flex-col items-center relative z-20">
      <section class="h-full w-full">
        <h1 class="text-2xl text-center text-white font-semibold mb-7">
          IP Address Tracker
        </h1>
        <IpInputField
          class="mb-4"
          @ip-data-fetched="store.handleIpDataFetch"
          @reset-app="store.resetApp"
          @loading-started="store.isLoading = true"
        />
      </section>
      <LoadingChip
        v-if="store.isLoading"
        class="mt-8"
      />
      <ResultsBox
        v-if="store.isIpFetchSuccessful && !store.isLoading"
        :ip-data-results="store.ipData.baseDataArray"
        class="absolute z-30 top-44"
      />
    </header>
    <section
      id="map"
      class="flex-1 w-full z-0 relative"
      :class="{ 'bottom-background': !store.isIpFetchSuccessful }"
    />
  </div>
</template>
<script setup>
import IpInputField from './components/IpInputField.vue';
import ResultsBox from './components/ResultsBox.vue';
import LoadingChip from './components/LoadingChip.vue';
import { useIpTrackerStore } from './stores/ipTrackerStore';

const store = useIpTrackerStore();
</script>

<style scoped lang="scss">
  .top-background {
    background-image: url('/images/pattern-bg-mobile.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-height: 768px) {
      background-image: url('/images/pattern-bg-desktop.png');
    }
  }

  .bottom-background {
    background-image: url('/images/map-placeholder-image.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
