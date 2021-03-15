function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getValueForAttack(object, value) {
  if (object - value <= 0) {
    return 0
  } else {
    return object - value
  }
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
      this.monsterHealth = getValueForAttack(this.monsterHealth, attackValue)
      this.attackPlayer()
      this.roundsCount++
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15)
      this.playerHealth = getValueForAttack(this.playerHealth, attackValue)
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25)
      this.monsterHealth = getValueForAttack(this.monsterHealth, attackValue)
      this.attackPlayer()
      this.roundsCount++
      this.specialAttackAvailable = false
    },
    healPlayer() {
      const healValue = getRandomValue(8, 20)
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += healValue
      }
      this.roundsCount++
      this.attackPlayer()
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
