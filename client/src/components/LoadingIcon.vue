<template>
  <i class="fa-solid fa-arrows-rotate loading-icon text-5xl"></i>
</template>
<style>
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .loading-icon {
    animation: spin 1s linear infinite;
  }
</style>