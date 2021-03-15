const app = Vue.createApp({
  data() {
    return { goals: ["Finish the course!"], enteredGoalValue: null }
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue) {
        console.log("add goal",this.enteredGoalValue)
        this.goals.push(this.enteredGoalValue)
      }
    },
  },
})

app.mount("#user-goals")
