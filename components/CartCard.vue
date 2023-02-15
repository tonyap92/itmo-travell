<script setup>
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <div v-for="product in cartStore.cart" :key="product.id">
    <article class="cart-coll mb-10 relaitive rounded grid">
      <div>
        <NuxtLink :to="`products/${product.id}`">
          <img class="w-full h-44 object-cover" :src="product.image" :alt="product.title"
        /></NuxtLink>
      </div>
      <div class="p-6 grid bg-white">
        <div @click="cartStore.deleteFromCart(product)" class="justify-self-end cursor-pointer">
          <span>&#10006;</span>
        </div>

        <div class="grid md:grid-cols-2 items-center">
          <div class="text-center">
            <h3 class="mb-4">{{ product.title.substring(0, 20) }}</h3>
            <h3 class="mb-4 text-gray-400">{{ product.price.toFixed(0) }} $</h3>
          </div>
          <div class="w-40 mr-0 grid grid-cols-3 items-center justify-items-center justify-self-center">
            <button
              type="button"
              class="inline-block w-10 h-10 text-gray-800 font-medium text-xs leading-tight border border-solid border-gray-800 uppercase rounded hover:text-white hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
              @click="cartStore.decQuantity(product)"
            >
              &minus;
            </button>
            {{ product.quantity }}
            <button
              type="button"
              class="inline-block w-10 h-10 text-gray-800 font-medium text-xs leading-tight border border-solid border-gray-800 uppercase rounded hover:text-white hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
              @click="cartStore.incQuantity(product)"
            >
              &plus;
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>

  <div class="text-lg md:text-2xl text-end">Total: {{ cartStore.cartTotal.toFixed(0) }}$</div>

  <NuxtLink to="/payment"> <p class="text-xl md:text-4xl text-end">Payment method &#8594;</p></NuxtLink>
</template>

<style scoped>
.cart-coll {
  grid-template-columns: 30% 70%;
}

@media (max-width: 992px) {
  .cart-coll {
    grid-template-columns: 100%;
  }
}
</style>
