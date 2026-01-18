<template>
  <button 
    class="border border-black w-44 lg:w-36 h-12 py-2 font-semibold rounded-3xl flex items-center justify-center cursor-pointer" 
    :class="{ 'bg-proj-17-red': isActive, 'bg-white hover:bg-slate-200': !isActive, 'border-0': isActive }"
    @click="handleClick">
    <div class="flex items-center justify-center" :class="{ 'hidden': isActive }">
      <img src="/images/icon-add-to-cart.svg" alt="Add to cart icon" class="mr-1">
      <span>Add to cart</span>
    </div>
    <div 
      class="h-full w-full flex items-center justify-between"
      :class="{ 'block': isActive, 'hidden': !isActive }"
    >
    <button
      class="w-8 h-14 flex items-center justify-center pl-2 text-white cursor-pointer"
      @click.stop="decrementAmount"
      type="button"
    >
      <img src="/images/icon-decrement-quantity.svg" alt="Minus icon">
    </button>
      <input 
        type="number" 
        v-model="amount" 
        class="h-full w-full bg-proj-17-red text-white rounded-3xl p-0 text-center pointer-events-none"
        readonly
      >
      <button
        class="w-8 h-14 flex items-center justify-center pr-2 text-white cursor-pointer"
        @click.stop="incrementAmount"
        type="button"
      >
        <img src="/images/icon-increment-quantity.svg" alt="Plus icon">
      </button>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  data() {
    return {
      amount: null,
    }
  },
  methods: {
    handleClick() {
      if (!this.isActive) {
        this.activate();
      }
    },
    activate() {
      this.amount = 1;
      this.emitAmount();
    },
    incrementAmount() {
      this.amount += 1;
      this.emitAmount();
    },
    decrementAmount() {
      this.amount -= 1;
      this.emitAmount();
      if (this.amount <= 0) {
        this.amount = null;
      }
    },
    emitAmount() {
      this.$emit('update-amount', this.amount);
    },
  },
}
</script>
