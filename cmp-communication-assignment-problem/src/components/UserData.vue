<template>
  <form @click.prevent>
    <div>
      <label>Name :</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age :</label>
      <input type="text" v-model="enteredAge" />
    </div>
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
  watch: {
    enteredName() {
      emitUpdate(this)
    },
    enteredAge() {
      emitUpdate(this)
    },
  },
}
function emitUpdate(context) {
  const user = {
    name: context.enteredName,
    age: context.enteredAge,
  }
  console.log("update user", user)
  context.$emit("update", user)
}
</script>
