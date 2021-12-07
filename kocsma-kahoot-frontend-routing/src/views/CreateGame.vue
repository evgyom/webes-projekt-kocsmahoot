<template>
  <div>
    <div v-if="!loaded">
      <h2>{{ this.loadingText }}</h2>
    </div>
    <div v-if="loaded">
      <h2>Choose your Kocsmahút!</h2>
      <ul class="list-of-quizzes">
        <li v-for="item in listOfQuizzes" :key="item.title">
          <quiz-list-item
            :quizID="item.id"
            :title="item.title"
            :description="item.description"
          ></quiz-list-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import QuizListItem from "../components/QuizListItem.vue";
let baseUrl = "";

export default {
  components: {
    QuizListItem,
  },
  props: {},
  data() {
    return {
      loadingText: "Loading available quizzes...",
      loaded: false,
      listOfQuizzes: null,
    };
  },
  created() {
    //Load data, when the view is created
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(baseUrl + "/quiz-list");
        const message = await response.json();
        this.listOfQuizzes = message.list;
        this.loaded = true;
      } catch (err) {
        this.loadingText = "Can't load quiz list. Drink a beer instead!";
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin-bottom: 100px;
}

li {
  margin-top: 10px;
}
</style>
