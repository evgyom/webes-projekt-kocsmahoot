<template>
  <div>
    <h1>Kocsmahoot</h1>
    <div id="nav">
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
      <router-link style="text-decoration: none" to="/upload-game"
        >UPLOAD GAME</router-link
      >
      |
      <router-link style="text-decoration: none" to="/leaderboard"
        >LEADERBOARD</router-link
      >
    </div>
    <router-view />
    <div id="footer">© copyright 2010 Sütő Zoltán</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 120px;
}

/*NAVBAR*/

#nav {
  padding: 30px;
  font-size: 40px;
  display: block;
  background-color: lightgrey;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}

nav li:hover {
  text-decoration: underline;
}

/*CONTENT*/

h2 {
  font-size: 60px;
  text-align: center;
}

p {
  font-size: 30px;
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
  font-size: 20px;
  background-color: lightgrey;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
