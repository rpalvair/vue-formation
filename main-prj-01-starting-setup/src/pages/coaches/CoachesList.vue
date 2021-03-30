<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>
        {{ error }}
      </p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="filterUpdated"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <base-button
            to="/register"
            link
            v-if="isLoggedIn && !isCoach && !isLoading"
            >Register as Coach</base-button
          >
          <base-button v-if="!isLoggedIn" to="/auth?pageToRedirect=register" link mode="outline">Login</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="!isLoading && hasCoaches">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from './CoachItem';
import CoachFilter from './CoachFilter.vue';
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      isLoading: false,
      activeFilters: null,
      error: null,
    };
  },
  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches', 'isCoach']),
    filteredCoaches() {
      return this.coaches.filter((coach) => {
        if (this.activeFilters) {
          let keepCoach = false;
          Object.keys(this.activeFilters).map((key) => {
            if (
              !keepCoach &&
              this.activeFilters[key] &&
              coach.areas.includes(key)
            ) {
              keepCoach = true;
            }
          });
          return keepCoach;
        }
        return true;
      });
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    filterUpdated(filters) {
      this.activeFilters = filters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (e) {
        this.error = e.message || 'Something went wrong';
        console.log('error', e);
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCoaches();
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