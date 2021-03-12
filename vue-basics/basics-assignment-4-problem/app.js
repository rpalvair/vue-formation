const app = Vue.createApp({
  data() {
    return {
      input: "",
      visible: false,
      color: ""
    }
  },
  computed: {
    getClasses() {
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        visible: this.visible,
        hidden: !this.visible,
      }
    },
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible
    },
  },
})

app.mount("#assignment")
