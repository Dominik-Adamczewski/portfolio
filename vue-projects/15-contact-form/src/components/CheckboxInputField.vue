<template>
  <label class="flex items-center">
    <input type="checkbox" :value="value" :checked="modelValue" @change="updateValue" class="consent-checkbox cursor-pointer" />
    <span class="ml-2 cursor-pointer">{{ label }}</span>
    <span class="text-proj-15-green-600">*</span>
  </label>
  <span v-if="errors && errors.length > 0" class="text-error italic text-sm">
    {{ errors[0] }}
  </span>
</template>

<script>
export default {
  emits: ['update:modelValue', 'change'],
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      required: false,
      default: [],
    },
    modelValue: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.checked);
      this.$emit('change');
    }
  }
}
</script>

<style>
.consent-checkbox {
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 2px;
  border: 1px solid grey;
}

.consent-checkbox:checked {
  background-color: hsl(169, 82%, 27%);
  border-color: hsl(169, 82%, 27%);
}

.consent-checkbox::before {
  content: '';
  width: 16px;
  height: 16px;
  background-color: white;
  clip-path: polygon(20% 55%, 45% 75%, 80% 25%, 85% 30%, 45% 80%, 15% 55%);
  transform: scale(0);
}

.consent-checkbox:checked::before {
  transform: scale(1);
}
</style>