import { defineStore } from 'pinia';

export const useTeamStore = defineStore('team', {
  state: () => ({
    editData: null
  }),
  actions: {
    setEditData(data) {
      this.editData = data;
    }
  }
});