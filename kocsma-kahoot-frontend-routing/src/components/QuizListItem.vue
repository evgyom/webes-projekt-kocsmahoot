
<template>
  <div class="quiz-list-item">
    <div>
      <h2>{{ title }}</h2>
      <button>Start this quiz</button>
      <button @click="ToggleShowDescription">{{ ShowDescriptionText }}</button>
    </div>
    <p v-if="ShowDescription">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    description: { required: true, type: String },
  },
  methods: {
    ToggleShowDescription() {
      console.log("Showdescription value", this.ShowDescription)
      this.ShowDescription = !this.ShowDescription;
      if (this.ShowDescription) {
        this.ShowDescriptionText = "Hide description";
      } else {
        this.ShowDescriptionText = "Show description";
      }
    },
  },
  data() {
    return {
      ShowDescription: false,
      ShowDescriptionText: "Show description",
    };
  },
};
</script>

<style scoped>
.quiz-list-item {
  background-color: lightgrey;
  border-color: white;
  border-width: 2px;
  display: block;
  width: 60%;
  margin: auto;
}

.quiz-list-item div {
  display: flex;
}

button {
  height: 2rem;
  font-size: 1rem;
  flex: 1;
}

h2 {
  font-size: 2rem;
  color: white;
  display: block;
  position: relative;
  text-align: left;
  flex: 5;
  margin: 0;
}
</style>