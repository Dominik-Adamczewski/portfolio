<template>
  <button
    class="rounded-md h-10 cursor-pointer"
    :class="buttonTypeClasses[props.type]"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: () => '',
    required: true
  },
  type: {
    type: String,
    default: 'secondary',
    validator (value, props) {
      return ['submit', 'primary', 'secondary'].includes(value);
    }
  }
});

const buttonTypeClasses = {
  submit: '',
  primary: 'primary',
  secondary: 'secondary'
};

</script>
<style scoped>
  button:focus-visible {
    outline: solid black;
  }
  button.primary {
    border: 1px solid hsl(213, 96%, 18%);
    background-color: hsl(213, 96%, 18%);
    color: white;
    padding: 0px 16px;
  }
  button.primary:hover {
    border: 1px solid hsl(213, 96%, 28%);
    background-color: hsl(213, 96%, 28%);
  }
  button.secondary {
    color: hsl(231, 11%, 63%);
  }
  button.secondary:hover {
    color: hsl(213, 96%, 18%);
  }
</style>
