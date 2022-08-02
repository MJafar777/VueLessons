<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <add-friend @add-friend="addFriend"></add-friend>
    <ul>
      <friend-contact
        v-for="(friend, index) in friends"
        :key="index"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :best="friend.bestFriend"
        @change-friend="friendniTop"
        @del-friend="delF"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import addFriend from "./components/addFriend.vue";
export default {
  components: { addFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          bestFriend: false,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          bestFriend: false,
        },
      ],
    };
  },
  methods: {
    friendniTop(id) {
      let selectFriend = this.friends.find((val) => val.id === id);
      selectFriend.bestFriend = !selectFriend.bestFriend;
    },
    addFriend(name, phone, email) {
      const Obj = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        bestFriend: false,
      };
      this.friends.push(Obj);
    },
    delF(id) {
      const objDel = this.friends.filter((val) => val.id !== id);
      this.friends = objDel;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
input {
  display: block;
  margin: 5px auto;
}
label {
  font-weight: 600;
}
button {
  margin: 5px auto;
}
</style>
