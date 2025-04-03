<template>
  <div
    class="left-nav flex flex-col pt-8 pl-4 gap-4 w-1/10 h-full bg-[#EBEAFF]"
  >
    <RouterLink
      to="/"
      class="text-left"
      :class="{ 'font-semibold': $route.path === '/' }"
    >
      Home
    </RouterLink>
    <RouterLink
      to="/user"
      class="text-left"
      :class="{ 'font-semibold': $route.path === '/user' }"
    >
      Table User
    </RouterLink>
    <RouterLink
      to="/product"
      class="text-left"
      :class="{ 'font-semibold': $route.path === '/product' }"
    >
      Table Product
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
