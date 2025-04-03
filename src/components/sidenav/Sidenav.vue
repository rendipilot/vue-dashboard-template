<template>
   <div class="left-nav flex flex-col pt-8 pl-4 gap-4 w-1/10 h-full bg-[#EBEAFF]">
    <button @click="changeComponent('user')" class="text-left font-semibold">Table User</button>
    <button @click="changeComponent('product')" class="text-left font-semibold">Table Product</button>
  </div>
</template>


<script setup>
const emit = defineEmits(); // Deklarasikan emit untuk mengirim data ke parent


const changeComponent = (table) => {
  emit('changeComponent', table);
}
</script>