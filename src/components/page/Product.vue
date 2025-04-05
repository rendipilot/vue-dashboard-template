<template>
  <div class="mx-auto my-auto h-9/10 w-9/10 bg-blue-100 rounded-md p-4">
    <div class="flex justify-between">
      <button class="p-4 rounded-md bg-[#22177A] text-white font-medium">
        Add new product
      </button>
      <input
        type="text"
        placeholder="Search..."
        class="p-2 rounded-md w-64 bg-white"
        v-model="searchQuery"
      />
    </div>
    <div class="h-8/10 mt-6 bg-white rounded-md flex flex-col">
      <table class="min-w-full overflow-hidden rounded-md flex flex-col h-full">
        <thead>
          <tr class="flex bg-[#22177A] text-white">
            <th class="pl-4 flex-1 py-2 text-left border-r border-white">
              Product Name
            </th>
            <th class="pl-4 flex-1 py-2 text-left border-r border-white">Price</th>
            <th class="pl-4  flex-1 py-2 text-left border-r border-white">Category</th>
            <th class="pl-4 flex-1 py-2 text-left border-r border-white">Action</th>
          </tr>
        </thead>
        <tbody class="flex-1 flex flex-col">
          <tr
            v-for="product in filteredProducts"
            :key="product.id"
            class="border border-gray-200 flex-1 flex items-center"
          >
            <td class="pl-4 flex-1">{{ product.name }}</td>
            <td class="pl-4 flex-1">{{ product.price }}</td>
            <td class="pl-4 flex-1">{{ product.category }}</td>
            <td class="pl-4 flex gap-4 flex-1">
              <button
                class="flex items-center justify-center p-4 bg-amber-300 text-white font-medium rounded-md h-8"
              >
                Edit
              </button>
              <button
                class="flex items-center justify-center p-4 bg-orange-700 text-white font-medium rounded-md h-8"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end mt-4">
      <nav aria-label="Pagination">
        <ul class="flex items-center space-x-2">
          <li>
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-gray-300 focus:outline-none disabled:opacity-50"
              :disabled="isPreviousDisabled"
            >
              Previous
            </button>
          </li>
          <li>
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              1
            </button>
          </li>
          <li>
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              2
            </button>
          </li>
          <li>
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              3
            </button>
          </li>

          <li>
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-gray-300 focus:outline-none disabled:opacity-50"
              :disabled="isNextDisabled"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const products = ref([
  { id: 1, name: "Product 1", price: "$10", category: "Category A" },
  { id: 2, name: "Product 2", price: "$20", category: "Category B" },
  { id: 3, name: "Product 3", price: "$30", category: "Category A" },
  { id: 4, name: "Product 4", price: "$40", category: "Category C" },
  { id: 5, name: "Product 5", price: "$50", category: "Category A" },
  { id: 6, name: "Product 6", price: "$60", category: "Category B" },
  { id: 7, name: "Product 7", price: "$70", category: "Category C" },
  { id: 8, name: "Product 8", price: "$80", category: "Category A" },
  { id: 9, name: "Product 9", price: "$90", category: "Category B" },
  { id: 10, name: "Product 10", price: "$100", category: "Category C" },
]);

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>
