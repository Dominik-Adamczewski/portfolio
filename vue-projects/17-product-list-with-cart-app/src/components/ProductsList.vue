<template>
  <div class="lg:flex lg:flex-wrap lg:gap-4 flex-shrink-0">
    <ProductCard 
      v-for="product in productsData" :key="product.name"
      :id="product.id"
      :category="product.category" 
      :img="product.image" 
      :name="product.name" 
      :price="product.price" 
      class="lg:w-5/12 xl:w-30p" 
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  components: {
    ProductCard,
  },
  props: {
    productsData: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style>

</style>