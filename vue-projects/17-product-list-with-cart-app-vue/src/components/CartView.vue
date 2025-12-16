<template>
  <div class="bg-white rounded-xl p-6 relative w-full">
    <h2 class="font-bold text-proj-17-red text-xl">
      {{ productsTotal ? `Your cart (${productsTotal})` : 'Your cart(0)' }}
    </h2>
    <div v-if="!productsTotal" class="flex flex-col items-center justify-center py-10 min-h-60"> 
      <img src="/images/illustration-empty-cart.svg" alt="">
      <span class="font-semibold text-proj-17-rose-500 mt-4">Your added items will appear here</span>
    </div>
    <div v-else>
      <TransitionGroup name="list" tag="div" appear>
        <CartProduct v-for="cartProduct in productsStore.cartProducts" :key="cartProduct.id" :productObj="cartProduct"/>
      </TransitionGroup>
      <div class="my-6 flex items-center justify-between">
        Order Total
        <span class="text-2xl font-bold">${{ productsStore.getFinalOrderPrice.toFixed(2) }}</span>
      </div>
      <div class="flex items-center justify-center p-4 bg-proj-17-rose-100 rounded-xl">
        <img src="/images/icon-carbon-neutral.svg" alt="Carbon neutral icon" class="mr-1 mb-1 w-5 h-5">
        <span>This is a <span class="font-semibold"> carbon-neutral </span>delivery</span>
      </div>
      <div class="my-6 flex items-center justify-center rounded-xl">
        <BaseButton text="Confirm Order" @click="productsStore.confirmOrder()" />
      </div>
    </div>
    <OrderConfirmationModal v-if="productsStore.isOrderConfirmed" />
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";
import CartProduct from './CartProduct.vue';
import BaseButton from "./BaseButton.vue";
import OrderConfirmationModal from "./OrderConfirmationModal.vue";
export default {
  components: { CartProduct, BaseButton, OrderConfirmationModal },
  data() {
    return {
      productsStore: useProductsStore(),
    }
  },
  computed: {
    productsTotal() {
      return this.productsStore.getTotalNumberOfProductsInCart;
    }
  }
}
</script>

<style>
  .list-move {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .list-enter-active,
  .list-appear-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .list-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .list-enter-from,
  .list-appear-from {
    opacity: 0;
    transform: translateX(30px);
  }

  .list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
</style>