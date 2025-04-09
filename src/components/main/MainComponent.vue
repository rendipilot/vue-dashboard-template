<template>
  <div class="main-content flex w-9/10 h-full">
    <Home v-if="$route.path === '/'"/>
    <User v-if="$route.path === '/user'" />
    <Product v-if="$route.path === '/product'"/>
    <Team v-if="$route.path === '/team'"/>
    <CreateProduct v-if="$route.path === '/product/create'"/>
    <CreateUser v-if="$route.path === '/user/create'"/>
  </div>
</template>

<script setup>
defineProps({});
import Home from '../page/Home.vue';
import Product from '../page/Product.vue';
import User from '../page/User.vue';
import Team from '../page/Team.vue';
import CreateProduct from '../page/CreateProduct.vue';
import CreateUser from '../page/CreateUser.vue';
</script>
