<template>
  <base-card>
    <form @submit.prevent="submit">
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
    <base-dialog v-if="invalid" title="Invalid Input" @close="confirmError">
      <template #default>
          <p>
              Unfortunately, at least one input value is invalid.
          </p>
          <p>
              Please check all inputs and make sure you enter at least a few characters into each
              input field.
          </p>
      </template>
      <template #actions
        ><base-button @click="confirmError">Okay</base-button></template
      >
    </base-dialog>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseCard, BaseButton, BaseDialog },
  inject: ['addResource'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      invalid: false
    };
  },
  methods: {
    submit() {
      if (
        this.title.trim() === '' ||
        this.description.trim() === '' ||
        this.link.trim() === ''
      ) {
        this.invalid = true;
      } else {
        const newResource = {
          title: this.title,
          description: this.description,
          link: this.link,
          id: this.title.toLowerCase().replace(' ', '-')
        };
        this.addResource(newResource);
      }
    },
    confirmError() {
      this.invalid = false;
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
