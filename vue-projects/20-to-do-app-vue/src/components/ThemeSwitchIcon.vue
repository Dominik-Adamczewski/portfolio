<template>
  <img 
    :src="isDarkTheme ? darkThemeData.url : lightThemeData.url" 
    :alt="isDarkTheme ? darkThemeData.altAttr : lightThemeData.altAttr" 
    class="cursor-pointer hover:opacity-50 transition-opacity duration-300"
    @click="toggleDarkThemeMode"
  />
</template>

<script>
import moonIcon from '../../public/images/icon-moon.svg'
import sunIcon from '../../public/images/icon-sun.svg'

export default {
  data() {
    return {
      lightThemeData: { url: moonIcon, altAttr: 'Moon icon' },
      darkThemeData: { url: sunIcon, altAttr: 'Sun icon' },
    }
  },
  props: {
    isDarkTheme: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    toggleDarkThemeMode() {
      this.$store.commit('toggleDarkTheme');
    }
  }
}
</script>

<style></style>
