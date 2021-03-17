<template>
  <ul>
    <learning-resource
      :key="resource.id"
      v-for="resource in storedResources"
      v-bind="resource"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  components: {
    LearningResource
  },
  props: ['storedResources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>