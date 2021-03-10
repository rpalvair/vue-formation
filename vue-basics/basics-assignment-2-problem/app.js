const app = Vue.createApp({
  data() {
    return {
        output1: "",
        output2: ""
    }
  },
  methods: {
    showAlert() {
      alert("button clicked!")
    },
    onKeyDown(event) {
        this.output1 = event.target.value
    },
    onEnter(event) {
        this.output2 = event.target.value
    }
  },
})

app.mount("#assignment")
