<template>
  <div id="holder">
    <h2>Waiting for the game to start.</h2>
    <h3>PIN: {{ this.$store.getters.getPIN }}</h3>
    <h3>Team name: {{this.$store.getters.getTeamName}}</h3>
    <div id="spinner-holder">
      <half-circle-spinner
        id="spinner"
        :animation-duration="1000"
        :size="120"
        :color="'#000000'"
      />
    </div>
    <h3>{{ this.statusText }}</h3>
    <div>
      <button id="button-refresh" @click="refresh">Refresh</button>
      <button id="button-cancel" @click="navigateBack">Cancel</button>
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";
let baseUrl = "";

export default {
  components: {
    HalfCircleSpinner,
  },
  data() {
    return {
      statusText: null,
    };
  },
  async beforeRouteLeave(to, from, next) {
    if (to.path == "/question-guest") {
      next();
    } else {
      const answer = window.confirm("Do you really want to leave?");
      if (answer) {
        this.$store.commit("unsetGameStarted");
        next();
      } else {
        next(false);
      }
    }
  },
  methods: {
    navigateBack() {
      history.back();
    },
    async refresh() {
      try {
        // /get-current-question?pin=953353133215
        //?quizID=1&teamName=this.
        //sending the quizID and the teamName
        //quizID az route param, teamName is routeparam
        let request =
          baseUrl +
          "/get-current-question?pin=" +
          String(this.$store.getters.getPIN) +
          "&boardID=" +
          String(this.$store.getters.getBoardID);
        console.log("Requesting:" + request);
        const response = await fetch(request);
        const message = await response.json();
        console.log("response", message);
        console.log("finished", message.finished);
        //Clear the status text by defualt
        this.statusText = "";
        if (message.finished == 0) {
          console.log("Game is running");
          if (message.questionID == -1) {
            this.statusText = "The quiz is not yet started.";
          } else {
            console.log("Quiz is started. Question ID = ", message.questionID);
            this.$router.push({ name: "QuestionGuest" });
          }
        } else if (message.finished == 1) {
          this.$store.commit("unsetGameStarted");
          this.$router.push({
            name: "ShowResult",
            params: {
              correctAnswers: message.score,
              allQuestions: this.$store.getters.getQuestions.length,
            },
          });
        } else if (message.finished == 2) {
          console.log("Quiz was cancelled.")
          this.$store.commit("unsetGameStarted");
          this.statusText = "The quiz was cancelled.";
        }
      } catch (err) {
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

#button-cancel {
  display: block;
  margin: auto;
  width: 8%;
  min-width: 100px;
  font-size: 30px;
}

#button-refresh {
  display: block;
  margin: auto;
  background-color: navy;
  width: 8%;
  min-width: 100px;
  font-size: 30px;
}
</style>
