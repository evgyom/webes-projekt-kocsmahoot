<template>
  <div>
    <h2>
      {{questions[questionNumber]["question"]}}
    </h2>
  </div>
  <div class="choice-container" v-if='this.questions[this.questionNumber]["type"]==="choice"'>
    <div class="option-container" for="option1">
      <label class="option-label">
        <input type="radio" id="option1" name="option" value="1" @click="update(1)">
        <span class="option-text">{{questions[questionNumber]["answers"][0]}}</span>
      </label>
    </div>
    <div class="option-container">
      <label class="option-label">
        <input type="radio" id="option2" name="option" value="2" @click="update(2)">
        <span class="option-text">{{questions[questionNumber]["answers"][1]}}</span>
      </label>
    </div>
    <div class="option-container">
      <label class="option-label">
        <input type="radio" id="option3" name="option" value="3" @click="update(3)">
        <span class="option-text">{{questions[questionNumber]["answers"][2]}}</span>
      </label>
    </div>
    <div class="option-container">
      <label class="option-label">
        <input type="radio" id="option4" name="option" value="4" @click="update(4)">
        <span class="option-text">{{questions[questionNumber]["answers"][3]}}</span>
      </label>
    </div>
  </div>

  <div class="tf-container" v-if='this.questions[this.questionNumber]["type"]==="tf"'>
    <div class="option-container" for="optionT">
      <label class="option-label">
        <input type="radio" id="optionT" name="option" value="true" @click="update(true)">
        <span class="option-text">True</span>
      </label>
    </div>
    <div class="option-container">
      <label class="option-label">
        <input type="radio" id="optionF" name="option" value="false" @click="update(false)">
        <span class="option-text">False</span>
      </label>
    </div>
  </div>

  <div class="numeric-container" v-if='this.questions[this.questionNumber]["type"]==="numeric"'>
    <div class="option-container">
      <input type="number" id="numeric-ans" v-model.lazy.trim="numericAns">
    </div>
  </div>

  <div id="submit-button-holder">
    <button id="submit-button" @click="submit()">Submit</button>
  </div>
</template>


<script>
  import questions_json from "../assets/dummy_questions.json";

  export default {
    props: {
      number: {type: Number, default: 0}
    },
    data() {
      return {
        answer: 0,
        numericAns: 0,
        questions: questions_json,
        questionNumber: this.number
      };
    },
    
    methods: {
      update(selected) {
        this.answer = selected;
      },
      submit() {
        if(this.questions[this.questionNumber]["type"]==="numeric") {
          console.log(this.numericAns)
        } else {
          console.log(this.answer)
        };
        this.questionNumber += 1;
      }
    }
  };
</script>


<style>
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
    margin-left: 100px;
    margin-right: 100px;
  }

  .option-label {
    border-style: solid;
    border-color: lightgrey;
    border-width: 20px;
    border-radius: 5px;
    background: lightgrey;
  }

  .option-text {
    margin-right: 20px;
  }

  input[type="radio"] {
    opacity: 0;
  }

  input[type="radio"]:checked + span {
    color: darkred;
    font-weight: bold;
  }

  #submit-button-holder {
    display: flex;
    margin: auto;
    width: 20%;
    justify-content: center;
  }

  #submit-button {
    display: block;
    margin: 30px auto;
    min-width: 200px;
    font-size: 30px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: darkred;
    justify-self: center;
  }
</style>