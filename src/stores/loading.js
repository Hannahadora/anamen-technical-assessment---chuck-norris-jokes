import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => {
    return {
      loading: false,
    };
  },

  getters: {
    loadingState: (state) => state.loading === true,
  },

  actions: {
    startRequest() {
      this.loading = true;
      return () => {
        this.loading = false;
      };
    },
  },
});
