<template>
  <label class="mb-4 block">
    <div class="font-bold">{{ label }}</div>
    <div class="relative">
      <input 
        :type="inputType" 
        :placeholder="placeholder" 
        class="w-full h-10 text-right px-2 rounded-md bg-proj-16-very-light-grayish-cyan focus:outline-proj-16-strong-cyan"
        :value="modelValue"
        @input="updateInputValue"
      >
      <img :src="iconPath" class="w-5 h-5 absolute top-2/4 left-2 -translate-y-2/4	">
    </div>
    <ErrorMsg v-if="errors?.length">
      {{ errors[0] }}
    </ErrorMsg>
  </label>
</template>

<script>
import ErrorMsg from './ErrorMsg.vue';
export default {
  components: {
    ErrorMsg
  },  
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
      default: 'text',
    },
    iconPath: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      required: false,
    },
    modelValue: {
      type: String,
    }
  },
  methods: {
    updateInputValue(e) {
      const inputValue = this.inputType === 'number' && e.target.value !== '' ? Number(e.target.value) : e.target.value;
      this.$emit('update:modelValue', inputValue);
    }
  },
}
</script>

<style>

</style>