<template>
  <div class="quiz-list-item">
    <div>
      <p id="title">{{ quizName }}</p>
      <button id="desc-button" @click="ToggleShowDescription">
        {{ ShowDescriptionText }}
      </button>
    </div>
    <div v-if="ShowDescription">
      <ol class="list-of-quizzes">
        <li v-for="item in teams" :key="item.TeamName">
          <p id="team-name">{{ item.TeamName }}</p>
          <p>{{ item.score }} / {{ count }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quizName: { required: true, type: String },
    count: { required: true, type: Number },
    teams: { required: true },
  },
  data() {
    return {
      ShowDescription: false,
      ShowDescriptionText: "Show results",
    };
  },
  created() {
    console.log("added new quiz element");
    console.log(this.$props.quizName);
  },
  methods: {
    ToggleShowDescription() {
      this.ShowDescription = !this.ShowDescription;
      if (this.ShowDescription) {
        this.ShowDescriptionText = "Hide results";
      } else {
        this.ShowDescriptionText = "Show results";
      }
    },
  },
};
</script>

<style scoped>
.quiz-list-item {
  background-color: #D6D6D6;
  border-color: #D6D6D6;
  color: #00003D;
  border-width: 2px;
  display: block;
  width: 70%;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
}

.quiz-list-item div {
  display: flex;
  padding-left: 20px;
}

button {
  min-height: 50px;
  min-width: 150px;
  font-size: 20px;
  flex: 2;
  margin-right: 10px;
  margin-left: 10px;
}

#title {
  font-size: 30px;
  display: block;
  position: relative;
  text-align: left;
  flex: 5;
  margin: 0;
  font-weight: bold;
}

p {
  text-align: left;
}

#teamname {
  font-weight: normal
}
</style>