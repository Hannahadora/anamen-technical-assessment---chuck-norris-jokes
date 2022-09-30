<template>
  <div class="hero-bg">
    <img src="@/assets/images/hero_bg.png" alt="" />
    <div class="hero-content-wrapper">
      <div class="hero-content">
        <div>
          <div>
            <h1 class="title">The Joke Bible</h1>
            <p class="desc">Daily Laughs for you and yours</p>
          </div>
          <SearchBoxDetails v-if="$route.path.includes('joke')" />
          <SearchBar v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBar from "../components/SearchBar.vue";
import SearchBoxDetails from "../components/SearchBoxDetails.vue";
</script>

<style scoped>
.hero-bg {
  position: relative;
}
.hero-bg > img {
  width: 100%;
  display: block;
  min-height: 300px;
}
.hero-bg .hero-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.hero-bg .hero-content-wrapper .hero-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-bg .hero-content-wrapper .hero-content .title {
  text-align: center;
  font-size: 40px;
  color: #d0ba93;
  font-weight: normal;
}
.hero-bg .hero-content-wrapper .hero-content .desc {
  color: #fff;
  text-align: center;
  font-size: 19px;
  padding-top: 6px;
}
/* MEDIA QUERIES */
@media (max-width: 767px) {
  .hero-bg > img {
    width: 100%;
    display: block;
    min-height: 200px;
  }
  .hero-bg .hero-content-wrapper .hero-content .title {
    font-size: 18px;
  }
  .hero-bg .hero-content-wrapper .hero-content .desc {
    font-size: 15px;
  }
}
</style>
Footer
