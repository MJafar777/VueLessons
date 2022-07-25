const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      console.log("methods");
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log("methods");
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
  computed: {
    onCount() {
      return this.counter;
    },
    onChange() {
      console.log("computed");
      return this.name;
    },
  },
  watch: {
    name(newData, oldData) {
      return newData + " Mirzaraximov";
    },
  },
});

app.mount("#events");
