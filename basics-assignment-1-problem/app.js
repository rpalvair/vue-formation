const App = {
  data() {
    return {
      age: 35,
      name: "Ruddy",
      randomNumber: Math.random(),
      image: "https://miro.medium.com/max/700/1*TmH8vgRfnUsLxaw0LHgyig.png",
    }
  },
  methods: {
    getAgeIn(num) {
      return this.age + num
    },
    getRandomNumber() {
      return Math.random()
    },
  },
}

Vue.createApp(App).mount("#assignment")
