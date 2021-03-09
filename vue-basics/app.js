const App = {
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org",
    }
  },
  methods: {
    outputGoal: function () {
      const randomNum = Math.random()
      if (randomNum < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    },
  },
}

Vue.createApp(App).mount("#user-goal")
