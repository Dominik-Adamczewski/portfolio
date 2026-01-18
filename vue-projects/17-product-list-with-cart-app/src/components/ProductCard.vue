<template>
  <div class="my-4 relative rounded-xl overflow-hidden">
    <img 
      class="w-full rounded-xl"
      :class="{ 'border-2': isSelected, 'border-proj-17-red': isSelected }"
      :srcset="`${img.tablet} 1023w, ${img.desktop} 1024w`"
      sizes="(max-width: 1023px) 100vw, 
            1024px"
      :src="img.tablet"
      alt="Product Image"
    />
    <div class="text-gray-400 mt-6">{{ category }}</div>
    <div class="text-proj-17-rose-500 font-bold">{{ name }}</div>
    <span class="text-proj-17-red font-bold">{{ price.toFixed(2) }}</span>
    <AddToCartBtn class="absolute bottom-20 left-1/2 -translate-x-1/2" @update-amount="updateCartState" :is-active="isSelected" />
  </div>

</template>

<script>
import AddToCartBtn from './AddToCartBtn.vue';
import { useProductsStore } from "../stores/ProductsStore";

export default {
  components: { AddToCartBtn },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      productsStore: useProductsStore(),
      productAmount: null,
    }
  },
  methods: {
    updateCartState(amount) {
      this.productAmount = amount;
      const dataObj = {
        id: this.id,
        amount: amount,
        price: this.price,
        longName: this.name,
        img: this.img,
      };
      amount ? this.productsStore.addProductToCart(dataObj) : this.productsStore.removeProductFromCart(dataObj);
    },
  },
  computed: {
    isSelected() {
      return this.productsStore.isProductInTheCart(this.id);
    }
  },
}
</script>

<style>

</style>