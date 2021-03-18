<template>
  <base-card>
    <form @submit.prevent="addResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="description"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
export default {
  components: { BaseCard, BaseButton },
  emits: ['addResource'],
  inject: ['resources'],
  data() {
    return {
      title: '',
      description: '',
      link: ''
    };
  },
  methods: {
    addResource() {
      console.log('resources', this.resources);
      const newResource = {
        title: this.title,
        description: this.description,
        link: this.link,
        id: this.title.toLowerCase().replace(' ', '-')
      };
      console.log('newResource', newResource);
      this.resources.push(newResource);
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
