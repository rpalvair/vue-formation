<template>
  <form>
    <div>
      <label>Name :</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age :</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <button @click.prevent="update">Update</button>
  </form>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {
      enteredName: this.name,
      enteredAge: this.age,
    }
  },
  methods: {
    update() {
      const user = {
        name: this.enteredName,
        age: this.enteredAge,
      }
      console.log("user", user)
      this.$emit("update", user)
    },
  },
}
</script>
