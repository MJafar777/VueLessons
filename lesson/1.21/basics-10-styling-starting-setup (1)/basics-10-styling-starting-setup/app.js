const app = Vue.createApp({
  data() {
    return {
      color: "",
      boxA: false,
    };
  },
  methods: {
    changeColor() {
      this.color = `#${Math.round(Math.random() * 999999)}`;
      console.log(this.color);
    },
    selectBoxA(val) {
      if (val === "A") {
        this.color = !this.boxA;
      }
    },
  },
  computed: {
    addStileA() {
      return { active: this.boxA };
    },
  },
});

app.mount("#styling");
