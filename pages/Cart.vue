<script setup>
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <AnotherHeader />

  <section class="px-4 py-16">
    <h1 class="mb-10 text-4xl text-center">Cart</h1>
    <div class="max-w-screen-xl mx-auto px-4 md:px-20">
      <div v-if="cartStore.cart.length > 0">
        <div class="grid grid-cols-1 gap-x-3 gap-y-10">
          <CartCard />
        </div>
      </div>

      <div v-else>
        <div>Your cart is empty</div>
        <NuxtLink to="/">Go to home</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
