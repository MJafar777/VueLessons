//  

const app = Vue.createApp({
  data() {
    return {
      goal: "I'm master in Vuejs",
      goal1: "I'm1 master in Vuejs",
      imgSrc:
        "data:image/jpeg;base64,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",
    };
  },
  methods: {
    outputMyFirsName() {
      return Math.round(Math.random() * 10);
    },
    printGoal() {
      return "mt name is Jafar" + this.goal;
    },
    changeGoal(){
      setTimeout(()=>{

      }, 200)
    }
  },
});

app.mount("#user-goal");
