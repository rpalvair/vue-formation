<template>
  <div>
    <li>
      <div>
        <header>
          <h3>{{ title }}</h3>
          <button>Delete</button>
        </header>
      </div>
      <p>
        {{ description }}
      </p>
      <a :href="link">View resource</a>
    </li>
  </div>
</template>

<script>
export default {
  props: ['title','description','link']
};
</script>
