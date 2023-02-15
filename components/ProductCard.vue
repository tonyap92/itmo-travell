<script setup>
import { useCartStore } from "@/stores/cart.js";
const cartStore = useCartStore();

const { product, cart } = defineProps(["product", "cart"]);

const onProductAddBtnClick = () => {
  cartStore.addToCart(product);
};

const onProductDeleteQntMinusClick = () => {
  cartStore.decQuantity(product);
};
</script>

<template>
  <article class="relaitive rounded-t-lg shadow-lg">
    <div>
      <NuxtLink :to="`products/${product.id}`">
        <img
          class="w-full h-44 object-cover rounded-t-lg"
          :src="product.image"
          :alt="product.title"
      /></NuxtLink>
    </div>
    <div class="p-4 bg-white  rounded-b-lg">
      <div class="text-center">
        <h3 class="mb-4">{{ product.title.substring(0, 20) }}</h3>
        <h3 class="mb-4 text-gray-400">
          {{ product.price.toFixed(0) }} $
        </h3>
      </div>
      <div class="grid grid-cols-2 justify-items-center">
        <button
          @click="onProductDeleteQntMinusClick(product)"
          class="inline-block w-10 h-10 text-gray-800 font-medium text-xs leading-tight border border-solid border-gray-800 uppercase rounded hover:text-white hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          &minus;
        </button>

        <button
          @click="onProductAddBtnClick(product)"
          class="inline-block w-10 h-10 text-gray-800 font-medium text-xs leading-tight border border-solid border-gray-800 uppercase rounded hover:text-white hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          &plus;
        </button>
      </div>
    </div>
  </article>
</template>
