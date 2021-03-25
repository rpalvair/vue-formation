<template>
  <section>
    <base-card>
      <header>
        <h2>Request Received</h2>
      </header>
      <ul>
        <request-item v-for="request in requests" :email="request.userEmail" :message="request.message" :key="request.id">
        </request-item>
      </ul>
      <h3 v-if="!hasRequests">You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import RequestItem from './RequestItem';
export default {
  components: { RequestItem },
  computed: {
    ...mapGetters('requests', ['hasRequests']),
    requests() {
      const requests = this.$store.getters['requests/requests'];
      console.log('requests', requests);
      return requests;
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>