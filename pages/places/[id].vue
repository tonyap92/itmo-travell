<script setup>
import { usePlaceStore } from '@/stores/index.js'
import { ref } from 'vue'
import { usePostStore } from '~~/stores/feedback'

const placeStore = usePlaceStore()
const postStore = usePostStore()

const route = useRoute()
const id = parseInt(route.params.id)

postStore.clear()

postStore.placeId = id
postStore.fetchPosts()

const { pending, error, data: place } = useFetch('/api/place/' + id)

const isInfoPopapVisible = ref(false)

const onTogglePopapInfo = () => {
  isInfoPopapVisible.value = !isInfoPopapVisible.value
  // console.log("> StartView -> onTogglePopapInfo", isInfoPopapVisible.value);
}
const getLikeColor = () => (place.liked ? '#ff4255' : '#FFCDD2')
const onHandleLikeClick = (e) => {
  e.preventDefault()
  placeStore.toggleLiked(id)
}

onTogglePopapInfo()
</script>

<template>
  <div v-if="pending">...loading</div>
  <div v-if="error">...error</div>
  <section class="relative grid items-center text-gray-500" style="height: 600px; z-index: 1">
    <div class="absolute top-0 bottom-0 left-0 right-0" style="z-index: -1" v-if="place">
      <img class="w-full object-cover" style="height: 100%; filter: brightness(40%)" :src="place.poster_image" alt="" />
    </div>

    <Navigate />

    <Popap
      @onClosePopap="onTogglePopapInfo"
      :isInfoPopapVisible="isInfoPopapVisible"
      class="w-20 fixed top-3 r-0 l-0"
    />

    <div class="max-w-screen-xl mx-auto px-4 md:px-20 text-white" v-if="place">
      <h2 class="mb-10 text-3xl">{{ place.name }}</h2>
      <div class="grid md:grid-cols-3 gap-2 justify-center">
        <div>
          <a
            class="py-3 px-7 mx-auto flex items-center align-top border-0 rounded cursor-pointer"
            :href="place.video_link"
            target="_blank"
            style="max-width: 124px; background: 0 0; background: rgba(0, 0, 0, 0.26)"
          >
            <svg
              class="mr-2 align-top"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              version="1.1"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

              <g id="SVGRepo_iconCarrier">
                <g id="icomoon-ignore"></g>
                <path
                  d="M7.47 6.661l16.010 9.339-16.010 9.339v-18.678zM6.404 4.804v22.391l19.192-11.196-19.192-11.196z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>

            <span class="text-lg">Play</span>
          </a>
        </div>
        <div class="justify-self-center">
          <a
            class="py-3 px-7 flex items-center align-top border-0 rounded cursor-pointer"
            href="/"
            style="max-width: 144px; background: 0 0; background: rgba(0, 0, 0, 0.26)"
            @click="onHandleLikeClick"
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
          </a>
        </div>
        <div @click="onTogglePopapInfo">
          <div
            class="py-3 px-7 flex items-center align-top border-0 rounded cursor-pointer"
            style="max-width: 190px; background: 0 0; background: rgba(0, 0, 0, 0.26)"
          >
            <span class="text-lg">Add feedback</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 py-16" v-if="place">
    <div class="max-w-screen-xl mx-auto px-4 md:px-20">
      <div class="mb-10 grid lg:grid-cols-2 gap-10">
        <img class="w-full object-cover" :src="place.poster_image" alt="" />
        <div>
          <div class="mb-5 text-3xl md:text-5xl">{{ place.name }}</div>
          <div>{{ place.description }}</div>
        </div>
      </div>

      <div>
        <h1 class="mb-10 text-xl md:text-4xl text-center">Feedback</h1>
        <FeedbackList />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
