<template>
  <div>
    <div v-if="!loaded">
      <h2>Loading available quizzes...</h2>
    </div>
    <div v-if="loaded">
      <h2>Choose your Kocsmahoot!</h2>
      <ul class="list-of-quizzes">
        <li v-for="item in list_of_quizzes" :key="item.title">
          <quiz-list-item
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

export default {
  props: {},
  components: {
    QuizListItem,
  },
  data() {
    return {
      loaded: true,
      post: null,
      error: null,
      list_of_quizzes: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch("/quiz-list");
      const message = await response.json();
      this.list_of_quizzes = message.list;
      this.loaded = true;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  margin-top: 10px;
}
</style>
