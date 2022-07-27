const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      taskArr: [],
      dehidden: true,
    };
  },
  methods: {
    renderArr() {
      this.taskArr.push(this.inputValue);
    },
    hidden() {
      return !dehidden;
      
    },
  },
});
app.mount("#assignment");
