<template>
  <div :class="{'scroll-block': isScrollingBlocked}">
    <header class="mb-10">
    <div 
      class="header-background
        min-h-40"
    >
    </div>
    <div class="px-6">
      <FiltersBar @modal-opened="isScrollingBlocked = true" @modal-closed="isScrollingBlocked = false" />
    </div>
    </header>
    <JobList />
  </div>
</template>

<script>
import JobList from './components/JobList.vue';
import FiltersBar from './components/FiltersBar.vue';

export default {
  name: "App",
  components: { JobList, FiltersBar },
  data() {
    return {
      isScrollingBlocked: false,
    }
  }
};
</script>

<style>
  .scroll-block {
    overflow: hidden;
    height: 100vh;
  }

  .header-background {
    background: url('../public//images/bg-header-mobile.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: 1024px) {
    .header-background {
      background-image: url('../public/images/bg-header-desktop.svg');
    }
  }
</style>
