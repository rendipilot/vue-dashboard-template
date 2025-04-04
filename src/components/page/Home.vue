<template>
    <div class="mx-auto my-auto h-9/10 w-9/10 bg-blue-100 rounded-md p-4">
        <h2 class="font-medium text-2xl">Welcome to crud template dashbord</h2>
        <Vue3Lottie
            :animationData="adminAnimation"
            class="mx-auto"
        />
    </div>
</template>

<script Setup>
import {Vue3Lottie} from "vue3-lottie";
import adminAnimation from "@/assets/admin-animation.json"


export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      adminAnimation,
    }
  },
}
</script>