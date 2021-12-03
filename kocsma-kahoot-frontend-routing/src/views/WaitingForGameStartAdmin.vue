<template>
  <div id="holder">
    <div v-if="!loaded">
      <h2>{{ this.loadingText }}</h2>
    </div>
    <div v-if="loaded">
      <h2>Waiting for guests to join.</h2>
      <h2>PIN: {{ PIN }}</h2>
      <div id="spinner-holder">
        <half-circle-spinner
          id="spinner"
          :animation-duration="1000"
          :size="120"
          :color="'#000000'"
        />
      </div>
      <div id="buttons-holder">
        <button id="start-button">
          <router-link style="text-decoration: none" to="/question"
            >Start</router-link
          >
        </button>
        <button @click="navigateBack" id="cancel-button">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";

export default {
  components: {
    HalfCircleSpinner,
  },
  beforeRouteLeave(to, from, next) {
    console.log(to.path);
    if (to.path == "/question") {
      next();
    } else {
      const answer = window.confirm("Do you really want to leave?");
      if (answer) {
        next();
        this.$store.commit("unsetGameStarted");
      } else {
        next(false);
      }
    }
  },
  data() {
    return {
      PIN: null,
    };
  },
  created() {
    //Add the question ID to vuex
    this.$store.commit("setQuizID", $route.params.quizID);
    this.fetchQuestionsAndPIN();
  },
  methods: {
    navigateBack() {
      history.back();
    },
    async fetchQuestionsAndPIN() {
      try {
        //?quizID=1&teamName=this.
        //sending the quizID and the teamName
        //quizID az route param, teamName is routeparam
        let request =
          baseUrl +
          "/quiz-questions" +
          "?quizID=" +
          String($route.params.quizID) +
          "&teamName=" +
          $route.params.teamName;
        console.log("Requesting:" + request);
        const response = await fetch(request);
        const message = await response.json();
        //Store the questions in vuex
        this.$store.commit("loadQuestions", message.list);
        //Store the PIN
        this.PIN = message.PIN;
        this.loaded = true;
        console.log("loaded questions");
      } catch (err) {
        this.loadingText = "Can't load questions. Drink a beer instead!";
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
#holder {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}

#spinner-holder {
  display: block;
  width: 50%;
  height: 200px;
  margin: auto;
}

#spinner {
  display: block;
  width: 20%;
  margin: auto;
}

#buttons-holder {
  display: flex;
  margin: auto;
  width: 20%;
}

button {
  display: block;
  margin: auto;
  min-width: 100px;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
}

#start-button {
  background-color: darkred;
  justify-self: right;
}

a {
  color: white;
}
</style>
