<template>
  <div id="nav">
    <router-link to="/">JOIN GAME</router-link>|
    <router-link to="/create-game">CREATE GAME</router-link>|
    <router-link to="/how-to-play">HOW TO PLAY</router-link>|
    <router-link to="/upload-game">UPLOAD GAME</router-link>|
    <router-link to="/leaderboard">LEADERBOARD</router-link>|
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
