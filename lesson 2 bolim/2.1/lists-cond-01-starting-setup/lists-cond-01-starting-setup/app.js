const app = Vue.createApp({
  data() {
    return {
      goals: [],
      indexValue: "",
    };
  },
  methods: {
    createItems() {
      this.goals.push(this.indexValue);
      console.log(this.goals);
    },
    removeItems(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
