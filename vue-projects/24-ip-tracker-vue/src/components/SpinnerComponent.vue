<template>
  <img src="/images/icon-spinner.svg" alt="Spinner loading icon">
</template>
<script setup>

</script>

<style scoped>
img {
  animation: spin 1s linear infinite;
  display: block;
  margin: 0 auto;
  width: 48px;
  height: 48px;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
