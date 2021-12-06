<template>
  <div id="holder">
    <div v-if="!loaded">
      <h2>{{ this.loadingText }}</h2>
    </div>
    <div v-if="loaded">
      <h2>Waiting for guests to join.</h2>
      <h3>PIN: {{ PIN }}</h3>
      <h3>Team name: {{ this.$store.getters.getTeamName }}</h3>
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
let baseUrl = "";

/*
window.onbeforeunload = function () {
  return false;
};

window.addEventListener("unload", function () {
  navigator.sendBeacon("/cancel?pin=" + String(this.$store.getters.getPIN));
});

target.removeEventListener(type, listener);
*/

export default {
  components: {
    HalfCircleSpinner,
  },
  data() {
    return {
      PIN: null,
      loadingText: "Loading questions...",
      loaded: false,
      post: null,
      error: null,
    };
  },
  created() {
    //Check the quizID
    console.log("QuizID, " + String(this.$store.getters.getQuizID));
    //Check the team name
    console.log("Teamname: " + String(this.$route.params.teamName));
    this.fetchQuestionsAndPIN();
  },
  mounted() {
    //Register event listener
    window.addEventListener("beforeunload", this.onClose);
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.onClose);
  },
  async beforeRouteLeave(to, from, next) {
    console.log(to.path);
    if (to.path == "/question") {
      next();
    } else {
      const answer = window.confirm("Do you really want to leave?");
      if (answer) {
        next();
        this.$store.commit("unsetGameStarted");
        //Send game cancelled request to server
        try {
          // /cancel?pin=953353133215
          let request =
            baseUrl + "/cancel?pin=" + String(this.$store.getters.getPIN);
          console.log("Requesting:" + request);
          const response = await fetch(request);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      } else {
        next(false);
      }
    }
  },
  methods: {
    navigateBack() {
      this.$router.push({ name: "CreateGame" });
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
          String(this.$store.getters.getQuizID) +
          "&teamName=" +
          String(this.$route.params.teamName);
        console.log("Requesting:" + request);
        const response = await fetch(request);
        const message = await response.json();
        //Store the questions in vuex
        this.$store.commit("loadQuestions", message.list);
        //Store the PIN
        this.$store.commit("updatePIN", message.pin);
        this.PIN = message.pin;
        this.loaded = true;
        console.log("Loaded questions");
        console.log("Questions:", this.$store.getters.getQuestions);
      } catch (err) {
        this.loadingText = "Can't load questions. Drink a beer instead!";
        console.log(err);
      }
    },
    onClose(e) {
      //fetch(baseUrl + "/cancel?pin=" + String(this.PIN), {method: "POST"});
      navigator.sendBeacon(baseUrl + "/cancel?pin=" + String(this.PIN));

      // the absence of a returnValue property on the event will guarantee the browser unload happens
      delete e["returnValue"];
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
