const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      fullname: "",
      lastName: "",
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
    name(value, oldValue) {
      console.log("name changed")
      if (value === "") {
        this.fullname = ""
      } else {
        this.fullname = value + " " + this.lastName
      }
    },
    lastName() {
      if (value === "") {
        this.fullname = ""
      } else {
        this.fullname = this.name + " " + value
      }
    },
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
