<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: []
    };
  },
  methods: {
    loadExperiences() {
      fetch(
        'https://vue-http-demo-9d61e-default-rtdb.firebaseio.com/surveys.json',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(response => {
          console.log('response', response);
          return response.json();
        })
        .then(data => {
          console.log('data', data);
          const values = Object.values(data);
          this.results = values;
        });
    }
  },
  mounted() {
    this.loadExperiences()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
