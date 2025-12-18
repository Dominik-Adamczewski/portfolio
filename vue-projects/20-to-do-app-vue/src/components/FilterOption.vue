<template>
    <button 
      class="cursor-pointer font-semibold text-sm px-4 py-1" 
      :class="{ 
        'text-proj-20-blue': isChosen, 
        'text-proj-20-dark-theme-dark-grayish-blue': !isChosen,
        'hover:text-proj-20-dark-blue': !isDarkThemeEnabled && !isChosen, 
        'hover:text-white': isDarkThemeEnabled
      }"
      @click="changeFilter"
    > 
      {{ text }}
    </button>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      isChosen: {
        type: Boolean,
        required: true,
      },
      isDarkThemeEnabled: {
        type: Boolean,
        required: true,
      }
    },
    methods: {
      changeFilter() {
        this.$emit('change-filter', this.id);
      }
    }
  }
</script>

<style></style>
