import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLoadingStore } from './loading';

import { jokesAPI } from '../api';


export const useJokesStore = defineStore("jokes", {
  state: () => {
    return {
      jokes: {},
      terms: {
        searchQuery: '',
        selectedCategory: "all"
      }
    };
  },

  getters: {
    filteredJokes: (state) => {
      let data = [];
      switch (state.terms.selectedCategory) {
        case "all":
          data = state.jokes.result;
          break;
        case "uncategorized":
          data = state.jokes.result.filter((el) => el.categories.length === 0);
          break;
        case state.terms.selectedCategory:
          data = state.jokes.result.filter((el) =>
            el.categories.includes(state.terms.selectedCategory)
          );
          break;
        default:
          data = state.jokes.result;
      }
    
      if (state.terms.searchQuery !== "") {
        return data.filter((el) =>
          el.value.toLowerCase().includes(state.terms.searchQuery.toLowerCase())
        );
      } else {
        return data;
      }
    },
    categories: (state) => {
      const availableCategories = state.jokes?.result?.flatMap((el) => el.categories)
      return [...new Set(availableCategories), "uncategorized",];
    }
  },

  mutations: {
  
  },

  actions: {

    async fetchJokes() {
      const loadingStore = useLoadingStore();
      const stopLoading = loadingStore.startRequest();

      try {
        const res = await jokesAPI.get('/search?query=all');
        this.jokes = res.data
        return res.data
      } finally {
        stopLoading();
      }
    },

    getCategory(data) {
      this.terms.selectedCategory = data
    },

    getSearchTerm(data) {
      this.terms.searchQuery = data
    }

  }
});

