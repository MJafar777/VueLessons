<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <label class="labels" for="Name"
        >Name :
        <input
          maxlength="20"
          type="text"
          v-model="userName"
          placeholder="Write Your Name..."
        />
      </label>
      <label class="labels" for="Age">
        Age :
        <input
          type="Number"
          v-model="userAge"
          placeholder="Write Your Age..."
        />
      </label>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: new Date().toISOString(),
      userName: "",
      userAge: "",
    };
  },
  methods: {
    submit() {
      if (
        (this.userName,
        this.userAge &&
          this.userAge > 1 &&
          this.userAge < 100 &&
          this.userName.length > 2)
      ) {
        this.$emit("info-user", this.userName, this.userAge, this.id);
        // this.userName = "";
        // this.userAge = "";
      } else {
        alert("sizda ma'lumot to'liq emas! , yoki qandaydir xatolik bor!");
      }
    },
  },
};
</script>

<style>
.form {
  padding-top: 30px;
}
.labels {
  color: white;
  font-size: 28px;
  font-family: sans-serif;
  margin: 40px;
}
.labels input {
  width: 250px;
  height: 40px;
  background-color: grey;
  color: white;
  padding: 5px;
  font-size: 20px;
}
.labels input::placeholder {
  color: white;
  font-size: 20px;
}
button {
  width: 100px;
  font-size: 20px;
  height: 40px;
}
</style>
