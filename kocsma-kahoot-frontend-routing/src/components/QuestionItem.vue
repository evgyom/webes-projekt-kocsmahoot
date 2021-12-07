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

    <div id="submit-button-holder">
      <button id="submit-button" class="cancel-button" @click="cancel()">
        Cancel
      </button>
      <button id="submit-button" @click="submit()">Submit</button>
    </div>
  </div>
</template>

<script>
let baseUrl = "";

export default {
  props: {
    inputQuestions: { required: true },
  },
  data() {
    return {
      questions: null,
      noOfQuestions: 0,
      answer: -1,
      collectedAnswers: [],
      numericAns: 0,
      questionNumber: 0,
    };
  },
  async created() {
    this.questions = this.$props.inputQuestions;
    this.noOfQuestions = this.questions.length;
    //indicate that the game was started
    // /set-current-question?pin=953353133215&questionID=5
    let request =
      baseUrl +
      "/set-current-question" +
      "?pin=" +
      String(this.$store.getters.getPIN) +
      "&questionID=" +
      String(this.questions[0]["questionID"]);
    console.log("Requesting:" + request);
    const response = await fetch(request);
    console.log(response);
  },
  methods: {
    update(selected) {
      this.answer = selected;
    },
    async submit() {
      //check if a new answer was selected
      if (
        this.answer === -1 &&
        this.questions[this.questionNumber]["layoutID"] != 2
      ) {
        window.alert("You have to enter an answer.");
      } else {
        if (this.questions[this.questionNumber]["layoutID"] == 2) {
          console.log(this.numericAns);
          this.collectedAnswers.push({
            questionID: this.questions[this.questionNumber]["questionID"],
            answer: this.numericAns,
          });
        } else {
          console.log(this.answer);
          this.collectedAnswers.push({
            questionID: this.questions[this.questionNumber]["questionID"],
            answer: this.answer,
          });
        }
        //Clear answer
        this.answer = -1;
        //Display all the stored answers
        console.log("All answers", this.collectedAnswers);
        if (this.questionNumber == this.noOfQuestions - 1) {
          console.log("Finished quiz");
          let bodyOfRequest = JSON.stringify({
            pin: this.$store.getters.getPIN,
            answers: this.collectedAnswers,
          });
          console.log("Body of request", bodyOfRequest);
          const response = await fetch(baseUrl + "/submit-quiz", {
            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: bodyOfRequest,

            // Adding headers to the request
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          const message = await response.json();
          console.log("Result of quiz", message.score);
          this.$store.commit("unsetGameStarted");
          this.$router.push({
            name: "ShowResult",
            params: {
              correctAnswers: message.score,
              allQuestions: this.noOfQuestions,
            },
          });
        } else {
          //set-current-question?pin=953353133215&questionID=5
          let request =
            baseUrl +
            "/set-current-question" +
            "?pin=" +
            String(this.$store.getters.getPIN) +
            "&questionID=" +
            String(this.questions[this.questionNumber + 1]["questionID"]);
          console.log("Requesting:" + request);
          const response = await fetch(request);
          console.log(response);
          //TODO answer not received...
          this.questionNumber += 1;
        }
      }
    },
    async cancel() {
      this.$router.push({ name: "CreateGame" });
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
  border-color: #d6d6d6;
  border-width: 20px;
  border-radius: 5px;
  background: #d6d6d6;
  color: #00003d;
}

.option-text {
  margin-right: 20px;
}

input[type="radio"] {
  opacity: 0;
}

input[type="radio"]:checked + span {
  color: #3bba94;
  font-weight: bold;
}

#submit-button-holder {
  display: flex;
  margin: auto;
  width: 20%;
  justify-content: center;
}

#submit-button {
  margin: 30px auto;
  min-width: 200px;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
  justify-self: center;
}
</style>
