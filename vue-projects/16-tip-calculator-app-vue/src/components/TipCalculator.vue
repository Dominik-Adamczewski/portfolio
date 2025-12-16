<template>
  <div class="p-6 lg:flex lg:justify-between">
    <div class="lg:w-6/12">
      <TextInput
        inputType="number" 
        placeholder="0" 
        label="Bill" 
        :iconPath="iconPaths.dollarIcon" 
        v-model="values.bill" 
        :errors="validateField('bill')"
        @update:modelValue="setDirty()"
      />
      <TipPercentageGrid 
        v-model="values.percentage"
        ref="tipPercentageGrid"
        :errors="validateField('percentage')"
        @update:modelValue="setDirty()"
        class="mb-4"
      >
        <span>Select Tip %</span>
      </TipPercentageGrid>
      <TextInput
        inputType="number" 
        placeholder="0" 
        label="Number of people" 
        :iconPath="iconPaths.peopleIcon" 
        v-model="values.people" 
        :errors="validateField('people')"  
        @update:modelValue="setDirty()"
      />
    </div>
    <div class="lg:w-5/12">
      <SummaryBox :tipAmount="calculatedValues.tipAmountPerPerson" :totalAmount="calculatedValues.totalAmountPerPerson" @reset="resetCalculator" />
    </div>
  </div>
</template>

<script>
import TipPercentageGrid from './TipPercentageGrid.vue';
import TextInput from './TextInput.vue';
import SummaryBox from './SummaryBox.vue';
import dollarIcon from '../assets/images/icon-dollar.svg';
import personIcon from '../assets/images/icon-person.svg';

export default {
  components: {
    TextInput,
    TipPercentageGrid,
    SummaryBox
  },
  data() {
    return {
      values: {
        bill: null,
        people: null,
        percentage: null,
      },
      iconPaths: {
        dollarIcon,
        peopleIcon: personIcon,
      },
      isDirty: false,
      errors: {
        bill: [],
        people: [],
        percentage: [],
      },
      ERROR_MESSAGES: {
        INPUT_EMPTY: "Can't be zero!",
        INVALID_INPUT: "Input must be an integer!",
        PERCENTAGE_EMPTY: "Please, choose a tip percentage!",
      },
    }
  },
  methods: {
    setPercentage(value) {
      this.values.percentage = value;
    },
    setDirty() {
      this.isDirty = true;
    },
    resetCalculator() {
      this.values.bill = null;
      this.values.people = null;
      this.values.percentage = null;
      this.$refs.tipPercentageGrid.resetPercentage();
      this.isDirty = false;
    },
    isInteger(value) {
      const regexPattern = /^\d+$/;
      return regexPattern.test(value);
    },
    validateField(field) {
      if (!this.isDirty) return [];
      
      if (this.values[field] === null || this.values[field] === '') {
        return field === 'percentage' 
          ? [this.ERROR_MESSAGES.PERCENTAGE_EMPTY] 
          : [this.ERROR_MESSAGES.INPUT_EMPTY];
      }

      if (!this.isInteger(this.values[field])) {
        return [this.ERROR_MESSAGES.INVALID_INPUT];
      }
      
      return [];
    },
  },
  computed: {
    calculatedValues() {
      let tipAmountPerPerson = null;
      let totalAmountPerPerson = null;
      if (this.values.bill && this.values.people && this.values.percentage) {
        const tipAmount = this.values.bill * (this.values.percentage / 100);
        tipAmountPerPerson = tipAmount / this.values.people;
        const totalAmount = this.values.bill + tipAmount;
        totalAmountPerPerson = totalAmount / this.values.people;

        return {
          tipAmountPerPerson,
          totalAmountPerPerson
        }
      }

      return {
        tipAmountPerPerson: 0,
        totalAmountPerPerson: 0
      }
    },
  },
}
</script>

<style>

</style>