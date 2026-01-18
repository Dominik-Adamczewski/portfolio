<template>
  <span class="dots w-10"></span>
</template>

<script setup>
</script>

<style scoped>
  .dots::after {
    content: "...";
    display: inline-block;
    width: 2ch;
    text-align: left;
    animation: loading 1s infinite;
  }
  @keyframes loading {
      0%, 100% {
          content: "...";
      }
      25% {
          content: ".  ";
      }
      50% {
          content: ".. ";
      }
      75% {
          content: "...";
      }
  }
</style>
