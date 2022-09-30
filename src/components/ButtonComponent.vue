<template>
  <button class="button-styles" @click="$emit('click')">
    {{ title }}
    <img v-if="icon" :src="icon" class="btn-icon" />
  </button>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    icon: { type: String, default: "", required: false },
  },
};
</script>

<style>
.button-styles {
  all: unset;
  cursor: pointer;
  padding: 14px;
  margin: 0 20px 20px 0;
  text-align: center;
  background: transparent;
  border: 1px solid #d0ba93;
  border-radius: 3px;
  width: 150px;
  font-size: 16px;
  text-transform: capitalize;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-icon {
  margin-left: 24px;
  width: 24px;
}

@media (max-width: 1024px) {
  .button-styles {
    width: 130px;
    font-size: 14px;
    padding: 8px;
  }
}
</style>
