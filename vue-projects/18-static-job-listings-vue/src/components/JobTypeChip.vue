<template>
  <div class="flex items-stretch">
    <button 
      class="
        bg-proj-18-light-grayish-cyan-filter 
        text-proj-18-desaturated-dark-cyan 
        font-semibold 
        py-1 
        px-2 
        rounded-l-md 
        cursor-pointer 
        hover:bg-proj-18-very-dark-grayish-cyan
        hover:text-white"
      :class="{ 'rounded-md': !isRemovable }"
      @click="addFilter"
    >
      {{ label }}
  </button>
    <button 
      v-if="isRemovable" 
      class="bg-proj-18-desaturated-dark-cyan flex items-center px-2 rounded-r-md cursor-pointer hover:bg-proj-18-very-dark-grayish-cyan" 
      @click="removeFilter"
    >
      <img class="h-4 w-4" src="/images/icon-remove.svg" alt="Remove icon">
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    isRemovable: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    ...mapActions(['addFilterFromChip', 'clearFilterFromChip', 'filterOutJobOffers', 'removeFilteredOffers']),
    
    addFilter() {
      this.addFilterFromChip(this.label);
      this.filterOutJobOffers();
    },
    removeFilter() {
      this.clearFilterFromChip(this.label);
      this.filterOutJobOffers();
    }
  },
}
</script>

<style>

</style>