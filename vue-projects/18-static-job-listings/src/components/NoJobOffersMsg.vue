<template>
  <div class="flex items-center justify-center">
      <div class="flex items-center flex-col">
        <span class="material-symbols-outlined text-8xl text-gray-500">
        cancel
        </span>
        <span class="mt-4 text-xl">
          We're sorry but there are no job offers matching your current filters. Please, change your filter rules, or 
          <button 
            class="hover:underline cursor-pointer font-semibold text-proj-18-desaturated-dark-cyan hover:text-proj-18-dark-grayish-cyan" 
            @click="clearAllFilters"
            >
              clear all filters
        </button>
           to start over.
        </span>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['clearAllFilters']),
  }
}
</script>

<style>

</style>