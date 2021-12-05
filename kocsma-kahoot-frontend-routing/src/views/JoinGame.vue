<template>
  <div id="enter-pin-component">
    <h2>Join Game</h2>
    <h3>Enter your PIN below:</h3>
    <div id="pin-enter-form">
      <div>
        <input type="text" v-model="this.PIN" />
        <button @click="goButtonPushed">GO!</button>
      </div>
    </div>
    <p>You can get the game-PIN from the admin of your team.</p>
  </div>
</template>

<script>
let baseUrl = "";

export default {
  props: {},
  data() {
    return {
      PIN: null,
    };
  },
  methods: {
    async goButtonPushed() {
      try {
        // /join-game?pin=953353133215
        let request = baseUrl + "join-game?pin=" + String(this.PIN);
        console.log("Requesting:" + request);
        const response = await fetch(request);
        const message = await response.json();
        if (message.validPin == 1) {
          //Store the questions in vuex
          this.$store.commit("loadQuestions", message.list);
          //Store the PIN in vuex
          this.$store.commit("updatePIN", this.PIN);
          //Store the boardID in vuex
          this.$store.commit("setBoardID", message.boardID);
          //Store the teamName in vuex
          this.$store.commit("setTeamName", message.teamName)
          //Set game started
          this.$store.commit("setGameStarted");
          //Navigate to WaitingForGameStartGuest
          this.$router.push({ name: "WaitingForGameStartGuest" });
        } else {
          this.PIN = "Invalid PIN";
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
#enter-pin-component {
  margin-bottom: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
}

#pin-enter-form {
  display: block;
  margin: auto;
  width: 60%;
}

#pin-enter-form div {
  display: flex;
  justify-content: center;
}

input {
  flex: 5;
  height: 100px;
  width: 500px;
  font-size: 80px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
}

button {
  flex: 1;
  height: 100px;
  min-width: 150px;
  font-size: 50px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  background-color: darkred;
  text-align: center;
}

a {
  color: white;
}
</style>
