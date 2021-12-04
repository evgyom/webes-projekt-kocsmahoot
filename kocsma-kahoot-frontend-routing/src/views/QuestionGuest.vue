<template>
  <div>
    <div v-if="!loaded">
      <h2>{{ this.loadingText }}</h2>
    </div>
    <div v-if="loaded">
      <question-item v-bind:inputQuestions="this.questions"> </question-item>
    </div>
  </div>
</template>

<script>
import QuestionItem from "../components/QuestionItem.vue";

export default {
  components: {
    QuestionItem,
  },
  data() {
    return {
      loadingText: "Loading questions.",
      loaded: false,
      post: null,
      error: null,
      questions: null,
    };
  },
  created() {
    //Load questions from Vuex
    try {
      this.questions = this.$store.getters.getQuestions;
      this.loaded = true;
    } catch (err) {
      this.loadingText = "Can't load questions. Drink a beer instead!";
      console.log(err);
    }
  },
};
</script>


<style>
</style>