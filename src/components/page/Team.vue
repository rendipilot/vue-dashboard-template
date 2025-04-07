<template>
  <div class="mx-auto my-auto h-9/10 w-9/10 bg-blue-100 rounded-md p-4">
    <p class="text-black mb-4">-> Team</p>
    <div class="flex justify-between">
      <button class="p-4 rounded-md bg-[#22177A] text-white font-medium">
        Add new team
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
            <th class="pl-4 flex-1 py-2 text-left border-r border-white">Name</th>
            <th class="pl-4 flex-1 py-2 text-left border-r border-white">Member</th>
            <th class="pl-4 flex-1 py-2 text-left border-r border-white">Division</th>
            <th class="pl-4 flex-1 py-2 text-left border-r border-white">Action</th>
          </tr>
        </thead>
        <tbody class="flex-1 flex flex-col">
          <tr v-for="(team, index) in displayTeams" :key="index" class="border border-gray-200 flex-1 flex items-center">
            <td class="pl-4 flex-1 py-2">{{ team.name || "" }}</td>
            <td class="pl-4 flex-1 py-2">{{ team.member || "" }}</td>
            <td class="pl-4 flex-1 py-2">{{ team.division || "" }}</td>
            <td class="pl-4 flex-1 py-2 flex gap-4">
              <button
              v-if="team.name"
                class="flex items-center justify-center p-4 bg-amber-300 text-white font-medium rounded-md h-8"
              >
                Edit
              </button>
              <button
              v-if="team.name"
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
import { computed, ref } from "vue";

const searchQuery = ref("");
const teams = ref([
  { id: 1, name: "Angelions", member: "1", division: "Marketing" },
  { id: 2, name: "Monyehoney", member: "2", division: "Logistic" },
  { id: 3, name: "bigsmurf", member: "2", division: "Warehouse" },
  { id: 4, name: "bulldog", member: "1", division: "Security" },
  { id: 5, name: "darkknight", member: "3", division: "HR" },
  { id: 6, name: "electro", member: "1", division: "IT" },
  // { id: 7, name: "skywalker", member: "2", division: "Finance" },
  // { id: 8, name: "whiteshadow", member: "3", division: "Legal" },
  // { id: 9, name: "phoenix", member: "1", division: "R&D" },
  // { id: 10, name: "blackhawk", member: "2", division: "Customer Service" },
]);

const filteredTeams = computed(() => {
  return teams.value.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    team.member.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    team.division.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const displayTeams = computed(() => {
  const dataTeams = 10;
  const emptyRows = Array(dataTeams - filteredTeams.value.length).fill({
    name: "",
    price: "",
    categery: ""
  });
  return [...filteredTeams.value, ...emptyRows]
})
</script>
