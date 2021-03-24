<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button to="/register" link>Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        LIST OF COACHES
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          v-bind="coach"
        >
        </coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from './CoachItem';
import BaseCard from '../../components/ui/BaseCard';
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { CoachItem, BaseCard, BaseButton },
  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),
    filteredCoaches() {
      return this.coaches;
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>