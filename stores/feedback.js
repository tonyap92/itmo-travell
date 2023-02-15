import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts-store', {
  state: () => {
    return {
      posts: [],
      placeId: undefined,
    }
  },

  getters: {},
  actions: {
    fetchPosts() {
      fetch('/api/posts/' + this.placeId)
        .then((res) => res.json())
        .then((data) => (this.posts = data))
    },
    clear() {
      this.placeId = undefined
      this.posts = []
    },
    createPost(authorName, authorEmail, content) {
      const newPost = {
        id: Date.now(),
        authorName,
        authorEmail,
        content,
        placeId: this.placeId,
      }

      this.posts.push(newPost)
      fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })
    },
  },
})
