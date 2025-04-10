<template>
    <div v-if="show" class="absolute inset-0 bg-black/60 flex items-center justify-center z-50 rounded-md">
      <div class="bg-white p-6 rounded shadow-md w-96">
        <h2 class="text-xl font-semibold mb-4">Konfirmasi Hapus</h2>
        <p>Apakah kamu yakin ingin menghapus item ini?</p>
        <div class="flex justify-end mt-4">
          <button @click="$emit('cancel')" class="px-4 py-2 mr-2 bg-gray-300 rounded">Batal</button>
          <button @click="$emit('confirm')" class="px-4 py-2 bg-red-600 text-white rounded">Hapus</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    show: Boolean,
  });
  </script>