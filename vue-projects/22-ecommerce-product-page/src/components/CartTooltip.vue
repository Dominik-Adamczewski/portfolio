<template>
  <div 
    class="z-10 bg-white w-[95%] max-w-sm rounded-md flex flex-col lg:shadow-2xl"
    :class="{ 'min-h-80': store.cartItems.length === 0 }"
  >
    <div class="border-b">
      <div class="flex items-center justify-between p-5">
        <span>Cart</span>
        <img src="/images/icon-close.svg" alt="Close icon" class="cursor-pointer" @click="$emit('close')">
      </div>
    </div>
    <div
      v-if="!store.cartItems.length"
      class="flex-1 flex items-center justify-center text-proj-22-dark-grayish-blue font-semibold text-lg"
    >
      Your cart is empty
    </div>
    <div v-else>
      <CartItem 
        v-for="cartItem in store.cartItems" 
        :key="cartItem.id" 
        :product-id="cartItem.id"
        :image-url="cartItem.productThumbnailImage"
        :product-amount="cartItem.productAmount"
        :product-price="cartItem.productPrice"
        :product-name="cartItem.productName"
      />
    </div>
  </div>
</template>

<script setup>
import CartItem from './CartItem.vue';
import { eCommerceStore } from '../stores/eCommerceStore';

const store = eCommerceStore();
</script>

<style>

</style>
