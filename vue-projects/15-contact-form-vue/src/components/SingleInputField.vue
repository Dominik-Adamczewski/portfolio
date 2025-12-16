<template>
  <label>{{ label }}</label>
  <input
    :type="inputType"
    class="single-input block w-full h-10 rounded-lg pl-2"
    :class="{ 'error-active': errors && errors.length > 0 }"
    :placeholder="placeholder"
    @focus="$emit('focus')"
    @change="handleTextInput"
    :value="modelValue"
    @input="handleInput"
  />
  <span v-if="errors && errors.length > 0" class="text-error italic text-sm">
    {{ errors[0] }}
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
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
  emits: ['update:modelValue'],
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
};
</script>

<style>
.single-input {
  border: 1px solid hsl(169, 82%, 27%);
}
.single-input:focus {
  outline: 1px solid hsl(169, 83%, 16%);
}
.error-active {
  border: 1px solid red;
}
.error-msg {
  color: red;
  font-style: italic;
  font-size: 14px;
}
</style>