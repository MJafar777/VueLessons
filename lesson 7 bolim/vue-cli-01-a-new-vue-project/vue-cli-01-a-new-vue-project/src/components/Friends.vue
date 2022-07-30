<template>
  <li>
    <h2>{{ friends.name }}</h2>
    <button @click="changeToggle">Show Details</button>
    <ul v-if="toggleInfo">
      <li><strong>Phone:</strong> {{ friends.phone }}</li>
      <li><strong>Email:</strong> {{ friends.email }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
