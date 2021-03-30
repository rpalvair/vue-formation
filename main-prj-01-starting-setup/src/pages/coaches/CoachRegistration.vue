<template>
  <section>
    <h2>Register as a coach</h2>
    <coach-form @coach-added="addCoach"></coach-form>
  </section>
</template>
<script>
import CoachForm from './CoachForm.vue';
import { mapActions } from 'vuex';
export default {
  components: { CoachForm }, 
  methods: {
    ...mapActions('coaches', ['saveCoach']),
    addCoach(value) {
      console.log('addCoach', value);
      this.saveCoach(value);
      //   this.$router.push('/coaches')
      this.$router.replace('/coaches'); //no possibility to come back to the previous page
    },
  },
};
</script>