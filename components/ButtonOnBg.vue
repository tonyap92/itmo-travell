<script setup></script>

<template>
  <div class="grid md:grid-cols-3 bg-white">
    <img
      class="h-full w-full"
      src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      alt=""
    />
    <div class="p-4 text-center bg-white self-center">
      <p class="mb-10 text-2xl text-center font-bold">We invite you</p>
      <p class="mb-10 text-lg">Here we present products made with our own hands</p>
      <NuxtLink :to="`/shop`">
          <button
            type="button"
            class="inline-block px-6 py-2.5 text-gray-800 font-medium text-xs leading-tight border border-solid border-gray-800 uppercase rounded hover:text-white hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Shop
          </button>
        </NuxtLink>
    </div>
    <img
      class="h-full w-full"
      src="https://images.unsplash.com/photo-1603723197358-e1dc3dc28529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped></style>
