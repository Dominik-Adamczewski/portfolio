<template>
  <div class="h-10 flex items-center justify-between">
    <div>
      <div class="text-white">{{  label  }}</div>
      <div class="text-gray-400">/ {{ type }}</div>
    </div>
    <div class="text-proj-16-strong-cyan text-3xl">
      {{ value ? value.toFixed(2) :  '0.00' }}$
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: false,
    }
  }
}
</script>

<style>

</style>