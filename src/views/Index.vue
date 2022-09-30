<template>
  <default-app-layout>
    <div class="i-layout">
      <div class="btn-layout-wrapper">
        <div class="button-wrapper">
          <div
            class="btn-sub-wrapper"
            v-for="(btn, idx) in catergoryBtns"
            :key="idx"
          >
            <button-component
              @click="selectCategory(btn)"
              :title="`${btn} jokes`"
            />
          </div>
          <button-component
            :icon="ArrowDown"
            title="view all"
            v-if="btnsHidden"
            @click="toggleAvailableCategories(false)"
          />
          <button-component
            :icon="ArrowUp"
            title="show less"
            v-else
            @click="toggleAvailableCategories(true)"
          />
        </div>
      </div>

      <div>
        <div class="active-category-wrapper">
          <hr class="m-line" />
          <button class="active-category">
            {{ selectedCategory }} Jokes - {{ filteredJokes.length }} out of
            {{ totalJokes }}
          </button>
        </div>

        <div class="jokes-card-layout-wrapper">
          <JokeCard @click="$router.push(`/joke/${idx}/${joke.id}`)"
            v-for="(joke, idx) in filteredJokes.slice(0, pageTake)"
            :key="joke.id"
            :joke="joke"
          />
        </div>
      </div>

      <div v-if="busy" class="load-more-section">
        <img src="../assets/images/JVX7.gif" alt="" />
      </div>
    </div>
  </default-app-layout>
</template>

<script setup>
import CategorySearch from "../components/CategorySearch.vue";
import { computed, onMounted, onUnmounted, ref, watch } from "vue-demi";
import { useJokesStore } from "../stores/jokes";

import infiniteScroll from "vue-infinite-scroll";

import DefaultAppLayout from "../layout/DefaultAppLayout.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import ArrowDown from "../assets/images/arrow-down-thin.svg";
import ArrowUp from "../assets/images/arrow-up-thin.svg";
import JokeCard from "../components/JokeCard.vue";
import Loader from "../components/Loader.vue";

const jokesStore = useJokesStore();

const allJokes = ref([]);
const totalJokes = ref(0);
const btnsHidden = ref(true);
const availableCategories = ref([]);
const selectedCategory = ref("view all");
const catergoryBtns = ref([]);

const filteredJokes = ref([]);

const busy = ref(false);
const pageTake = ref(6);

watch(
  () => btnsHidden.value,
  () => {
    if (btnsHidden.value) {
      const rxx = availableCategories.value.slice(0, 8);
      catergoryBtns.value = rxx;
    } else {
      catergoryBtns.value = availableCategories.value.slice(
        0,
        availableCategories.value.length
      );
    }
  }
);

watch(
  () => jokesStore.terms.searchQuery,
  () => {
    filteredJokes.value = jokesStore.filteredJokes;
  }
);

const setData = () => {
  allJokes.value = jokesStore.jokes?.result;
  availableCategories.value = jokesStore.categories;
  totalJokes.value = allJokes.value?.length;
  catergoryBtns.value = availableCategories.value.slice(0, 8);
  filteredJokes.value = jokesStore.filteredJokes;
};

const selectCategory = (category) => {
  selectedCategory.value = category;
  jokesStore.getCategory(category);
  filteredJokes.value = jokesStore.filteredJokes;
};

const toggleAvailableCategories = (value) => {
  btnsHidden.value = value;
};

const loadMore = () => {
  // let count = pageTake++;
  // if (count >= filteredJokes.value.length) {
    busy.value = true;
    setTimeout(() => {
    filteredJokes.value.slice(0, pageTake.value++);
      busy.value = false;
    }, 7000);
  // }
};

onMounted(async () => {
  await jokesStore.fetchJokes();
  setData();
  window.addEventListener("scroll", loadMore);
});

onUnmounted(() => {
  window.removeEventListener("scroll", loadMore);
});
</script>

<style scoped>
.load-more-section {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: red;
  font-weight: medium;
  text-align: center;
  /* margin: 40px 0; */
  font-style: italic;
}
/* MEDIA QUERIES */
@media (max-width: 1024px) {
  .i-layout {
    margin: 0 0 0 16px;
  }
}
</style>
