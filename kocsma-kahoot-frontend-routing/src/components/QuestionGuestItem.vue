<template>
  <div>
    <div>
      <h2>
        {{ questions[questionNumber]["question"] }}
      </h2>
    </div>
    <div
      class="choice-container"
      v-if="this.questions[this.questionNumber]['layoutID'] === 0"
    >
      <div class="option-container" for="option1">
        <label class="option-label">
          <input
            type="radio"
            id="option1"
            name="option"
            value="1"
            @click="update(1)"
          />
          <span class="option-text">{{ questions[questionNumber]["A1"] }}</span>
        </label>
      </div>
      <div class="option-container">
        <label class="option-label">
          <input
            type="radio"
            id="option2"
            name="option"
            value="2"
            @click="update(2)"
          />
          <span class="option-text">{{ questions[questionNumber]["A2"] }}</span>
        </label>
      </div>
      <div class="option-container">
        <label class="option-label">
          <input
            type="radio"
            id="option3"
            name="option"
            value="3"
            @click="update(3)"
          />
          <span class="option-text">{{ questions[questionNumber]["A3"] }}</span>
        </label>
      </div>
      <div class="option-container">
        <label class="option-label">
          <input
            type="radio"
            id="option4"
            name="option"
            value="4"
            @click="update(4)"
          />
          <span class="option-text">{{ questions[questionNumber]["A4"] }}</span>
        </label>
      </div>
    </div>
    <div
      class="tf-container"
      v-if="this.questions[this.questionNumber]['layoutID'] === 1"
    >
      <div class="option-container" for="optionT">
        <label class="option-label">
          <input
            type="radio"
            id="optionT"
            name="option"
            value="true"
            @click="update(1)"
          />
          <span class="option-text">True</span>
        </label>
      </div>
      <div class="option-container">
        <label class="option-label">
          <input
            type="radio"
            id="optionF"
            name="option"
            value="false"
            @click="update(2)"
          />
          <span class="option-text">False</span>
        </label>
      </div>
    </div>

    <div
      class="numeric-container"
      v-if="this.questions[this.questionNumber]['layoutID'] === 2"
    >
      <div class="option-container">
        <input type="number" id="numeric-ans" v-model.lazy.trim="numericAns" />
      </div>
    </div>

    <p>{{this.statusText}}</p>

    <div id="refresh-button-holder">
      <button id="refresh-button" @click="refresh()">Refresh</button>
    </div>
  </div>
</template>

<script>
let baseUrl = "";

export default {
  props: {
    inputQuestions: { required: true },
  },
  created() {
    console.log("props question",this.$props.inputQuestions);
    this.questions = this.$props.inputQuestions;
    console.log("local questions", this.questions)
    this.noOfQuestions = this.questions.length;
    this.refresh();
  },
  data() {
    return {
      questions: null,
      noOfQuestions: 0,
      questionNumber: 0,
      statusText: "This answer is only visible on this device."
    };
  },
  methods: {
    update(selected) {
      this.answer = selected;
    },
    async refresh() {
      try {
        // /get-current-question?pin=953353133215&boardID=10
        let request =
          baseUrl +
          "/get-current-question?pin=" +
          String(this.$store.getters.getPIN) +
          "&boardID=" +
          String(this.$store.getters.getBoardID);
        console.log("Requesting:" + request);
        const response = await fetch(request);
        const message = await response.json();
        if (message.finished == 0) {
          this.questionNumber = message.questionID-1;
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
          console.log("The quiz was cancelled.");
          this.statusText = "Quiz was cancelled.";
          this.$store.commit("unsetGameStarted");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.choice-container {
  display: grid;
  grid-template-columns: 40% 40%;
  grid-gap: 50px 50px;
  justify-content: center;
}

.tf-container {
  display: grid;
  grid-template-columns: 40% 40%;
  grid-gap: 50px 50px;
  justify-content: center;
}

.option-container {
  display: flex;
  justify-self: center;
  justify-content: center;
  margin-left: 50px;
  margin-right: 50px;
}

.option-label {
  border-style: solid;
  border-color: #D6D6D6;
  border-width: 20px;
  border-radius: 5px;
  background: #D6D6D6;
  color: #00003D;
}

.option-text {
  margin-right: 20px;
}

input[type="radio"] {
  opacity: 0;
}

input[type="radio"]:checked + span {
  color: #3BBA94;
  font-weight: bold;
}

#refresh-button-holder {
  display: flex;
  margin: auto;
  width: 20%;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 30px;
}

#refresh-button {
  margin-top: 0;
  margin-bottom: 30px;
  min-width: 200px;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  justify-self: center
}
</style>
