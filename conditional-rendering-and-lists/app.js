const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalValue: null }
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
