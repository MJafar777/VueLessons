const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          Email: "manuel@localhost.com",
        },
        {
          name: "Julie Jones",
          phone: "009876 543 221",
          Email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("qale", {
  data() {
    return {
      name: "Manuel Lorenz",
      phone: "01234 5678 991",
      Email: "manuel@localhost.com",

      templateOn: true,
    };
  },
  methods: {
    changeInBtn() {
      this.templateOn = !this.templateOn;
    },
  },
  template: `
  <li>
        <h2>{{this.name}}</h2>
        <button  @click="changeInBtn">Show Details</button>
        <ul v-if="templateOn">
          <li><strong>Phone:</strong> {{this.phone}}</li>
          <li><strong>Email:</strong> {{this.Email}}</li>
        </ul>
      </li>
  `,
});

app.mount("#app");
