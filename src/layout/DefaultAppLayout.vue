<template>
  <div>
    <HeaderComponent />
    <Hero />
    <slot></slot>
    <FooterComponent />
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<style></style>
