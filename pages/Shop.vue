<script setup>
import { useProductStore } from '@/stores/products.js'
import SearchProduct from '../components/SearchProduct.vue'
const productStore = useProductStore()

</script>

<template>
  <AnotherHeader />

  <section class="px-4 py-16">
    <div class="max-w-screen-xl mx-auto px-4 md:px-20">
      <h1 class="mb-10 text-4xl text-center">Shop</h1>
      <SearchProduct />
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        <TransitionGroup name="list">
          <ProductCard v-for="product in productStore.searchVariant" :key="product.id" :product="product" />
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
