<template>
  <div 
    class="h-10 w-5/12 bg-proj-16-very-dark-cyan flex items-center justify-center rounded-md mt-4 cursor-pointer" 
  >
    <input 
      type="number" 
      id="customTipPercentage" 
      name="custom_tip_percentage" 
      :class="{ 'block': isActive, 'hidden': !isActive, 'border-2': isActive, 'focus:border-proj-16-strong-cyan bg-white': isActive,  }" 
      class="w-full h-full p-2 focus:outline-none focus:ring-0 rounded-md overflow-hidden border-2"
      @click="updateInputValue"
      @blur="updateInputValue"
    >
    <label 
      for="customTipPercentage" 
      class="w-full h-full flex items-center justify-center cursor-pointer text-white font-bold text-xl" 
      :class="{ 'flex': !isActive, 'hidden': isActive }" 
      @click="toggleIsActive"
    >
      Custom
    </label>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleIsActive() {
      this.isActive = !this.isActive;
    },
    updateInputValue(e) {
      this.$emit('update:modelValue', e.target.value);
    },
    resetInput() {
      this.isActive = false;
    }
  }
}
</script>

<style>

</style>