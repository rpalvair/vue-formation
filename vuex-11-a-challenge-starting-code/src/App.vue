<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  provide() {
    return {
      removeProductFromCart: this.removeProductFromCart,
      login: this.login,
      logout: this.logout,
    };
  },
  methods: {
    ...mapActions(['login', 'logout', 'addProduct','removeProduct']),
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
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