<template>
  <div class="header flex justify-between w-screen h-16 bg-[#22177A]">
    <p class="text-white text-xl my-auto ml-4 font-semibold">Crud Table</p>
    <button class="flex items-center justify-center h-8 my-auto rounded-md p-4 mr-4 text-white font-medium bg-red-500" @click="logout">Logout</button>
  </div>
  <div class="flex w-screen h-[calc(100vh-4rem)] overflow-hidden">
    <Sidenav />
    <MainComponent />
  </div>
</template>

<script setup>
import Sidenav from "./sidenav/Sidenav.vue"
import MainComponent from "./main/MainComponent.vue"
import { useRouter } from "vue-router";

const router = useRouter()
const logout = () => {
  localStorage.setItem('isAuthenticated', 'false');
  router.push({ name: 'login' });
}
</script>
