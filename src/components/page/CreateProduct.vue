<template>
  <div class="mx-auto my-auto h-9/10 w-9/10 bg-blue-100 rounded-md p-4">
    <p class="text-black mb-4">-> Product -> {{ props.isEdit ? 'Update Product' : 'Create Product' }}</p>
    <div>
      <h1 class="text-bold text-2xl mb-5">{{ props.isEdit ? 'Update Product' : 'Create Product' }}</h1>
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
        <p class="my-4">Price</p>
        <input
          type="text"
          placeholder="price"
          v-model="price"
          class="w-5/10 border-2 bg-white rounded-md p-2"
          :class="{
            'border-red-500': isWrong && !price,
            'border-blue-400': !isWrong || price,
          }"
        />
        <p class="my-4">Category</p>
        <select
          class="w-5/10 border-2 bg-white rounded-md p-2"
          :class="{
            'border-red-500': isWrong && !category,
            'border-blue-400': !isWrong || category,
          }"
          v-model="category"
        >
          <option disabled value="">Please select one</option>
          <option>Category A</option>
          <option>Category B</option>
          <option>Category C</option>
        </select>

        <div v-if="isWrong" class="text-red-500 mt-2">
          <p>All fields must be filled out.</p>
        </div>

        <div class="flex w-5/10 justify-end mt-6">
          <button type="submit" class="rounded-md bg-[#22177A] p-2 text-white font-semibold">
            Create Product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/product";
import { computed, inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const name = ref("");
const price = ref("");
const category = ref("");
const dataUpdate = ref(null);
const productStore = useProductStore();
const editData = computed(() => productStore.editData)

const props = defineProps({
  isEdit: Boolean,
  id: String,
});

const isWrong = ref(false);

const sendData = () => {
  if (!name.value || !price.value || !category.value) {
    isWrong.value = true;
    return;
  }
  
  isWrong.value = false;
  router.push("/product");

};


</script>
