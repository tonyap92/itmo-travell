import { defineStore } from 'pinia'

export const useProductStore = defineStore('products-store', {
  state: () => {
    return {
      products: [],
     searchProduct: '',
    }
  },
  getters: {
    searchVariant() {
      let search = this.searchProduct
      return this.products.filter(function (elem) {
        if (search === '') return true
        else return elem.title.indexOf(search) > -1
      })
    },
    numberOfProducts() {
      return this.products.length
    },

    item() {
      return (id) => this.products.find((product) => product.id === id)
    },
  },

  actions: {
    async fetchNewProducts() {
      this.products = await fetch('/api/products').then((res) => res.json())
    },
  },
})
