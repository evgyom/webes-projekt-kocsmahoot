<template>
  <div id="holder">
    <h2>Waiting for the game to start.</h2>
    <h3>PIN: {{ this.$store.getters.getPIN }}</h3>
    <h3>Team name: {{ this.$store.getters.getTeamName }}</h3>
    <div id="spinner-holder">
      <half-circle-spinner
        id="spinner"
        :animation-duration="1000"
        :size="120"
        :color="'#D6D6D6'"
      />
    </div>
    <h3 id="status-text">{{ this.statusText }}</h3>
    <div id="buttons-holder">
      <button id="button-refresh" @click="refresh">Refresh</button>
      <button id="button-cancel" class="cancel-button" @click="navigateBack">Cancel</button>
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
      };
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
#spinner-holder {
  display: block;
  width: 50%;
  height: 165px;
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
  margin-bottom: 50px;
  width: 20%;
  justify-content: center;
}

button {
  margin: auto;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 120px;
}

#status-text {
  margin-top: 0;
}

</style>
