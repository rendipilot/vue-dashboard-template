<template>
  <div class="mx-auto my-auto h-9/10 w-9/10 bg-blue-100 rounded-md p-4">
    <p class="text-black mb-4">-> Product -> Create User</p>
    <div>
      <h1 class="text-bold text-2xl mb-5">Create New User</h1>
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
        <p class="my-4">Title</p>
        <input
          type="text"
          placeholder="title"
          v-model="title"
          class="w-5/10 border-2 bg-white rounded-md p-2"
          :class="{
            'border-red-500': isWrong && !title,
            'border-blue-400': !isWrong || title,
          }"
        />
        <p class="my-4">Year Join</p>
        <div
          class="w-5/10 border-2 bg-white rounded-md"
          :class="{
            'border-red-500': isWrong && !year,
            'border-blue-400': !isWrong || year,
          }"
        >
        <VueDatePicker v-model="year" year-picker />
        </div>

        <div v-if="isWrong" class="text-red-500 mt-2">
          <p>All fields must be filled out.</p>
        </div>

        <div class="flex w-5/10 justify-end mt-6">
          <button type="submit" class="rounded-md bg-[#22177A] p-2 text-white font-semibold">
            Create User
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useUserStore } from "@/stores/user";

const router = useRouter();
const name = ref("");
const year = ref(new Date().getFullYear());
const title = ref("");
const userStore = useUserStore()
const editData = computed(() => userStore.editData)

const props = defineProps({
  isEdit: Boolean,
  id: String,
});

if(props.isEdit){
  name.value = editData.value.name,
  year.value = editData.value.year,
  title.value = editData.value.title
}

const isWrong = ref(false);

const sendData = () => {
  if (!name.value || !title.value || !year.value) {
    isWrong.value = true;
    return;
  }
  
  isWrong.value = false;
  router.push("/user");

};
</script>
