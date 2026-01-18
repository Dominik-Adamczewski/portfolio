<template>
  <div 
    class="w-full mt-4 rounded-md py-2 flex items-center justify-around flex-wrap"
    :class="{ 
      'bg-proj-20-dark-theme-very-dark-grayish-blue border border-proj-20-dark-theme-very-dark-grayish-blue': isDarkThemeEnabled, 
      'bg-white border': !isDarkThemeEnabled 
    }"
  >
    <FilterOption 
      v-for="(filterOption, index) in filterOptions" 
      :key="index"
      :id="filterOption.id"
      :text="filterOption.text"
      :is-chosen="filterOption.id === selectedFilter"
      :is-dark-theme-enabled="isDarkThemeEnabled"
      @change-filter="changeFilter"
    />
  </div>
  <div class="text-center mt-6 text-gray-500 pb-6">Drag and drop to reorder list</div>
</template>

<script>
  import FilterOption from './FilterOption.vue';
  export default {
    components: { FilterOption },
    props: {
      toDoList: {
        type: Array,
        required: true,
      },
      isDarkThemeEnabled: {
        type: Boolean,
        required: true,
      }
    },
    data() {
      return {
        filterOptions: [
          { id: 'all', text: 'All' },
          { id: 'active', text: 'Active' },
          { id: 'completed', text: 'Completed'},
        ],
        selectedFilter: 'all',
      }
    },
    methods: {
      changeFilter(filterId) {
        this.$emit('change-filter');
        this.selectedFilter = filterId;
        this.$store.state.currentFilter = filterId;
      },
      setDefaultFilter() {
        this.$emit('change-filter');
        this.selectedFilter = 'all';
        this.$store.state.currentFilter = 'all';
      }
    },
    mounted() {
      this.setDefaultFilter();
    }
  }
</script>

<style></style>
