<template>
  <div class="myButton">
    <h1 @click="updateSelectedScreen">{{ label }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    label: { required: true, type: String },
    type: {required: true, type: Number}
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
  background-color: lightgrey;
  color: white;
  display: block;
  position: relative;
  text-align: center;
}

h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: white;
  opacity: 0;
  transition:  opacity 300ms, transform 300ms;
}

h1:hover::after,
h1:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}

</style>