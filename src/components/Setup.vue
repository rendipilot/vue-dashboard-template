<template>
  <div class="header flex w-screen h-16 bg-[#22177A]">
    <p class="text-white text-xl my-auto ml-4 font-semibold">Crud Table</p>
  </div>
  <div class="flex w-screen h-[calc(100vh-4rem)] overflow-hidden">
    <Sidenav @changeComponent="handleChangeComponent" />
    <MainComponent :selectedTable="selectedTable"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidenav from "./sidenav/Sidenav.vue"
import MainComponent from "./main/MainComponent.vue"

const selectedTable = ref("user")

const handleChangeComponent = (table) => {
  if(selectedTable.value !== table){
    console.info("data berubah")
    selectedTable.value = table
  }
}
</script>

<style scoped></style>
