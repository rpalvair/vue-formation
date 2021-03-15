const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
      show: true,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue)
    },
    toggle() {
      this.show = !this.show
    },
  },
  computed: {
    getMessage() {
          if(this.show) {
              return "Hide"
          } else {
            return "Show List" 
          }
      }
  }
})

app.mount("#assignment")
