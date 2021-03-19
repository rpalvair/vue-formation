<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go To Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: 'Test',
      members: []
    };
  },
  created() {
    this.members = this.loadTeamMembers(this.$route);
    console.log('members', this.members);
  },
  methods: {
    loadTeamMembers(route) {
      const id = route.params.id;
      return this.teams
        .filter(value => value.id === id)
        .flatMap(team => {
          this.teamName = team.name;
          return team.members;
        })
        .flatMap(membersId => {
          console.log('membersId', membersId);
          return this.users.filter(user => user.id === membersId);
        });
    }
  },
  watch: {
    $route(newRoute) {
      this.members = this.loadTeamMembers(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
