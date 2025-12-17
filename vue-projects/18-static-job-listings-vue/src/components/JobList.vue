<template>
  <div class="px-6 pb-8 lg:max-w-7xl lg:mx-auto">
    <LoadingSpinner v-if="(!$store.state.filteredOffers.length) > 0 && !$store.state.isListFiltered" text="Loading job offers. Please wait..." />
    <div v-else>
      <div v-if="$store.state.filteredOffers.length > 0">
        <JobOffer 
          v-for="jobOffer in $store.state.filteredOffers" :key="jobOffer.id" :info="jobOffer" />
      </div>
      <NoJobOffersMsg v-else />
    </div>
  </div>
</template>

<script>
import JobOffer from './JobOffer.vue';
import NoJobOffersMsg from './NoJobOffersMsg.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import { mapActions } from 'vuex';
export default {
  components: { JobOffer, NoJobOffersMsg, LoadingSpinner },
  methods: {
    ...mapActions(['getAvailableJobOffers']),
  },
  mounted() {
    this.getAvailableJobOffers();
  }
}
</script>

<style>

</style>