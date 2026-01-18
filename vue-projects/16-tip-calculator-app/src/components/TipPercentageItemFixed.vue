<template>
  <div 
    class="h-10 w-5/12 flex items-center justify-center rounded-md cursor-pointer" 
    :class="{ 'bg-proj-16-strong-cyan': isSelected, 'bg-proj-16-very-dark-cyan hover:bg-proj-16-grayish-cyan': !isSelected }" 
    @click="selectOption"
  >
    <input type="radio" :id="`tip-${percentageValue}`" :value="percentageValue" name="tip_percentage" class="hidden">
    <label :for="`tip-${percentageValue}`" class="text-white font-bold text-xl cursor-pointer">
      {{  percentageValue  }}%
    </label>
  </div>
</template>

<script>
export default {
  props: {
    percentageValue: {
      type: String,
      required: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    selectOption() {
      this.$emit('update:selectedOption', this.percentageValue);
    }
  }
}
</script>

<style>

</style>