import { defineStore } from 'pinia';

export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    products: [],
    cartProducts: [],
    isOrderConfirmed: false,
  }),
  getters: {
    getTotalNumberOfProductsInCart() {
      return this.cartProducts.length;
    },
    isProductInTheCart: (state) => (productId) => {
      return state.cartProducts.some(product => product.id === productId);
    },
    getFinalOrderPrice() {
      return this.cartProducts.reduce((totalPrice, cartProduct) => {
        return totalPrice + cartProduct.amount * cartProduct.price;
      }, 0);
    }
  },
  actions: {
    async getPossibleProducts() {
      const data = await fetch('/data/data.json');
      const json = await data.json();
      this.products = json;
    },
    addProductToCart(productData) {
      const existingProduct = this.cartProducts.find(product => {
        return product.id === productData.id;
      });

      if (existingProduct) {
        existingProduct.amount = productData.amount;
        return;
      }
      this.cartProducts.push(productData);
    },
    removeProductFromCart(productData) {
      const existingProduct = this.cartProducts.find(product => {
        return product.id === productData.id;
      });

      const existingProductIndex = this.cartProducts.indexOf(existingProduct);

      if (!productData.amount && this.cartProducts.length === 1) {
        this.cartProducts = [];
        return;
      }
      this.cartProducts.splice(existingProductIndex, 1);
    },
    confirmOrder() {
      this.isOrderConfirmed = true;
    },
    startNewOrder() {
      this.cartProducts = [];
      this.isOrderConfirmed = false;
    }
  }
})