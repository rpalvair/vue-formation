<template>
  <div>
    <li>
      <base-card>
        <div>
          <header>
            <h3>{{ title }}</h3>
            <base-button mode="flat" @click="deleteResource(id)"
              >Delete</base-button
            >
          </header>
        </div>
        <p>
          {{ description }}
        </p>
        <a :href="link">View resource</a>
      </base-card>
    </li>
  </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard';
export default {
  components: { BaseButton, BaseCard },
  props: ['title', 'description', 'link', 'id'],
  inject: ['deleteResource']
};
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
