
<template>
  <div class="quiz-list-item">
    <div>
      <p id="title">{{ title }}</p>
      <button @click="ToggleShowDescription">{{ ShowDescriptionText }}</button>
      <button id = "start-button"><router-link style="text-decoration: none" :to="{name : 'EnterTeamName', params : {name : this.title}}"
      >Start this quiz</router-link
    ></button>
    </div>
    <p v-if="ShowDescription">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    description: { required: true, type: String },
  },
  methods: {
    ToggleShowDescription() {
      this.ShowDescription = !this.ShowDescription;
      if (this.ShowDescription) {
        this.ShowDescriptionText = "Hide description";
      } else {
        this.ShowDescriptionText = "Show description";
      }
    },
  },
  data() {
    return {
      ShowDescription: false,
      ShowDescriptionText: "Show description",
    };
  },
};
</script>

<style scoped>
.quiz-list-item {
  background-color: lightgrey;
  border-color: white;
  border-width: 2px;
  display: block;
  width: 40%;
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
  height: 70px;
  font-size: 30px;
  flex: 2;
  margin-right: 10px;
  margin-left: 10px;
}

#start-button{
  background-color: darkred;
}

#start-button a{
  color: white;
}

#title {
  font-size: 50px;
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
</style>