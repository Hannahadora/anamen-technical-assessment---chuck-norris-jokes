<template>
  <div>
    <div class="m-card">
      <input type="text" v-model="search" @input="searchCategory" />
    </div>

    <div class="m-card" v-if="showDropdown">
      <div
        class="j-item"
        v-for="(category, idx) in items"
        :key="idx"
      >
        <p>
          {{ category || "uncategorized" }}
        </p>
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
const showDropdown = ref(true)

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

onMounted(async () => {
  await jokesStore.fetchJokes();
  jokes.value = jokesStore.jokes?.result;
  allAvailableCategories.value = jokes.value?.flatMap(
    (el) => el.categories + "-" + truncateSentence(el.value)
  );
});
</script>

<style scoped>
.m-card {
  border: 1px solid blue;
  background: #f9f9f9;
  padding: 12px;
}
.j-item {
  padding: 12px 4px;
}
</style>
