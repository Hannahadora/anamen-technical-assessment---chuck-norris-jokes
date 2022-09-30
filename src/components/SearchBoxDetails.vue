<template>
  <div>
   <div class="search-tooltip">
     <div class="search-box">
        <input
          type="text"
          name=""
          id=""
          placeholder="search any word"
          v-model="search"
          @input="searchCategory"
        />
        <span>
          <img
          src="../assets/images/scope_black.png"
            alt="search_icn"
          />
        </span>
      </div>
      <div class="tooltip-dropdown" v-if="showDropdown">
      <div class="triangle"></div>
       <div class="single-result" v-for="(category, idx) in items"
        :key="idx">
        <div><img src="../assets/images/flash_icon.png" alt="flash"></div>
        <h2 class="title"> {{ category || "uncategorized" }}</h2>
       </div>
    </div>
   </div>

  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue-demi";
import { useJokesStore } from "../stores/jokes";
const jokesStore = useJokesStore();

const jokes = ref([]);
const search = ref("");
const allAvailableCategories = ref([]);
const items = ref([]);
const showDropdown = ref(false)

watch(
  () => search.value,
  () => {
    if (search.value) {
        showDropdown.value = true
    } else {
        showDropdown.value = false;
    }
  }
);

const searchCategory = () => {
  if (search.value) {
   items.value = allAvailableCategories.value.filter((el) =>
      el.toLowerCase().includes(search.value)
    );
  }
};

const truncateSentence = (text) => {
  if (text) {
    return text.split(" ").slice(0, 4).join(" ") + "...";
  } else return "";
};

// const goToJoke = () => {
  // const el = jokes.value.find
// }

onMounted(async () => {
  await jokesStore.fetchJokes();
  jokes.value = jokesStore.jokes?.result;
  allAvailableCategories.value = jokes.value?.flatMap(
    (el) => el.categories + "-" + truncateSentence(el.value)
  );
});
</script>

<style scoped>
.search-box {width: 400px; background: #fff; color:#000; border:1px solid #fff; border-radius: 4px; padding:10px 12px; margin-top: 60px; display: flex; align-content: center; justify-content: space-between; }
.search-box > input { all:unset; color: #000;  font-family: 'Montserrat', sans-serif; font-weight: normal; width: 100%;}
.search-box > input::placeholder { all:unset; color: #000; opacity: 0.8;  font-family: 'Montserrat', sans-serif; font-weight: normal;}
.search-box > span {max-width: 20px;}
.search-box > span > img { margin-right: 12px; margin-left: 0px; width: 100%; }
.search-tooltip { position: relative;}
.tooltip-dropdown { height: 300px; overflow-y: scroll; position: absolute; border:1px solid #fff; background: #fff; margin-top: 20px; padding:2px 12px 20px 12px;  width: 100%; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; z-index:70;}
.single-result { display: flex; align-content: center; transition: 0.4s; border-bottom: 1px solid #dadada; padding-bottom: 12px; margin-top: 10px;}
.single-result:hover { transform: scaleX(0.95); transition: 0.4s; cursor: pointer; }
.single-result > div { max-width: 10px; margin-right: 10px; }
.single-result > div > img { width: 100%; margin-bottom: -5px;}
.single-result .title { white-space: nowrap; font-size: 16px; color:#303030; font-weight: normal !important;  }
.triangle { display: inline-block; vertical-align: middle; position: absolute; top:-8px; left: 7px; border-bottom: solid 10px #fff; border-left: solid 10px transparent; border-right: solid 10px transparent;}
/* MEDIA QUERIES */
@media (max-width: 767px) {
  .search-box {width: 320px; margin-left: 0; margin-right: 0;}
  .search-box { margin-top: 25px;  }
  .search-box > input::placeholder { font-size: 12px;}
  .search-box > span > img { margin-right: 12px; margin-left: 0px; }
}
</style>