<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <change-counter></change-counter>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },
  methods: {
    addOne() {
      //this.$store.commit('increase', { value: 11 });
      this.$store.commit({ type: 'increase', value: 1 });
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