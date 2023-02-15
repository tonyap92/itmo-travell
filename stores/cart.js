import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart-store', {
  state: () => ({
    cart: useLocalStorage('cart', []),
  }),
  getters: {
    numberOfProducts() {
      return this.cart.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    },
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    },
  },
  actions: {
    deleteFromCart(product) {
      this.cart = this.cart.filter((p) => {
        return p.id != product.id
      })
    },

    addToCart(product) {
      const exist = this.cart.find((p) => p.id === product.id)
      if (exist) {
        this.incQuantity(product)
      }
      if (!exist) {
        this.cart.push({ ...product, quantity: 1 })
      }
    },

    incQuantity(product) {
      this.card = this.cart.map((p) => {
        if (p.id === product.id) {
          p.quantity++
        }
        return p
      })
    },

    decQuantity(product) {
      this.card = this.cart.map((p) => {
        if (p.id === product.id && p.quantity > 1) {
          p.quantity--
        }
        return p
      })
    },
  },
})
