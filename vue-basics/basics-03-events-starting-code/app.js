const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
    }
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return ""
      }
      return this.name + "" + "Palvair"
    },
    add(num) {
      this.counter = this.counter + num
    },
    remove(num) {
      this.counter = this.counter - num
    },
    submitForm() {
      console.log("submitted")
    },
    resetInput() {
      this.name = ""
    },
  },
})

app.mount("#events")
