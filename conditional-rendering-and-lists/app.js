const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalValue: null }
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue) {
        console.log("add goal", this.enteredGoalValue)
        this.goals.push(this.enteredGoalValue)
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    },
  },
})

app.mount("#user-goals")
