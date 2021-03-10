const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    remove(num) {
      this.counter = this.counter - num
    },
    submitForm() {
      console.log("submitted")
    },
    confirmName() {
      this.confirmedName = this.name
    },
    resetInput() {
      this.name = ""
    }
  },
})

app.mount("#events")
