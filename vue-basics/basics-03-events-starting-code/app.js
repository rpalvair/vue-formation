const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      fullname: ""
    }
  },
  computed: {
    // fullname() {
    //   if (this.name === "") {
    //     return ""
    //   }
    //   return this.name + "" + "Palvair"
    // }
  },
  watch: {
    name() {
      console.log("name changed")
      this.fullname = this.name + " " + "Palvair"
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
