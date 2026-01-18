<template>
  <div class="h-full bg-proj-16-very-dark-cyan min-h-60 rounded-md flex flex-col justify-between">
    <div class="pt-4 px-4">
      <Amount label="Tip Amount" type="person" :value="tipAmount"/>
      <Amount label="Total" type="person" class="mt-8" :value="totalAmount"/>
    </div>
    <div class="text-center px-4 pb-4 font-bold text-proj-16-very-dark-cyan">
      <button class="bg-proj-16-strong-cyan hover:bg-proj-16-grayish-cyan w-full h-10 rounded-md tracking-wider cursor-pointer" @click="reset">RESET</button>
    </div>
  </div>
</template>

<script>
import Amount from './Amount.vue';
export default {
  components: { Amount },
  props: {
    tipAmount: {
      type: Number,
      required: false,
    },
    totalAmount: {
      type: Number,
      required: false,
    }
  },
  methods: {
    reset() {
      this.$emit('reset');
    }
  }
}
</script>

<style>

</style>