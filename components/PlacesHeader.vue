<template>
  <section
    class="relative grid items-center text-gray-500"
    style="height: 600px; z-index: 1"
  >
    <div class="absolute top-0 bottom-0 left-0 right-0" style="z-index: -1">
      <img
        class="w-full object-cover"
        style="height: 100%; filter: brightness(40%)"
        src="https://images.unsplash.com/photo-1619560820102-31f5b04c049a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        alt=""
      />
    </div>

    <Navigate />

    <div class="max-w-screen-xl mx-auto px-4 md:px-20">
      <div class="grid md:grid-cols-2 items-start gap-10">
        <div
          class="text-center mx-auto"
          style="
            box-shadow: 0 0 8px 0 rgb(0 0 0 / 40%);
            width: 218px;
            height: auto;
          "
        >
          <img class="hidden md:block"
            src="https://images.unsplash.com/photo-1612769254949-deb42c1fbbf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
        </div>

        <div class="text-white">
          <h2 class="mb-2 text-3xl">A trip to Vienna</h2>
          <p class="mb-10">2022</p>
          <div>
            <a
              class="py-3 px-7 flex items-center align-top border-0 rounded cursor-pointer"
              href="https://www.youtube.com/embed/Igc5WKPtsGk"
              target="_blank"
              style="
                max-width: 124px;
                background: 0 0;
                background: rgba(0, 0, 0, 0.26);
              "
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

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
</style>
