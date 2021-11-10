
<template>
  <div class="quiz-list-item">
    <h1>{{ title }}</h1>
    <p>{{description}} </p>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    description: {required: true, type: String}
  },
  methods: {
        updateSelectedScreen() {
          this.$emit('updated-selected-screen', this.type);
        },
  },
};
</script>

<style scoped>

h1 {
  font-size: 2rem;
  color: white;
  display: block;
  position: relative;
  text-align: left;
}

</style>