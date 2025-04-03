<template>
  <div class="main-content flex w-9/10 h-full">
    <!-- table -->
     <Home v-if="$route.path === '/'"/>
    <User v-if="$route.path === '/user'" />
    <Product v-if="$route.path === '/product'"/>
  </div>
</template>

<script setup>
defineProps({});
import Home from '../page/Home.vue';
import Product from '../page/Product.vue';
import User from '../page/User.vue';
</script>
