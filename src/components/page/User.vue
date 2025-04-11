<template>
  <div class="mx-auto my-auto h-9/10 w-9/10 bg-blue-100 rounded-md p-4">
    <DeleteModal :show="showDeleteModal" @cancel="showDeleteModal = false" @confirm="handleDelete"/>
    <p class="text-black mb-4">-> User</p>
    <div class="flex justify-between">
      <button @click="toCreate" class="p-4 rounded-md bg-[#22177A] text-white font-medium">
        Add new user
      </button>
      <input
        type="text"
        placeholder="Search..."
        class="p-2 rounded-md w-64 bg-white"
        v-model="searchQuery"
      />
    </div>
    <div class="h-8/10 mt-2 bg-white rounded-md flex flex-col">
      <table class="min-w-full overflow-hidden rounded-md flex flex-col h-full">
        <thead>
          <tr class="flex bg-[#22177A] text-white">
            <th class="flex-1 pl-4 py-2 text-left border-r border-white">Name</th>
            <th class="flex-1 pl-4 py-2 text-left border-r border-white">Title</th>
            <th class="flex-1 pl-4 py-2 text-left border-r border-white">Year Join</th>
            <th class="flex-1 pl-4 py-2 text-left border-r border-white">Action</th>
          </tr>
        </thead>
        <tbody class="flex-1 flex flex-col">
          <tr v-for="(user, index) in displayUsers" :key="index" class="border border-gray-200 flex-1 flex items-center">
            <td class="pl-4 flex-1">{{ user.name || ""}}</td>
            <td class="pl-4 flex-1">{{ user.title || ""}}</td>
            <td class="pl-4 flex-1">{{ user.year || ""}}</td>
            <td class="pl-4 flex-1 flex gap-4">
              <button
              @click="handleEdit(user.id)"
              v-if="user.name"
                class="flex items-center justify-center p-4 bg-amber-300 text-white font-medium rounded-md h-8"
              >
                Edit
              </button>
              <button
              @click="openDeleteModal(user.id)"
              v-if="user.name"
                class="flex items-center justify-center p-4 bg-orange-700 text-white font-medium rounded-md h-8"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end mt-2">
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
import { useRouter } from "vue-router";
import DeleteModal from "../items/DeleteModal.vue";
import { useUserStore } from "@/stores/user";


const router = useRouter();
const showDeleteModal = ref(false);
const selectedId = ref(null);
const userStore = useUserStore();

const searchQuery = ref("");
const users = ref([
  { id: 1, name: "Andy", title: "Supervisor", year: "2020" },
  { id: 2, name: "Ryan", title: "Staff", year: "2021" },
  { id: 3, name: "Albert", title: "Staff", year: "2015" },
  { id: 4, name: "Angga", title: "Security", year: "2018" },
  { id: 5, name: "Budi", title: "Manager", year: "2019" },
  { id: 6, name: "Citra", title: "Assistant", year: "2022" },
  // { id: 7, name: "Dani", title: "Supervisor", year: "2021" },
  // { id: 8, name: "Eka", title: "Staff", year: "2017" },
  // { id: 9, name: "Faisal", title: "Security", year: "2020" },
  // { id: 10, name: "Gita", title: "Manager", year: "2016" },
]);

const filteredUsers = computed(() => {
  return users.value.filter((user) => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.year.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const displayUsers = computed(() => {
  const dataUsers = 10
  const emptyRows = Array(dataUsers - filteredUsers.value.length).fill({
    name: "",
    title : "",
    year: ""
  });

  return [...filteredUsers.value, ...emptyRows]
})

const openDeleteModal = (id) => {
  selectedId.value = id
  showDeleteModal.value = true
}

const handleDelete = () => {
  if(selectedId.value !== null){
    users.value = users.value.filter(user => user.id !== selectedId.value);
    showDeleteModal.value = false
    selectedId.value = null
  }
}

const handleEdit = (userId) => {
  const editData = users.value.find(user => user.id === userId)
  userStore.setEditData(editData);
  router.push(`/user/${userId}/edit`);
}

const toCreate = () => {
  router.push("/user/create")
}
</script>
