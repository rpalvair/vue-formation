const App = {
  data() {
    return {
      goals: [],
      enteredValue: "",
    }
  },
  methods: {
    addGoal() {
      console.log("addGoal")
      this.goals.push(this.enteredValue)
    },
  },
}
Vue.createApp(App).mount("#app")

// const buttonEl = document.querySelector("button")
// const inputEl = document.querySelector("input")
// const listEl = document.querySelector("ul")

// buttonEl.addEventListener("click", () => {
//   const enteredValue = inputEl.value
//   console.log("enteredValue", enteredValue)
//   const listItemEl = document.createElement("li")
//   listItemEl.textContent = enteredValue
//   listEl.appendChild(listItemEl)
//   inputEl.value = ""
// })
