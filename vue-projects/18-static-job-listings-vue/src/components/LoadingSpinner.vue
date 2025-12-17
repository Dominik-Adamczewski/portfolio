<template>
  <div class="flex items-center justify-center text-proj-18-desaturated-dark-cyan">
    <span class="material-symbols-outlined mr-2 text-2xl animate-spin	">
      progress_activity
    </span>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    }
  },
}
</script>