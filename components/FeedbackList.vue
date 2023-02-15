<script setup>
import { usePostStore } from '../stores/feedback.js'

const postStore = usePostStore()
</script>

<template>
  <div class="grid mb-4" v-for="post in postStore.posts">
    <p class="text-lg">
      {{ post.content }}
    </p>
    <div class="grid lg:grid-cols-2">
      <div class="font-bold">{{ post.authorName }}</div>
    </div>
  </div>
</template>

<style scoped></style>
