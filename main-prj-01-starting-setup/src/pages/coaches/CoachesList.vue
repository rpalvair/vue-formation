<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      LIST OF COACHES
      <li v-for="coach in filteredCoaches" :key="coach.id">{{ coach }}</li>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),
    filteredCoaches() {
      return this.coaches;
    },
  },
};
</script>