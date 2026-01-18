<template>
  <label>
    {{ label }}
    <textarea
      :rows="rows"
      class="w-full p-2 rounded-lg resize-none border border-solid border-proj-15-green-600 focus:outline-proj-15-green-700 focus:outline-1"
      :placeholder="placeholder"
      @focus="$emit('focus')"
      :class="{ 'error-active': errors && errors.length > 0 }"
      :value="modelValue"
      @input="handleInput"
    ></textarea>
  </label>
  <span v-if="errors && errors.length > 0" class="text-error italic text-sm">
      {{ errors[0] }}
  </span>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    errors: {
      type: Array,
      required: false,
      default: [],
    },
    modelValue: {
      type: String,
      required: true,
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  }  
};
</script>

<style>
.error-active {
  border: 1px solid red;
}
</style>