const App = {
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org",
    }
  },
  methods: {
    outputGoal: function () {
      const randomNum = Math.random()
      if (randomNum < 0.5) {
        return "Learn Vue!"
      } else {
        return "Master Vue!"
      }
    },
  },
}

Vue.createApp(App).mount("#user-goal")
