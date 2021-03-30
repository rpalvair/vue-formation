<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>
          {{ description }}
        </p>
      </base-card>
    </section>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      coach: null,
    };
  },
  computed: {
    contactLink() {
      return this.$route.path + '/contact';
    },
    fullName() {
      return this.coach.firstName + ' ' + this.coach.lastName;
    },
    rate() {
      return this.coach.hourlyRate;
    },
    areas() {
      return this.coach.areas;
    },
    description() {
      return this.coach.description;
    },
  },
  created() {
    const coaches = this.$store.getters['coaches/coaches'];
    console.log('coaches', coaches);
    this.coach = coaches.find((val) => val.id === this.id);
  },
};
</script>