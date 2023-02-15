<script setup>
import { usePlaceStore } from "../stores/index.js";
// import { storeToRefs } from "pinia";
// import SearchCountry from "../components/SearchCountry.vue";

const placeStore = usePlaceStore();

// const { searchPlaces } = storeToRefs(placeStore);
</script>

<template>
  <PlacesHeader />
  <section class="px-4 py-16">
    <div class="max-w-screen-xl mx-auto px-4 md:px-20">
      <About />
      <div class="grid">
        <SearchCountry />
      </div>
      <div class="mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        <TransitionGroup name="list">
          <PlaceCard
            v-for="place in placeStore.searchPlaces"
            :key="place.id"
            :place="place"
          />
        </TransitionGroup>
      </div>
      <ButtonOnBg />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}</style>
