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

function initialState() {
  return {
    playerHealth: 100,
    monsterHealth: 100,
    roundsCount: 0,
    specialAttackAvailable: false,
    win: false,
    gameOver: false,
    draw: false,
  }
}

const app = Vue.createApp({
  data() {
    return initialState()
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
    reload() {
      Object.assign(this.$data, initialState())
    },
    surrender() {
        this.gameOver = true
    }
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
    endMessage() {
      if (this.gameOver) {
        if (this.win) {
          return "You won!"
        } else if (this.draw) {
          return "It's a draw"
        } else {
          return "You lost!"
        }
      }
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.gameOver = true
        this.draw = true
      } else if (value <= 0) {
        console.log("Looser!")
        this.gameOver = true
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.gameOver = true
        this.draw = true
      } else if (value <= 0) {
        console.log("Winner!")
        this.win = true
        this.gameOver = true
      }
    },
  },
})

app.mount("#game")
