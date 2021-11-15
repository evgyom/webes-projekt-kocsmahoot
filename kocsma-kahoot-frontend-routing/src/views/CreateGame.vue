<template>
  <div>
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
</template>

<script>
import QuizListItem from "../components/QuizListItem.vue";
import list_of_quizzes_json from "../assets/dummy_list_of_quizzes.json";

export default {
  props: {},
  components: {
    QuizListItem,
  },
  data() {
    return {
      list_of_quizzes: list_of_quizzes_json,
    };
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
