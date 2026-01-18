<template>
  <div>
    <slot></slot>
    <div class="flex flex-wrap items-center justify-around">
      <TipPercentageItemFixed 
        :percentageValue="percentage" 
        v-for="percentage in fixedTipPercentages" 
        :key="percentage" 
        class="mt-4"
        @update:selectedOption="updateSelected"
        :isSelected="selectedOption === percentage"
      />
      <TipPercentageItemCustom @click="resetSelectedOption" @update:modelValue="updateSelected" ref="customPercentageInput" />
    </div>
    <ErrorMsg v-if="errors?.length">
      {{ errors[0] }}
    </ErrorMsg>
  </div>
</template>

<script>
import TipPercentageItemFixed from './TipPercentageItemFixed.vue';
import TipPercentageItemCustom from './TipPercentageItemCustom.vue';
import ErrorMsg from './ErrorMsg.vue';
export default {
  components: { TipPercentageItemFixed, TipPercentageItemCustom, ErrorMsg },
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    errors: {
      type: Array,
      required: false,
    }
  },
  data() {
    return {
      fixedTipPercentages: [5, 10, 15, 25, 50],
      selectedOption: this.modelValue || null,
    }
  },
  methods: {
    updateSelected(value) {
      this.selectedOption = value;
      this.$emit('update:modelValue', value);
    },
    resetPercentage() {
      this.selectedOption = null;
      this.$refs.customPercentageInput.resetInput();
      this.$emit('update:selectedOption', null); 
    }
  }
}
</script>

<style>

</style>