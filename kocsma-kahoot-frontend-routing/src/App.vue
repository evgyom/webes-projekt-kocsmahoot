<template>
  <div>
    <h1>Kocsmahút</h1>
    <div v-if="!this.$store.getters.getGameStartedState" id="nav">
      <router-link style="text-decoration: none" to="/">JOIN GAME</router-link>
      |
      <router-link style="text-decoration: none" to="/create-game"
        >CREATE GAME</router-link
      >
      |
      <router-link style="text-decoration: none" to="/how-to-play"
        >HOW TO PLAY</router-link
      >
      |
      <router-link style="text-decoration: none" to="/leaderboard"
        >LEADERBOARD</router-link
      >
    </div>
    <div v-else id="nav"></div>
    <router-view />
    <div id="footer">© copyright 2021 Kocsmahút </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ShowNavBar: true,
    };
  },
};
</script>


<style>
html {
  color: #D6D6D6;
  background-color: #00003D;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 {
  font-size: 80px;
  color: #3BBA94;
  margin-top: 10px;
  margin-bottom: 10px;
}

a {
  color: #F5F5F5;
}

/*NAVBAR*/

#nav {
  padding: 30px;
  font-size: 30px;
  display: block;
  background-color: #D6D6D6;
  color: #00003D;
}

#nav a {
  font-weight: bold;
  color: #00003D;
}

#nav a.router-link-exact-active {
  color: #3BBA94;
}

nav li:hover {
  text-decoration: underline;
}

/*CONTENT*/

h2 {
  font-size: 50px;
  text-align: center;
}

p {
  font-size: 20px;
}

button {
  background-color: #3BBA94;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #F5F5F5;
  cursor: pointer;
  display: block;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  max-width: none;
  min-height: 44px;
  min-width: 100px;
  outline: none;
  overflow:hidden;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.cancel-button {
  background-color: #CFAC3A;
}

.start-game-button {
  flex: 1;
  min-width: 150px;
}

input[type="text"] {
  flex: 5;
  height: 100px;
  width: 500px;
  font-size: 80px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
}

input[type="number"] {
  height: 100px;
  width: 300px;
  font-size: 80px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.button-31:hover,
.button-31:focus {
  opacity: 0.75;
}

/* FOOTER */

#footer {
  position: fixed; 
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  background-color: #3BBA94;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #F5F5F5;
}
</style>
