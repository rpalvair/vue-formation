<template>
  <div>
    <base-card>
      <base-button @click="switchTab('stored-resources')"
        >Stored Resources</base-button
      >
      <base-button @click="switchTab('add-resource')">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
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
  methods: {
    switchTab(value) {
      this.selectedTab = value;
    }
  },
  provide() {
    return {
      resources: this.storedResources
    };
  }
};
</script>
