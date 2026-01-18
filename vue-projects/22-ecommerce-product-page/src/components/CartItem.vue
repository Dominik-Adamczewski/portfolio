<template>
  <div class="p-5 flex items-center justify-between">
    <img :src="props.imageUrl" alt="Cart item image" class="w-12 h-12 rounded-md">
    <div class="text-proj-22-dark-grayish-blue">
      <div>{{ props.productName }}</div>
      <div class="flex items-center">
        <div class="mr-2">${{ props.productPrice }} x {{ props.productAmount }}</div>
        <span class="font-semibold text-black">${{ totalPrice() }}</span>
      </div>
    </div>
    <img src="/images/icon-delete.svg" alt="Trash icon" class="cursor-pointer" @click="handleRemovingProductFromCart">
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { eCommerceStore } from '../stores/eCommerceStore';

const store = eCommerceStore();

const props = defineProps({
  productId: Number,
  imageUrl: String,
  productName: String,
  productAmount: Number,
  productPrice: Number
});

function totalPrice() {
  return Number.parseFloat(props.productPrice * props.productAmount).toFixed(2);
}

function handleRemovingProductFromCart() {
  store.removeItemFromCart(props.productId);
  store.updateAmountOfProductInStock(props.productId, store.products[0].inStock + props.productAmount);
}
</script>

<style>

</style>
