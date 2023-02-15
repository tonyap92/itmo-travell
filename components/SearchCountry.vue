<script setup>
import { usePlaceStore } from "../stores/index.js";
import { storeToRefs } from "pinia";

const placeStore = usePlaceStore();

const { searchCountry } = storeToRefs(placeStore);
</script>

<template>
  <div
    class="mb-16 p-2 grid items-center bg-white rounded border border-solid border-gray-400"
    style="max-width: 270px; grid-template-columns: 15% 85%"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 pt-0.5 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>

    <input
      v-model="searchCountry"
      class="outline-none bg-transparent"
      type="text"
      name="search"
      id="search"
      placeholder="Search country..."
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
