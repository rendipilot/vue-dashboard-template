<template>
    <div class="mx-auto my-auto h-9/10 w-9/10 bg-blue-100 rounded-md p-4">
      <p class="text-black mb-4">-> Product -> Create Team</p>
      <div>
        <h1 class="text-bold text-2xl mb-5">Create New Team</h1>
        <form @submit.prevent="sendData">
          <p class="my-4">Name</p>
          <input
            type="text"
            placeholder="name"
            v-model="name"
            class="w-5/10 border-2 bg-white rounded-md p-2"
            :class="{
              'border-red-500': isWrong && !name,
              'border-blue-400': !isWrong || name,
            }"
          />
          <p class="my-4">Member</p>
          <input
            type="number"
            placeholder="member"
            v-model="member"
            class="w-5/10 border-2 bg-white rounded-md p-2"
            :class="{
              'border-red-500': isWrong && !member,
              'border-blue-400': !isWrong || member,
            }"
          />
          <p class="my-4">Division</p>
          <input
            type="text"
            placeholder="division"
            v-model="division"
            class="w-5/10 border-2 bg-white rounded-md p-2"
            :class="{
              'border-red-500': isWrong && !division,
              'border-blue-400': !isWrong || division,
            }"
          />
  
          <div v-if="isWrong" class="text-red-500 mt-2">
            <p>All fields must be filled out.</p>
          </div>
  
          <div class="flex w-5/10 justify-end mt-6">
            <button type="submit" class="rounded-md bg-[#22177A] p-2 text-white font-semibold">
              Create Team
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from "vue";
  import { useRoute, useRouter } from "vue-router";
  
  const router = useRouter();
  const name = ref("");
  const member = ref(0);
  const division = ref("");
  
  const isWrong = ref(false);
  
  const sendData = () => {
    if (!name.value || !division.value || !member.value) {
      isWrong.value = true;
      return;
    }
    
    isWrong.value = false;
    router.push("/team");
  
  };
  </script>
  