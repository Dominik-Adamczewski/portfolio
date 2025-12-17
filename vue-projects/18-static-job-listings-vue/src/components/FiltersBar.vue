<template>
  <div 
    class="lg:max-w-7xl lg:mx-auto lg:flex lg:items-center mt-4 lg:min-h-20 border-2 bg-white rounded-md px-4"
    :class="!$store.state.currentFilters.length > 0 ? 'lg:justify-end' : 'lg:justify-between'"
  >
    <div class="lg:w-1/2 flex items-center flex-wrap mb-10 mt-4 lg:m-0" v-if="$store.state.currentFilters.length > 0">
      <JobTypeChip v-for="(filter, index) in $store.state.currentFilters" :key="index" :label="filter" :isRemovable="true" class="mr-4 mt-2" /> 
    </div>
    <div class="lg:flex lg:items-center lg:justify-end">
      <BaseButton class="mr-2 my-4 lg:my-0" @click="openFiltersModal">
        Filters
      </BaseButton>
      <BaseButton class="mb-4 lg:mb-0" @click="handleClearAllFilters">
        Clear
      </BaseButton>
    </div>
  </div>
  <FiltersModal v-if="isFiltersModalVisible" ref="filtersModal" @modal-opened="$emit('modal-opened')" @modal-closed="$emit('modal-closed')" />
</template>

<script>
import JobTypeChip from './JobTypeChip.vue';
import BaseButton from './BaseButton.vue';
import FiltersModal from './FiltersModal.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { JobTypeChip, BaseButton, FiltersModal },
  data() {
    return {
      isFiltersModalVisible: false,
    }
  },
  methods: {
    ...mapActions(['clearAllFilters']),
    handleClearAllFilters() {
      this.clearAllFilters();
    },
    openFiltersModal() {
      this.isFiltersModalVisible = true;
      // wait for DOM update
      this.$nextTick(() => {
        this.$refs.filtersModal.showModal();
      });
    }
  },
  computed: {
    ...mapGetters(['allAvailableLanguagesForFiltering', 'allAvailableToolsForFiltering']),
  },
}
</script>

<style>

</style>