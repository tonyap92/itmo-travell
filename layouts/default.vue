<script setup>
import { useProductStore } from "@/stores/products.js";
import { usePlaceStore } from "@/stores/index.js";
const productStore = useProductStore();
const placeStore = usePlaceStore();

onMounted(() => {
  productStore.fetchNewProducts();
  placeStore.fetchNewPlaces();
});
</script>

<template>
  <main class="overflow-hidden" style="background: #f6f8fa; height: 100%">
    <slot />
  </main>

  <Footer />
</template>

<style scoped></style>
