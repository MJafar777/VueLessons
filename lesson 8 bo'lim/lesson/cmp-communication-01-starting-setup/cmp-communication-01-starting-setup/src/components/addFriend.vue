<template>
  <section>
    <form @submit.prevent="addFriend">
      <label>Name: <input v-model="name" type="text" /></label>
      <label>Phone: <input v-model="phone" type="number" /></label>
      <label>Email: <input v-model="email" type="email" /></label>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  emit: ["add-friend"],
  methods: {
    addFriend() {
      if (this.name && this.phone && this.email) {
        this.$emit("add-friend", this.name, this.phone, this.email);
        this.name = "";
        this.phone = "";
        this.email = "";
      } else {
        alert("siz malumotni to'liq kiritishingiz shart!");
      }
    },
  },
};
</script>

<style></style>
