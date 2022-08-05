<template>
  <div class="render">
    <div>
      <h2 class="userName">Name : {{ name }}</h2>
      <h2 class="userAge">age: {{ age }}</h2>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    func() {},
  },
};
</script>

<style>
.render {
}
</style>
