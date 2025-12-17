<template>
  <dialog ref="dialog" @click="closeModal()" :class="{'test': isModalXD}">
    <div class="fixed md:top-20 bottom-0 left-0 w-full flex items-center justify-center z-20">
      <div class="relative bg-white w-full md:max-w-lg lg:max-w-xl min-h-96 rounded-md p-8" @click.stop>
        <h2 class="text-2xl font-semibold mb-4">Filter job offers</h2>
        <span class="material-symbols-outlined absolute top-4 right-4 cursor-pointer" @click="closeModal()">close</span>
        <div>
          <FilterCheckboxesSection name="Languages" :filters="allAvailableLanguagesForFiltering" />
          <FilterCheckboxesSection name="Tools" :filters="allAvailableToolsForFiltering" />
          <FilterCheckboxesSection name="Seniority Levels" :filters="allAvailableSeniorityLevelsForFiltering" />
        </div>
        <div class="flex items-center justify-between mt-8">
          <BaseButton @click="clearAllModalFilters">Clear</BaseButton>
          <BaseButton type="primary" @click="filterJobOffersFromModal">Show results</BaseButton>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
import FilterCheckboxesSection from './FilterCheckboxesSection.vue';
import BaseButton from './BaseButton.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { FilterCheckboxesSection, BaseButton },
  methods: {
    ...mapActions(['applyFiltersFromModal', 'clearAllModalFilters']),
    showModal() {
      this.$refs.dialog.showModal();
      this.$emit('modal-opened')
    },
    closeModal() {
      this.$refs.dialog.close();
      this.$emit('modal-closed');
    },
    filterJobOffersFromModal() {
      this.applyFiltersFromModal();
      this.closeModal();
    },
  },
    computed: {
    ...mapGetters(['allAvailableLanguagesForFiltering', 'allAvailableToolsForFiltering', 'allAvailableSeniorityLevelsForFiltering']),
  },
}
</script>

<style>
</style>