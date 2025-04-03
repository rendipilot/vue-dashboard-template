<template>
  <div class="left-nav flex flex-col pt-8 pl-4 gap-4 w-1/10 h-full bg-[#EBEAFF]">
    <RouterLink to="/" class="text-left font-semibold">Home</RouterLink>
    <RouterLink to="/user" class="text-left font-semibold">Table User</RouterLink>
    <RouterLink to="/product" class="text-left font-semibold">Table Product</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>
