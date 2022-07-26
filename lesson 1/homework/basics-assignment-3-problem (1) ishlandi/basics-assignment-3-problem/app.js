const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    coundAddFive() {
      this.count = this.count + 5;
      setTimeout(() => {
        this.count = 0;
      }, 5000);
    },
    countAddOne() {
      this.count++;
      setTimeout(() => {
        this.count = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.count < 37) {
        return "Not there yet";
      } else if (this.count > 37) {
        return "Too much!";
      } else if ((this.count = 37)) {
        return this.count;
      }
      return;
    },
  },
});

app.mount("#assignment");
