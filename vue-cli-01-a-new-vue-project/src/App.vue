<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <add-friend @newFriend="newFriend"></add-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.name"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggleFavorite="toggleFavorite"
        @deleteFriend="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import AddFriend from "./components/AddFriend.vue"
import FriendContact from "./components/FriendContact.vue"
export default {
  components: { FriendContact, AddFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          isFavorite: false,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    }
  },
  methods: {
    toggleFavorite(id) {
      const list = { ...this.friends }
      const result = Object.values(list).map((obj) => {
        if (obj.id === id) {
          obj.isFavorite = !obj.isFavorite
        }
        return obj
      })
      this.friends = result
      console.log("friends", this.friends)
    },
    newFriend(friend) {
      console.log("newFriend", friend)
      this.friends.push(friend)
    },
    deleteFriend(id) {
      console.log("Id to delete", id)
      const friendToDelete = this.friends.find((value) => value.id == id)
      console.log("friendToDelete", friendToDelete)
      this.friends.splice(friendToDelete.id, 1)
    },
  },
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
</style>
