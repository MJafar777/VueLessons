const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      changeNum: 0,
      name: "",
      age: "",
    };
  },
  methods: {
    add() {
      this.counter = this.counter + this.ChangeNum;
    },
    remove() {
      this.counter = this.counter - this.ChangeNum;
    },
    reset() {
      this.counter = 0;
    },
    getInputVal(val) {
      this.ChangeNum = +val.target.value;
    },
    getName(val) {
      this.name = val.target.value;
    },
    getAge(val) {
      this.age = val.target.value;
    },
    printText() {
      if (this.name && this.age) {
        return `my name is ${this.name} . My Age is ${this.age}`;
      }
      return;
    },
    clickBtn() {
      this.printText;
    },
  },
});

app.mount("#events");
