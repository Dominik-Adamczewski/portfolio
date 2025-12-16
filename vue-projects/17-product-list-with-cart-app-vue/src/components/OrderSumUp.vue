<template>
  <div class="bg-proj-17-rose-50 px-4 pt-2 pb-6">
    <CartProduct 
      v-for="cartProduct in cartProducts"
      :key="cartProduct.shortName"
      :product-obj="cartProduct"
      :isRemovable="false"
      :total-price-on-the-right="true"
      :img="cartProduct.img"
    />
    <div class="mt-6 flex items-center justify-between">
      Order Total
      <span class="text-2xl font-bold">${{ productsStore.getFinalOrderPrice.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore';
import CartProduct from './CartProduct.vue';
export default {
  components: { CartProduct }, 
  props: {
    cartProducts: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      productsStore: useProductsStore(),
    }
  },
}
</script>

<style>

</style>