<template>
  <div class="main-content flex w-9/10 h-full">
    <p>{{ $route.name ? `Table ${$route.name.charAt(0).toUpperCase() + $route.name.slice(1)}` : 'Main Component' }}</p>
  </div>
</template>

<script setup>
defineProps({});
</script>
