<template>
  <div class="mt-6">
    <label class="block">{{ label }}</label>
    <div class="block lg:flex lg:items-center lg:justify-between">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="my-2 p-4 bg-white rounded-lg w-full cursor-pointer border border-proj-15-green-600 border-solid hover:bg-proj-15-green-400 flex items-center has-checked:bg-proj-15-green-200"
        :class="{ 'mr-4': index === 0 }"
      >
        <input class="peer hidden" type="radio" :value="option" :checked="modelValue === option" name="query-type" @change="updateValue(option)" />
        <span
          class="ml-2 flex items-center before:content-[''] before:flex before:w-5 before:h-5 before:border-2 before:border-slate-400 before:mr-2 before:rounded-full peer-checked:before:border-proj-15-green-600 peer-checked:before:shadow-[inset_0_0_0_3px_white] peer-checked:before:bg-proj-15-green-600"
        >
          {{ option }}
        </span>
      </label>
    </div>
    <span v-if="errors && errors.length > 0" class="text-error italic text-sm">
      {{ errors[0] }}
    </span>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    errors: {
      type: Array,
      required: false,
      default: [],
    },
    modelValue: {
      type: String,
      required: false,
    }
  },
  computed: {
    isMissingField() {
      if (this.missingFields.length) {
        return this.missingFields.includes(this.label);
      }
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>