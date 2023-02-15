<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const loading = ref(false);
const error = ref(null);

const loginMode = ref(true);

const authorize = () => {
  loading.value = true;
  console.log("logging in ...");
};
</script>

<template>
  <AnotherHeader />

  <section class="px-4 py-16">
    <h1 class="mb-10 text-4xl text-center">
      {{ loginMode ? "Login to your account" : "Create an account" }}
    </h1>

    <form @submit.prevent class="grid max-w-lg mx-auto">
      <input
        v-model="email"
        class="px-2 py-3 mt-3 border-1 border-lime-200"
        placeholder="Email Address"
        type="email"
        name="email"
        id="email"
      />
      <input
        v-model="password"
        class="px-2 py-3 mt-3 border-1 border-lime-200"
        placeholder="Password"
        type="password"
        name="password"
        id="password"
      />

      <input
        v-if="!loginMode"
        v-model="passwordConfirm"
        class="px-2 py-3 mt-3 border-1 border-lime-200"
        placeholder="Re-enter your password"
        type="password"
        name="password-confirm"
        id="password-confirm"
      />

      <button
        class="p-5 text-black border border-solid border-black rounded-sm mt-5 disabled:bg-gray-400"
        :disabled="loading"
        @click="authorize"
      >
        Authorize
      </button>

      <p v-if="error" class="text-center text-red-400 mt-3">
        {{ error }}
      </p>

      <a
        @click="loginMode = !loginMode"
        class="mt-3 text-center underline cursor-pointer"
      >
        Or
        {{ loginMode ? "Register" : "Login" }}
        instead
      </a>
    </form>
  </section>
</template>

<style scoped></style>
