function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      roundsCount: 0,
      specialAttackAvailable: false,
    }
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12)
      this.monsterHealth -= attackValue
      this.attackPlayer()
      this.roundsCount++
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15)
      this.playerHealth -= attackValue
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25)
      this.monsterHealth -= attackValue
      this.attackPlayer()
      this.specialAttackAvailable = false
    },
  },
  computed: {
    getPlayerHealthBarStyle() {
      return {
        width: this.playerHealth + "%",
      }
    },
    getMonsterHealthBarStyle() {
      return {
        width: this.monsterHealth + "%",
      }
    },
    disableSpecialAttack() {
      const isModulo = this.roundsCount !== 0 && this.roundsCount % 3 === 0
      if (isModulo) {
        this.specialAttackAvailable = true
      }
      return !this.specialAttackAvailable && !isModulo
    },
  },
})

app.mount("#game")
