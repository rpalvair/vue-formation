<template>
  <button @click="inc">Add 1</button>
  <button @click="increase({ value: 2 })">Add 2</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']),
    ...mapActions('counterModule',{
        inc:'increment',
        increase:'increase'
    })
  },
};
</script>