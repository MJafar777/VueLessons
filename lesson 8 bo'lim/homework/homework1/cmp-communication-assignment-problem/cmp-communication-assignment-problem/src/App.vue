<template>
  <div class="card">
    <user-data class="inputs" @info-user="userInfo"></user-data>

    <div class="br"></div>
    <active-user
      class="rendersInfo"
      v-for="(user, index) in users"
      :key="index"
      :id="user.id"
      :name="user.name"
      :age="user.age"
    ></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    userInfo(userName, userAge, id) {
      const obj = {
        name: userName,
        age: userAge,
        id: id,
      };
      this.users.push(obj);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: gray;
}
.card {
  /* display: flex; */
  align-items: center;
  justify-content: space-around;
  text-align: center;
}
.hr {
  height: 100vh;
  width: 5px;
  background-color: black;
}
.inputs {
  position: fixed;
  width: 100%;
  height: 10vh;
  background: #000;
}
.br {
  height: 110px;
}
.rendersInfo {
  margin-top: 10px;
}
</style>
