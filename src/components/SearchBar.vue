<template>
  <div>
    <div class="search-box">
      <input
        type="text"
        name=""
        id=""
        placeholder="how can we make you laugh today?"
        v-model="searchQuery"
        @input="setQuery"
      />
      <span>
        <img src="../assets/images/search_icon.png" alt="search_icon" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue-demi";
import { useJokesStore } from "../stores/jokes";

const searchQuery = ref("");
const jokesStore = useJokesStore()

const setQuery = () => {
  jokesStore.getSearchTerm(searchQuery)
}
</script>

<style scoped>
.search-box {width: 400px; border:1px solid #fff; border-radius: 4px; padding:10px 12px; margin-top: 60px; display: flex; align-content: center; justify-content: space-between; }
.search-box > input { all:unset; color: #fff;  font-family: 'Montserrat', sans-serif; font-weight: normal; width: 100%;}
.search-box > input::placeholder { all:unset; color: #fff; opacity: 0.8;  font-family: 'Montserrat', sans-serif; font-weight: normal; text-overflow: ellipsis;}
.search-box > span {max-width: 35px;}
.search-box > span > img { color: #fff; margin-left: 6px; width: 100%; }
/* MEDIA QUERIES */
@media (max-width: 767px) {
  .search-box {width: 320px; margin-left: 0; margin-right: 0;}
  .search-box { margin-top: 25px;  }
  .search-box > input::placeholder { font-size: 12px;}
}
</style>
