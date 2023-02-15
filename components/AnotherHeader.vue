<template>
  <section
    class="banner relative grid items-center text-gray-500"
    style="z-index: 1"
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
  </section>
</template>

<script setup></script>

<style scoped>
.banner {
  height: 600px;
}

@media (max-width: 992px) {
  .banner {
    height: 300px;
  }
}
</style>
