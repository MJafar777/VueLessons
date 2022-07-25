const app = Vue.createApp({
  data() {
    return {
      text: "Hello my Friend",
      outputs: "",
      outputs2: "",
    };
  },
  methods: {
    onClick() {
      alert(this.text);
    },
    output(e) {
      console.log(e);
      this.outputs = e.target.value;
    },
    output2(e) {
      console.log(e);
      this.outputs2 = e.target.value;
    },
  },
});
app.mount("#Jafar");
