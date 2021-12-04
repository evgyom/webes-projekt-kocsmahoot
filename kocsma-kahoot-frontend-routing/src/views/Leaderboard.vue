<template>
  <div>
    <h2>Leaderboard</h2>
    <div v-if="!loaded">
      <h3>{{ this.loadingText }}</h3>
    </div>
    <div v-if="loaded">
      <ul class="list-of-quizzes">
        <li v-for="item in this.results" :key="item.id">
          <results-list-item
            :quizName="item.quizName"
            :count="item.count"
            :teams="item.teams"
          ></results-list-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ResultsListItem from "../components/ResultsListItem.vue";
let baseUrl = "";

export default {
  components: {
    ResultsListItem,
  },
  data() {
    return {
      loadingText: "Loading leaderboard ...",
      loaded: false,
      post: null,
      error: null,
      results: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(baseUrl + "/get-leaderboard");
        const message = await response.json();
        this.results = message.list;
        //Add a unique id for the quizzes
        var i = 0;
        for (const quiz of this.results) {
          quiz["id"] = i;
          i++;
        }
        console.log(this.results);
        this.loaded = true;
      } catch (err) {
        this.loadingText = "Can't load leaderboard. Drink a beer instead!";
        console.log(err);
      }
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