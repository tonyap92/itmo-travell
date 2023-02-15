<script setup>
import { usePlaceStore } from "@/stores/index.js";

const placeStore = usePlaceStore();
</script>

<template>
  <AnotherHeader />

  <section class="px-4 py-16">
    <h1 class="mb-10 text-4xl text-center">Favourites</h1>
    <div class="max-w-screen-xl mx-auto px-4 md:px-20">
      <div v-if="placeStore.likedPlaces.length > 0">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10">
          <PlaceCard
            v-for="place in placeStore.likedPlaces"
            :key="place.id"
            :place="place"
          />
        </div>
      </div>

      <div v-else>
        <p>You don't have any favorite places yet!</p>
        <NuxtLink to="/">Go to home</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
