const randomFunc = (min, max) => {
  const heal = Math.floor(Math.random() * (max - min)) + min;
  return heal;
};

const app = Vue.createApp({
  data() {
    return {
      monsterJoni: 100,
      playerJoni: 100,

      atack: 0,
      atack2: 0,
    };
  },
  methods: {
    // attack started
    playerAttack() {
      
      this.monsterJoni = this.monsterJoni - randomFunc(5, 10);
      this.monsterAttack();
      this.atack++;
      this.atack2++;
    },
    monsterAttack() {
      this.playerJoni = this.playerJoni - randomFunc(7, 12);
    },

    // attack finished

    // SPECIAL ATTACK started

    superAttack() {
      this.atack = 0;
      this.monsterJoni = this.monsterJoni - randomFunc(10, 15);
      this.monsterAttack();
    },

    // SPECIAL ATTACK finished

    // PlayerHeal started

    PlayerHeal() {
      this.atack2 = 0;
      this.playerJoni = this.playerJoni + randomFunc(10, 15);
      this.monsterAttack();
    },

    // PlayerHeal finished

    // surender started
    surender() {
      this.playerJoni = 0;
    },
    // surender finished
  },
});
app.mount("#game");
