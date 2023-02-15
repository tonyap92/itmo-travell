<script setup>
import { usePostStore } from '../stores/feedback.js'

const postStore = usePostStore()
const name = ref()
const email = ref()
const content = ref()
</script>

<template>
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
    <form @submit.prevent class="mb-10 grid gap-6">
      <input
        ref="name"
        type="text"
        placeholder="Name"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none"
      />
      <input
        ref="email"
        type="emai"
        placeholder="Email"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none"
      />
      <textarea
        ref="content"
        cols="30"
        rows="10"
        placeholder="Feedback"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none"
      ></textarea>
      <button
        @click="postStore.createPost(name.value, email.value, content.value)"
        class="w-full px-6 py-2.5 border border-solid border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg hover:text-white focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
      >
        Send
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
