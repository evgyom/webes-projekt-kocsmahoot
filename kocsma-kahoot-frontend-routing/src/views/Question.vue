<template>
  <div>
    <div v-if="!loaded">
      <h2>{{ this.loadingText }}</h2>
    </div>
    <div v-if="loaded">
      <question-item v-bind:inputQuestions="this.questions"> </question-item>
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
      loadingText: "Loading questions.",
      loaded: false,
      post: null,
      error: null,
      questions: null,
    };
  },
  created() {
    //Load questions from Vuex
    try {
      this.questions = this.$store.getters.getQuestions;
      this.loaded = true;
    } catch (err) {
      this.loadingText = "Can't load questions. Drink a beer instead!";
      console.log(err);
    }
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
    if (to.path == "/question" || to.path == "/show-result") {
      next();
    } else {
      const answer = window.confirm("Do you really want to leave?");
      if (answer) {
        //Send game cancelled request to server
        try {
          // /cancel?pin=953353133215
          let request =
            baseUrl + "/cancel" + "?pin=" + String(this.$store.getters.getPIN);
          console.log("Requesting:" + request);
          const response = await fetch(request);
          console.log(response);
        } catch (err) {
          console.log(err);
        } finally {
          next();
          this.$store.commit("unsetGameStarted");
        }
      } else {
        next(false);
      }
    }
  },
  methods: {
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
</style>