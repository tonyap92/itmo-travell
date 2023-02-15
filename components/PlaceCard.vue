<script setup>
import { usePlaceStore } from "@/stores/index.js";

const { place } = defineProps({
  place: Object,
});

const placeStore = usePlaceStore();
const getLikeColor = () => (place.liked ? "#ff4255" : "#FFCDD2");

const onProductLikeBtnClick = () => {
  placeStore.toggleLiked(place.id);
};
</script>

<template>
  <article class="relaitive rounded-lg shadow-lg">
    <div>
      <NuxtLink :to="`/places/${place.id}`">
        <img
          class="w-full h-44 object-cover rounded-t-lg"
          :src="place.poster_image"
          alt=""
        />
      </NuxtLink>
    </div>
    <div class="p-6 bg-white rounded-lg text-left">
      <h3 class="mb-1 text-lg font-bold">{{ place.country }}</h3>
      <h5 class="mb-8">{{ place.name }}</h5>
      <div
        class="grid grid-cols-2 items-baseline"
        style="grid-template-columns: 70% 30%"
      >
        <div
          class="grid grid-cols-2 gap-4 items-end"
          style="grid-template-columns: 30% 70%"
        >
          <img :src="place.author_image" alt="" />
          <div>
            <p class="font-bold">{{ place.author_name }}</p>
            <p>{{ place.date }}</p>
          </div>
        </div>
        <div
          class="justify-self-end cursor-pointer"
          @click="onProductLikeBtnClick(place.id)"
        >
          <svg
            data-v-65549f94=""
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="28"
            height="28"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <path
              data-v-65549f94=""
              :fill="getLikeColor()"
              d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
