<template>
  <div>
    <div class="j-card">
      <div class="title-box">
        <div>
          <img src="../assets/images/flash_icon.png" alt="flash_icon" />
        </div>
        <h1 v-for="(category, idx) in joke.categories" :key="idx" class="title">
          {{ category }} Joke
        </h1>
        <h1 v-if="joke.categories.length === 0" class="title">
          Untitled Joke
        </h1>
      </div>
      <p class="joke-log">
        {{ joke.value }}
      </p>
      <div class="see-stats-wrapper">
        <div>&nbsp;</div>
        <div class="see-stats">
          <span>SEE STATS</span>
          <div class="forward-arrow">
            <img src="../assets/images/forward_arrow.png" alt="forward_arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JokeCard",
  props: {
    joke: { type: Object, required: true, default: {} },
  },
};
</script>

<style scoped>
.title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 4px;
}
.j-card { max-width: 300px; border-radius: 4px; height: 244px; position: relative; width: 100%; padding: 12px 12px 20px 12px; margin-bottom: 30px; transition: 0.4s; margin-right: 16px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; }
.j-card:hover { box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; cursor: pointer; transition: 0.4s;}
.title-box { display: flex; align-items: center; }
.title-box > div { max-width: 8px; margin-right: 6px; }
.title-box > div > img { width: 100%; }
.title-box .title { font-size: 20px; padding-bottom: 4px; }
.joke-log { font-size: 15px; height: 145px; overflow: hidden;}
.see-stats-wrapper { display: flex; align-items: center; justify-content: space-between; position: absolute; bottom:8px; right: 10px; }
.see-stats {display: flex; align-items: center; justify-content: space-between; }
.see-stats > span { color:#d0ba93; font-weight: bold !important;}
.forward-arrow { max-width: 19px ; margin-left: 10px;}
.forward-arrow > img { width: 100%; }
/* MEDIA QUERIES */
@media (max-width: 1024px) {
    .j-card {max-width: 100%; width: 100%; }
}
</style>
