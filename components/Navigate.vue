<script setup>
import { ref } from "vue";
import { usePlaceStore } from "@/stores/index.js";
import { useCartStore } from "@/stores/cart.js";

const placeStore = usePlaceStore();

const cartStore = useCartStore();

const cart = ref("Cart");
</script>

<template>
  <div
    class="fixed top-0 right-0 max-w-screen-xl w-full mx-auto"
    style="max-width: inherit"
  >
    <nav
      class="p-4 md:p-10 grid grid-cols-2 justify-between items-center bg-white"
    >
      <div class="grid md:grid-cols-3 md:w-3/4">
        <NuxtLink to="/">
          <h1 class="md:text-xl text-gray-800 font-bold cursor-pointer">HOME</h1>
        </NuxtLink>

        <NuxtLink to="/shop">
          <h1 class="md:text-xl text-gray-800 font-bold cursor-pointer">SHOP</h1>
        </NuxtLink>

        <NuxtLink to="/team">
          <h1 class="md:text-xl text-gray-800 font-bold cursor-pointer">TEAM</h1>
        </NuxtLink>
      </div>

      <div
        class="grid md:grid-cols-3 justify-items-end justify-self-end lg:w-1/4"
      >
        <NuxtLink :to="`/favourites`" class="grid grid-cols-2">
          <span class="text-green-600 font-bold text-center">{{
            placeStore.likedPlaces.length
          }}</span>
          <div class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.7692 6.70483C9.53846 2.01902 4 3.90245 4 8.68256C4 13.4627 13.2308 20 13.2308 20C13.2308 20 22 13.2003 22 8.68256C22 4.16479 16.9231 2.01903 13.6923 6.70483L13.2308 7.0791L12.7692 6.70483Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </NuxtLink>
        <NuxtLink :to="`/cart`" class="grid grid-cols-2">
          <span class="text-green-600 font-bold text-center">{{
            cartStore.numberOfProducts
          }}</span>
          <div class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              id="svg5"
              version="1.1"
            >
              <defs id="defs2" />

              <g id="layer1" transform="translate(36,-244)">
                <path
                  d="m -31.371094,255.00586 c -1.625564,0 -2.864805,1.51618 -2.589843,3.10351 l 2.27539,13.13477 c 0.27851,1.60776 1.701467,2.76172 3.314453,2.76172 h 16.767578 c 1.6146248,0 3.0129936,-1.16108 3.3105472,-2.74805 a 1.0001,1.0001 0 0 0 0.00195,-0.0137 l 2.2734375,-13.12109 v -0.002 c 0.2984384,-1.59859 -0.9594241,-3.11523 -2.5859375,-3.11523 z m 0,2 h 22.7675784 c 0.4158021,0 0.6977222,0.33936 0.6210937,0.74805 a 1.0001,1.0001 0 0 0 -0.00195,0.0137 l -2.2753911,13.12695 c -0.124292,0.65116 -0.680335,1.11133 -1.34375,1.11133 h -16.767578 c -0.666611,0 -1.23316,-0.46316 -1.34375,-1.10156 l -2.27539,-13.13672 c -0.07374,-0.42569 0.201707,-0.76172 0.61914,-0.76172 z"
                  id="rect40272"
                  style="
                    color: #000000;
                    fill: #000000;
                    fill-rule: evenodd;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4.1;
                    -inkscape-stroke: none;
                  "
                />

                <path
                  d="m -24.695312,246.07227 a 1,1 0 0 0 -0.556641,0.52734 l -4,9 a 1,1 0 0 0 0.507812,1.32031 1,1 0 0 0 1.320313,-0.50781 l 4,-9 a 1,1 0 0 0 -0.507813,-1.32031 1,1 0 0 0 -0.763671,-0.0195 z"
                  id="path41727"
                  style="
                    color: #000000;
                    fill: #000000;
                    fill-rule: evenodd;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4.1;
                    -inkscape-stroke: none;
                  "
                />

                <path
                  d="m -15.279297,246.07227 a 1,1 0 0 0 -0.763672,0.0195 1,1 0 0 0 -0.507812,1.32031 l 4,9 a 1,1 0 0 0 1.318359,0.50781 1,1 0 0 0 0.507813,-1.32031 l -4,-9 a 1,1 0 0 0 -0.554688,-0.52734 z"
                  id="path41729"
                  style="
                    color: #000000;
                    fill: #000000;
                    fill-rule: evenodd;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4.1;
                    -inkscape-stroke: none;
                  "
                />

                <path
                  d="m -20,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z"
                  id="path43195"
                  style="
                    color: #000000;
                    fill: #000000;
                    fill-rule: evenodd;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4.1;
                    -inkscape-stroke: none;
                  "
                />

                <path
                  d="m -24,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z"
                  id="path43243"
                  style="
                    color: #000000;
                    fill: #000000;
                    fill-rule: evenodd;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4.1;
                    -inkscape-stroke: none;
                  "
                />

                <path
                  d="m -16,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z"
                  id="path43245"
                  style="
                    color: #000000;
                    fill: #000000;
                    fill-rule: evenodd;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4.1;
                    -inkscape-stroke: none;
                  "
                />
              </g>
            </svg></div
        ></NuxtLink>
        <NuxtLink :to="`/auth`" class="grid">
          <div class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.9696 19.5047C16.7257 17.5293 15.0414 16 13 16H11C8.95858 16 7.27433 17.5293 7.03036 19.5047M16.9696 19.5047C19.3986 17.893 21 15.1335 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 15.1335 4.60137 17.893 7.03036 19.5047M16.9696 19.5047C15.5456 20.4496 13.8371 21 12 21C10.1629 21 8.45441 20.4496 7.03036 19.5047M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg></div
        ></NuxtLink>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
