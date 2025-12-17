<template>
  <div class="mt-4">
    <h3 class="font-medium text-xl mb-3">{{ name }}</h3>
    <div class="flex items-center flex-wrap">
      <div v-for="(filter, index) in filters" :key="index" class="mr-4 my-1 flex items-center">
        <label class="relative flex items-center select-none cursor-pointer hover:text-gray-500">
          <input 
            type="checkbox" 
            :name="filter" 
            :checked="$store.state.currentModalFilters.includes(filter)"
            class="peer appearance-none border border-gray-600 rounded bg-white cursor-pointer checked:bg-proj-18-desaturated-dark-cyan w-5 h-5 checked:border-proj-18-desaturated-dark-cyan"
            @change="$store.commit('addModalFilter', filter)"
          >
          <span 
            class="material-symbols-outlined text-white absolute flex items-center justify-center opacity-0 peer-checked:opacity-100 w-5 h-5">
            check
          </span>
          <span class="ml-2 mt-0.5">{{ filter }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
  .material-symbols-outlined {
    font-size: 21px;
  }
</style>