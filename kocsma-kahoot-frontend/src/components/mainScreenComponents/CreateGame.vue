<template>
  <div class="enter-pin-component">
    <h1>Choose your Kocsmahoot</h1>
    <ul class="list-of-quizzes">
      <li v-for="item in list_of_quizzes" :key="item.title">
        <quiz-list-item :title="item.title" :description="item.description"></quiz-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import QuizListItem from "../smallItems/QuizListItem.vue";

import list_of_quizzes_json from "../../assets/dummy_list_of_quizzes.json";
//list_of_quizzes_json.forEach(x => { console.log(x.title, x.description); });

export default {
  props: {},
  components: {
      QuizListItem
  },
  data() {
    return {
      list_of_quizzes: list_of_quizzes_json,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  text-align: center;
  margin-top: 5 px;
}

.pin-enter-form {
  display: flex;
  margin: auto;
  width: 50%;
}

.pin-enter-form input {
  flex: 5;
  height: 3rem;
  font-size: 3rem;
}

.pin-enter-form button {
  flex: 1;
  height: 3rem;
  font-size: 3rem;
}

p {
  font-size: 1rem;
  text-align: center;
  margin-top: 5 px;
}
</style>
