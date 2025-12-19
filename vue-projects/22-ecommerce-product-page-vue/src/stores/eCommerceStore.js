import { defineStore } from 'pinia'

export const eCommerceStore = defineStore('eCommerceStore', {
  state: () => {
    return {
      navbarLinks: [
        { text: 'Collections', href: '#' },
        { text: 'Men', href: '#' },
        { text: 'Women', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Contact', href: '#' },
      ],
      products: [
        { 
          id: 1,
          productName: 'Fall Limited Edition Sneakers', 
          manufacturer: 'Sneaker company',
          productDescription: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
          productPrice: 250,
          discount: 0.5,
          discountLabel: '50%',
          inStock: 7,
          productImages: [
            '/images/image-product-1.jpg',
            '/images/image-product-2.jpg',
            '/images/image-product-3.jpg',
            '/images/image-product-4.jpg',
          ],
          productThumbnailImages: [
            '/images/image-product-1-thumbnail.jpg',
            '/images/image-product-2-thumbnail.jpg',
            '/images/image-product-3-thumbnail.jpg',
            '/images/image-product-4-thumbnail.jpg',
          ]
        }
      ],
      currentImageIndex: 0,
      cartItems: [],
    }
  },
  getters: {
    getImagesOfFirstProduct() {
      return this.products[0].productImages;
    },
    currentImg(state) {
      return state.products[0].productImages[state.currentImageIndex] || '';
    },
    getImagesArrayLengthForProduct: (state) => () => {
      return state.products[0].productImages.length;
    },
    getProductPriceFormatted(state) {
      return `$${Number.parseFloat(state.products[0].productPrice).toFixed(2)}`;
    },
    hasDiscount(state) {
      return new Boolean(state.products[0].discount);
    },
    getProductsDiscountedPrice(state) {
      return Number.parseFloat(state.products[0].productPrice * state.products[0].discount).toFixed(2);
    },
    getInStockAmount(state) {
      return state.products[0].inStock;
    }
  },
  actions: {
    showNextImage() {
      if (this.currentImageIndex < this.products[0].productImages.length - 1) {
        this.currentImageIndex += 1;
      }
    },
    showPreviousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex -= 1;
      }
    },
    showParticularImage(id) {
      this.currentImageIndex = id;
    },
    addItemToCart({ id, productName, productPrice, productAmount, productThumbnailImage }) {
      const item = {
        id,
        productName,
        productPrice,
        productAmount,
        productThumbnailImage,
      };
    
      const existingProduct = this.cartItems.find((cartItem) => cartItem.id === item.id);
    
      if (existingProduct) {
        existingProduct.productAmount += item.productAmount;
      } else {
        this.cartItems.push(item);
      }
    
      localStorage.setItem('cartProducts', JSON.stringify(this.cartItems));
    },
    removeItemFromCart(id) {
      const index = this.cartItems.findIndex((element) => element.id === id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
      localStorage.removeItem('cartProducts');
    },
    updateAmountOfProductInStock(id, newAmountInStock) {
      const element = this.products.find((element) => element.id === id);
      const elementIndex = this.products.indexOf(element);

      this.products[elementIndex].inStock = newAmountInStock;
    },
    loadCartStateFromLocalStorage() {
      const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartProducts'));
      this.cartItems = cartFromLocalStorage ? cartFromLocalStorage : [];
    }
  }
})
