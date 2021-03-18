<template>
  <div>
    <base-card>
      <base-button
        @click="switchTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button @click="switchTab('add-resource')" :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';
export default {
  components: { BaseButton, BaseCard, AddResource, StoredResources },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com'
        }
      ]
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    switchTab(value) {
      this.selectedTab = value;
    },
    addResource(resource) {
      console.log('storedResources', this.storedResources);
      console.log('newResource', resource);
      this.storedResources.unshift(resource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(id) {
      console.log('delete resource with id', id);
      const indexToDelete = this.storedResources.findIndex(
        res => res.id === id
      );
      console.log('indexToDelete', indexToDelete);
      this.storedResources.splice(indexToDelete, 1);
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  }
};
</script>
