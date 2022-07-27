const randomNum = (min, max) => {
  const random = Math.floor(Math.random() * (max - min)) + min;
  return random;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      roundHeal: 0,
      winner: null,
      playerScore: 0,
      monsterScore: 0,
      logs: [],
    };
  },
  methods: {
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.roundHeal = 0;
      this.winner = null;
    },

    playerAttack() {
      this.round++;
      this.roundHeal++;
      this.logs;
      this.monsterHealth = this.monsterHealth - randomNum(5, 10);
      this.monsterAttack();
    },
    monsterAttack() {
      this.playerHealth = this.playerHealth - randomNum(7, 12);
    },

    SpecialAttack() {
      this.round = 0;
      this.monsterHealth = this.monsterHealth - randomNum(15, 20);
      setTimeout(() => {
        this.monsterAttack();
      }, 1000);
    },
    heal() {
      this.roundHeal = 0;
      if (this.playerHealth + randomNum(10, 15) > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + randomNum(10, 15);
        this.monsterAttack();
      }
    },
    surrender() {
      this.playerHealth = 0;
    },
  },
  computed: {
    playerHealthStyle() {
      return { width: this.playerHealth + "%" };
    },
    monsterHealthStyle() {
      return { width: this.monsterHealth + "%" };
    },
  },
  watch: {
    playerHealth(newData, oldData) {
      if (newData < 0) {
        this.winner = "Monster";
        this.monsterScore = this.monsterScore + 1;
      } else if ((newData = 0 && newData == this.monsterHealth)) {
        this.winner = "Draw";
      }
    },
    monsterHealth(newData, oldData) {
      if (newData < 0) {
        this.winner = "Player";
        this.playerScore = this.playerScore + 1;
      } else if ((newData = 0 && newData == this.playerHealth)) {
        this.winner = "Draw";
      }
    },
  },
});
app.mount("#game");
