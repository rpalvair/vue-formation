const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    remove(num) {
      this.counter = this.counter - num
    },
    setName(event, name) {
      this.name = event.target.value
    },
    submitForm(event) {
      event.preventDefault()
      console.log("submitted")
    },
  },
})

app.mount("#events")
