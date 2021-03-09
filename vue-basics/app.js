const App = {
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org",
    }
  },
}

Vue.createApp(App).mount("#user-goal")
