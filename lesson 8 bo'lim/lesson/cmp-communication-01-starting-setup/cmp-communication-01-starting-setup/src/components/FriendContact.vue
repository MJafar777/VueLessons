<template>
  <li>
    <h2>{{ name }} {{ best ? " Best friend" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <hr />
    <button @click="friend">{{ best ? "remove" : "add" }} the Friend?</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <hr />
    <button @click="deleteFriend">delete</button>
  </li>
</template>

<script>
export default {
  emits: ["change-friend"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    best: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,

      friendMy: "the best friend",
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    friend() {
      this.$emit("change-friend", this.id);
    },
    deleteFriend() {
      this.$emit("del-friend", this.id);
    },
  },
};
</script>
