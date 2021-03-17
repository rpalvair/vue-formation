<template>
  <form>
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="phone" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="email" />
    </div>
    <div>
      <label>Is Favorite ?</label>
      <input type="checkbox" v-model="isFavorite" />
    </div>
    <button @click.prevent="addFriend">Add friend</button>
  </form>
</template>

<script>
export default {
  emits: ["newFriend"],
  data() {
    return {
      id: "",
      name: "",
      phone: "",
      email: "",
      isFavorite: false,
    }
  },
  methods: {
    addFriend() {
      const friend = {
        id: this.name.split(' ')[0],
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      }
      console.log("friend", friend)
      this.$emit("newFriend", friend)
    },
  },
}
</script>
