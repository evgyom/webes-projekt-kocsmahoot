<template>
  <div>
    <div v-if="!loaded">
      <h2>{{ this.loadingText }}</h2>
    </div>
    <div v-if="loaded">
      <question-guest-item v-bind:inputQuestions="this.questions"> </question-guest-item>
    </div>
  </div>
</template>

<script>
import QuestionGuestItem from "../components/QuestionGuestItem.vue";

export default {
  components: {
    QuestionGuestItem,
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
      console.log("Question guest view lodaded the questions.", this.questions)
      this.loaded = true;
    } catch (err) {
      this.loadingText = "Can't load questions. Drink a beer instead!";
      console.log(err);
    }
  },
};
</script>


<style scoped>
</style>