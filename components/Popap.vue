<script setup>
const props = defineProps(["isInfoPopapVisible"]);
const emit = defineEmits(["onClosePopap"]);

const onClosePopap = () => {
  emit("onClosePopap");
};

onClosePopap();
</script>

<template>
  <div v-show="isInfoPopapVisible" class="p-4 bg-white">
    <div
      class="max-h-full fixed top-50 left-0 right-0 z-10 w-full mx-auto p-4 md:p-8 md:bg-white"
      style="max-width: 500px; height: fit-content; top: 3%"
    >
      <div class="w-full mb-10 flex justify-between items-center">
        <span></span>

        <button @click="onClosePopap">
          <span class="flex uppercase gap-2"> &#10006; </span>
        </button>
      </div>

      <div class="flex content-center items-center justify-center">
        <FeedbackForm />
      </div>

      <div class="flex justify-between items-center"></div>
    </div>

    <div
      class="fixed top-0 left-0 right-0 z-0 max-w-595 w-full mx-auto h-full bg-gray-700 bg-opacity-60"
    ></div>
  </div>
</template>

<style scoped></style>
