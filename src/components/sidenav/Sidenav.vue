<template>
  <div
    class="left-nav flex flex-col pt-8 w-1/10 h-full bg-[#EBEAFF]"
  >
    <RouterLink
      to="/"
      class="text-left p-2"
      :class="{ 'text-white font-semibold bg-blue-300': $route.path === '/' }"
    >
      Home
    </RouterLink>
    <RouterLink
      to="/user"
      class="text-left p-2"
      :class="{ 'text-white font-semibold bg-blue-300': $route.path === '/user' }"
    >
      Table User
    </RouterLink>
    <RouterLink
      to="/product"
      class="text-left p-2"
      :class="{ 'text-white font-semibold bg-blue-300': $route.path === '/product' }"
    >
      Table Product
    </RouterLink>
    <RouterLink
      to="/team"
      class="text-left p-2"
      :class="{ 'text-white font-semibold bg-blue-300': $route.path === '/team' }"
    >
      Table Team
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
