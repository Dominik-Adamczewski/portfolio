<template>
  <button 
    class="text-center py-2 px-4 font-semibold cursor-pointer border rounded-md"
    :class="{ 
      'bg-proj-18-desaturated-dark-cyan text-white hover:no-underline hover:bg-proj-18-dark-grayish-cyan': type === 'primary',
      'bg-none text-gray-500 hover:underline': type === 'secondary'
    }"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'secondary',
      required: true,
      availableTypes: ['primary', 'secondary']
    },
  },
}
</script>