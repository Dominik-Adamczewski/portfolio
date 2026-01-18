<template>
  <div v-if="productObj.amount" class="flex items-center justify-between border-b border-gray-300 pb-2 mt-4">
    <div class="flex flex-wrap justify-start">
      <div v-if="img" class="w-14 h-14">
        <img :src="img.thumbnail" class="w-full h-full">
      </div>
      <div class="flex flex-col items-start ml-4">
        <h4 class="font-semibold text-sm w-full">{{ productObj.longName }}</h4>
        <div class="flex items-center justify-center mt-2">
          <span class="text-proj-17-red font-semibold mr-4">{{ productObj.amount }}x</span>
          <span class="text-gray-400 mr-2"> @ ${{ productObj.price.toFixed(2) }}</span>
          <span v-if="!totalPriceOnTheRight" class="font-semibold text-proj-17-rose-400">${{ getTotalAmountForProduct }}</span>
        </div>
      </div>
    </div>
    <div 
      v-if="isRemovable"
      class="w-5 h-5 p-1 rounded-full border border-proj-17-rose-400 flex items-center justify-center lg:cursor-pointer"
      @click="productsStore.removeProductFromCart(productObj)"
    >
      <img src="/images/icon-remove-item.svg" alt="Remove icon" class="w-full h-full">
    </div>
    <div v-if="totalPriceOnTheRight" class="font-semibold">
      ${{ getTotalAmountForProduct }}
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";
export default {
  data() {
    return {
      productsStore: useProductsStore(),
    }
  },
  props: {
    productObj: {
      type: Object,
      required: true,
    },
    isRemovable: {
      type: Boolean,
      default: true,
    },
    totalPriceOnTheRight: {
      type: Boolean,
      default: false,
    },
    img: {
      type: Object,
    }
  },
  computed: {
    getTotalAmountForProduct() {
      return (this.productObj.amount * this.productObj.price).toFixed(2);
    }
  }
}
</script>

<style>

</style>