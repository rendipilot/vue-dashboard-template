import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    editData: null
  }),
  actions: {
    setEditData(data) {
      this.editData = data;
    }
  }
});