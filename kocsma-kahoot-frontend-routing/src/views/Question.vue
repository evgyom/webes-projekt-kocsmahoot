<template>
  <div>
    <div v-if="!loaded">
      <h2>{{ this.loadingText }}</h2>
    </div>
    <div v-if="loaded">
      <question-item v-bind:questions="this.questions"> </question-item>
    </div>  
  </div>
</template>

<script>

import QuestionItem from "../components/QuestionItem.vue";

let baseUrl = "";

export default {
  components: {
    QuestionItem,
  },
  data() {
    return {
      loadingText: "Loading questions",
      loaded: false,
      post: null,
      error: null,
      questions: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    console.log("Fetching questions...")
    this.fetchQuestions();
  },
  methods: {
    async fetchQuestions() {
      try {
        const response = await fetch(baseUrl + "/quiz-questions");
        const message = await response.json();
        this.questions = message.list;
        console.log(this.questions)
        console.log(this.questions[0]["question"])
        this.loaded = true;
        console.log("loaded questions")
      } catch (err) {
        this.loadingText = "Can't load questions. Drink a beer instead!";
        console.log(err);
      }
    },
  },
};
</script>


<style>

</style>