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
    const id = this.$route.params.id;
    this.members = this.teams
      .filter(value => value.id === id)
      .flatMap(team => {
        this.teamName = team.name;
        return team.members;
      })
      .flatMap(membersId => {
        console.log('membersId', membersId);
        return this.users.filter(user => user.id === membersId);
      });
    console.log('members', this.members);
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
