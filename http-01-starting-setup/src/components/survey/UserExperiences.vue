<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">
        Loading...
      </p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first.
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
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
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
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
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to reach the endpoint');
          }
        })
        .then(data => {
          this.isLoading = false;
          console.log('data', data);
          const tempList = [];
          for (const key in data) {
            tempList.push({
              id: key,
              name: data[key].name,
              rating: data[key].rating
            });
          }
          this.results = tempList;
          console.log('results', this.results);
        })
        .catch(err => {
          console.error('error', err);
          this.error = 'Failed to fetch data - please try again';
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.loadExperiences();
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
