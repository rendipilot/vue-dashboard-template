<template>
  <div class="flex justify-center items-center min-h-screen">
    <div
      class="flex flex-col p-6 border text-center border-gray-400 w-2/10 rounded-md"
    >
      <h1 class="text-bold text-xl mb-5">Login</h1>
      <form @submit.prevent="login" class="flex flex-col gap-4">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          required
          class="flex-1 border-2 border-blue-400 rounded-md p-2"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          class="flex-1 border-2 border-blue-400 rounded-md p-2"
        />
        <p v-if="isWrong" class="text-red-500 mt-4">Your username or password wrong</p>
        <button type="submit" class="flex-1 bg-[#22177A] text-white text-normal p-2 rounded-md">Login</button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const isWrong = ref(false)
const router = useRouter();

const login = () => {
  if (username.value === "admin" && password.value === "password") {
    localStorage.setItem("isAuthenticated", "true");
    router.push("/");
  } else {
    isWrong.value = !isWrong.value
  }
};
</script>
