<template>
    <div class="mx-auto my-auto h-9/10 w-9/10 bg-blue-100 rounded-md p-4">
      <div class="flex justify-between">
        <button class="p-4 rounded-md bg-[#22177A] text-white font-medium">
          Add new team
        </button>
        <input
          type="text"
          placeholder="Search..."
          class="p-2 rounded-md w-64 bg-white"
        />
      </div>
      <div class="h-8/10 mt-6 bg-white rounded-md">
        <table class="min-w-full overflow-hidden rounded-md">
          <thead>
            <tr class="bg-[#22177A] text-white">
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Member</th>
              <th class="px-4 py-2 text-left">Division</th>
              <th class="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="team in filteredTeams" :key="team.id">
              <td class="px-4 py-2">{{ team.name }}</td>
              <td class="px-4 py-2">{{ team.member }}</td>
              <td class="px-4 py-2">{{ team.division }}</td>
              <td class="px-4 py-2 flex gap-4">
                <button class="flex items-center justify-center p-4 bg-amber-300 text-white font-medium rounded-md h-8">Edit</button>
                <button class="flex items-center justify-center p-4 bg-orange-700 text-white font-medium rounded-md h-8">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end mt-4">
        <nav
          aria-label="Pagination"
        >
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
  
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        teams: [
          { id: 1, name: 'Angelions', member: '1', division: 'Marketing' },
          { id: 2, name: 'Monyehoney', member: '2', division: 'Logistic' },
          { id: 3, name: 'bigsmurf', member: '2', division: 'Warehouse' },
          { id: 4, name: 'bulldog', member: '1', division: 'Security' }
        ]
      };
    },
    computed: {
      filteredTeams() {
        return this.teams.filter(team =>
          team.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    }
  };
  </script>