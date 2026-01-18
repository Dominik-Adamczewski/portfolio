<template>
  <button class="p-4 bg-proj-17-red hover:bg-proj-17-red-700 text-white w-full rounded-xl font-semibold cursor-pointer">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>

</style>