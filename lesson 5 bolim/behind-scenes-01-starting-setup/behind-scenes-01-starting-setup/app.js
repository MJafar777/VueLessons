const app = Vue.createApp({
//   data() {
//     return {
//       currentUserInput: "",
//       message: "Vue is great!",
//     };
//   },
//   methods: {
//     saveInput(event) {
//       this.currentUserInput = event.target.value;
//     },
//     setText() {
//       console.log(this.$refs.getText.value);
//       this.message = this.currentUserInput;
//     },
//   },

//   // template: `
//   //     <h2>How Vue Works</h2>
//   //     <input type="text" @input="saveInput" />
//   //     <button @click="setText">Set Text</button>
//   //     <p>{{ message }}</p>
//   // `,
});

app.mount("#app");

let data = {
  message: "Hello",
  currentUserInput: "",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.currentUserInput = value + "World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!";
console.log(proxy.currentUserInput);
