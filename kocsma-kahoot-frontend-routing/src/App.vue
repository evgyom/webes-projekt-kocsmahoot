<template>
  <div>
    <h1>Kocsmahoot</h1>
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
    <div id="footer">© copyright 2021 Kocsmahoot </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

h1 {
  font-size: 80px;
}

/*NAVBAR*/

#nav {
  padding: 30px;
  font-size: 30px;
  display: block;
  background-color: darkred;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: white;
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
  background-color: black;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
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
  background-color: darkred;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
