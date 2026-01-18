<template>
  <div class="relative">
    <!-- Overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 z-10" @click.self="productsStore.startNewOrder()"></div>

    <!-- Modal -->
    <div class="fixed md:top-20 bottom-0 left-0 w-full flex items-center justify-center z-20">
      <div class="relative bg-white w-full max-w-lg lg:max-w-xl max-h-[80vh] rounded-xl overflow-y-auto">
        <div class="py-8 px-6 flex flex-col justify-between">
          <div>
            <img src="/images/icon-order-confirmed.svg" alt="Check icon" class="mb-6 w-10 h-10">
            <h1 class="text-3xl font-bold">Order Confirmed</h1>
            <div class="text-proj-17-rose-400 mt-2 mb-6">We hope you enjoy your food!</div>
            <div>
              <OrderSumUp :cart-products="productsStore.cartProducts" />
            </div>
          </div>
          <div class="my-6 flex items-center justify-center rounded-xl">
            <BaseButton text="Start New Order" @click="productsStore.startNewOrder()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";
import OrderSumUp from './OrderSumUp.vue';
import BaseButton from "./BaseButton.vue";
export default {
  components: { OrderSumUp, BaseButton },
  data() {
    return {
      productsStore: useProductsStore(),
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  },
  unmounted() {
    document.body.style.overflow = '';
    document.body.style.height = '';
  }
}
</script>

<style>

</style>