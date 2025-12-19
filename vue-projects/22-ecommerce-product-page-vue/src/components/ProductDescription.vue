<template>
  <section class="p-4 lg:w-3/6">
    <span class="uppercase text-proj-22-grayish-blue font-semibold">{{ store.products[0].manufacturer }}</span>
    <h1 class="text-3xl font-bold my-2">{{ store.products[0].productName }}</h1>
    <p class="text-proj-22-dark-grayish-blue mt-4">{{ store.products[0].productDescription }}</p>
    <div class="flex lg:block items-center justify-between mt-6">
      <div class="flex items-center lg:mb-3">
        <span class="text-3xl font-semibold mr-6" v-if="store.hasDiscount">${{ store.getProductsDiscountedPrice }}</span>
        <span v-if="store.hasDiscount" class="bg-black text-white p-2 rounded-md font-semibold text-xs">{{ store.products[0].discountLabel }}</span>
      </div>
      <span 
        class="text-xl text-proj-22-dark-grayish-blue font-semibold"
        :class="{ 'line-through': store.hasDiscount }"
      >
        {{ store.getProductPriceFormatted }}
      </span>
    </div>
    <div class="mt-2 text-proj-22-dark-grayish-blue">Currently in stock: {{ store.getInStockAmount }}</div>
    <div v-if="store.products[0].inStock" class="lg:flex lg:items-center lg:justify-between">
      <AmountInput class="lg:w-2/5" v-model="productAmount" />
      <BaseButton 
        text="Add to cart" 
        icon-path="/images/icon-cart--black.svg" 
        class="w-full lg:w-3/6 mt-4 h-14" 
        @click="handleAddingProductToCart"
        :is-disabled="productAmount === 0"
      />
    </div>
    <div v-else class="mt-2 text-center text-xl font-semibold sold-out-blink">SOLD OUT!</div>
  </section>
</template>

<script setup>
import AmountInput from './AmountInput.vue';
import BaseButton from './BaseButton.vue';
import { eCommerceStore } from '../stores/eCommerceStore';
import { ref } from 'vue';

const store = eCommerceStore();

const productAmount = ref(0);

function handleAddingProductToCart() {
  if (productAmount.value <= 0) {
    return;
  }
  const product = {
    id: store.products[0].id,
    productName: store.products[0].productName,
    productPrice: store.getProductsDiscountedPrice,
    productAmount: productAmount.value,
    productThumbnailImage: store.products[0].productThumbnailImages[0]
  };

  store.addItemToCart(product);
  store.updateAmountOfProductInStock(store.products[0].id, store.products[0].inStock - productAmount.value);
  productAmount.value = 0;
}
</script>

<style scoped>
  @keyframes blinkColor {
    0%, 100% {
      color: hsl(16, 100%, 62%); 
    }
    50% {
      color: black;
    }
  }

  .sold-out-blink {
    animation: blinkColor 1s infinite ease-in-out;
  }
</style>
