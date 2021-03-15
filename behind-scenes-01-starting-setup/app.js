const app = Vue.createApp({
  beforeCreate() {
    console.log("before create")
  },
  created() {
    console.log("created")
  },
  beforeUpdate() {
    console.log("before update")
  },
  updated() {
    console.log("updated")
  },
  beforeMount() {
    console.log("before mount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUnmount() {
    console.log("before unmount")
  },
  unmounted() {
    console.log("unmounted")
  },
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    }
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value
    },
    setText() {
      // this.message = this.currentUserInput
      this.message = this.$refs.inputText.value
    },
  },
})

app.mount("#app")

setTimeout(function() {
  app.unmount()
}, 3000)


const app2 = Vue.createApp({
  template: `
  <p>{{favoriteMeal}}</p>
  `,
  data() {
    return {
      favoriteMeal: "Salad",
    }
  },
})
app2.mount("#app2")
