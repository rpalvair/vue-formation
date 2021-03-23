<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <change-counter></change-counter>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  methods: {
    addOne() {
      this.$store.commit('increase', { value: 11 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>