<template>
  <div>
    <active-user v-bind="user"></active-user>
    <user-data v-bind="user" @update="update"></user-data>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue"
import UserData from "./components/UserData.vue"
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      user: {
        name: "Ruddy",
        age: "35",
      },
    }
  },
  methods: {
    update(user) {
      console.log("user updated", user)
      this.user = user
    },
  },
}
</script>
