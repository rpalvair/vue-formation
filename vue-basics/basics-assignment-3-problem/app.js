const app = Vue.createApp({
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    add(value) {
      console.log(`add ${value}`)
      this.number = this.number + value
      console.log("number", this.number)
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet"
      } else if (this.number === 37) {
        return this.number
      } else {
        return "Too much!"
      }
    },
  },
  watch: {
    result() {
      console.log("result change")
      const that = this
      setTimeout(function () {
        that.number = 0
      }, 5000)
    },
  },
})

app.mount("#assignment")
