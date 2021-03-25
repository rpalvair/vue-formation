<template>
  <section>
    <h2>Register as a coach</h2>
    <coach-form @coach-added="addCoach"></coach-form>
  </section>
</template>
<script>
import CoachForm from './CoachForm.vue';
export default {
  components: { CoachForm },
  methods: {
    addCoach(value) {
      console.log('addCoach', value);
    },
  },
};
</script>