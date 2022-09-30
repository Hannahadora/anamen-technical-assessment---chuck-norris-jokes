<template>
  <div>
    <DefaultAppLayout>
      <JokeDetails
        v-if="jokes"
        :joke="joke"
        :jokeIndex="$route.params.idx"
        :selectedCategory="jokesStore.terms.selectedCategory"
      />
    </DefaultAppLayout>
  </div>
</template>

<script setup>
import DefaultAppLayout from "../layout/DefaultAppLayout.vue";
import JokeDetails from "../components/JokeDetails.vue";
import { computed, onMounted, reactive, ref } from "vue-demi";
import { useJokesStore } from "../stores/jokes";
import { useRoute } from "vue-router";

const jokesStore = useJokesStore();
const jokes = ref([]);
const route = useRoute();

const joke = computed(() => {
  return jokes.value.find((joke) => joke.id === route.params.id);
});

onMounted(async () => {
  await jokesStore.fetchJokes();
  jokes.value = jokesStore.jokes.result;
});
</script>

<style></style>
