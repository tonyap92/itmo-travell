<script setup>
import { useCartStore } from '@/stores/cart.js'
import { usePostStore } from '~~/stores/feedback'

const cartStore = useCartStore()
const postStore = usePostStore()

const route = useRoute()
const id = parseInt(route.params.id)

postStore.clear()
postStore.productId = id
const { pending, error, data: product } = useFetch('/api/product/' + id)

const onProductAddBtnClick = (product) => {
  cartStore.addToCart(product)
}
</script>

<template>
  <section class="banner relative grid items-center text-gray-500" style="z-index: 1">
    <Navigate />

    <div class="absolute top-0 bottom-0 left-0 right-0" style="z-index: -1" v-if="product">
      <img class="w-full object-cover" style="height: 100%; filter: brightness(40%)" :src="product.image" alt="" />
    </div>

    <div v-if="pending" class="w-100 h-full flex justify-center items-center">...loading</div>
    <div v-if="error" class="w-100 h-full flex justify-center items-center">error!</div>
  </section>

  <section class="px-4 py-16" v-if="product">
    <div class="max-w-screen-xl mx-auto px-4 md:px-20">
      <div class="grid lg:grid-cols-2 gap-6 justify-around p-4">
        <img class="w-full h-auto" :src="product.image" alt="" />
        <div class="m-4 text-xs md:text-lg">
          <div class="mb-2">{{ product.title }}</div>
          <div class="mb-4 text-gray-500">$ {{ product.price.toFixed(0) }}</div>
          <div class="mb-4">
            {{ product.description }}
          </div>
          <button
            @click="onProductAddBtnClick(product)"
            class="inline-block w-10 h-10 text-gray-800 font-medium text-xs leading-tight border border-solid border-gray-800 uppercase rounded hover:text-white hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            &plus;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style setup>
.banner {
  height: 600px;
}

@media (max-width: 992px) {
  .banner {
    height: 300px;
  }
}
</style>
