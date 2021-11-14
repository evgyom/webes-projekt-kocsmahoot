<template>
  <div id="app">
    <div class="top">
      <h1>KOCSMAHOOT</h1>
    </div>
    <ul class="navbar">
      <li v-for="item in NavBarButtons" :key="item.id">
        <nav-barbutton
          :label="item.label"
          :type="item.type"
          @updated-selected-screen="updateActionArea(item.type)"
        >
        </nav-barbutton>
      </li>
    </ul>
    <div class="action-area-holder">
      <join-game v-if="MainScreenType == 1"> </join-game>
      <create-game v-if="MainScreenType == 2"> </create-game>
      <how-to-play v-if="MainScreenType == 3"> </how-to-play>
      <upload-game v-if="MainScreenType == 4"> </upload-game>
    </div>

    <div class="footer">
      <p>Valami footer szöveg.</p>
      <p>Valami footer szöveg.</p>
      <p>{{ MainScreenType }}</p>
    </div>
  </div>
</template>

<script>
import JoinGame from "./components/mainScreenComponents/JoinGame.vue";
import CreateGame from "./components/mainScreenComponents/CreateGame.vue";
import HowToPlay from "./components/mainScreenComponents/HowToPlay.vue";
import UploadGame from "./components/mainScreenComponents/UploadGame.vue";
import NavBarbutton from "./components/smallItems/NavBarButton.vue";

export default {
  name: "App",
  components: {
    NavBarbutton,
    JoinGame,
    CreateGame,
    HowToPlay,
    UploadGame,
  },
  data() {
    return {
      MainScreenType: 1,
      NavBarButtons: [
        { label: "JOIN GROUP", type: 1 },
        { label: "CREATE GROUP", type: 2 },
        { label: "HOW TO PLAY?", type: 3 },
        { label: "UPLOAD QUIZ", type: 4 },
      ],
    };
  },
  methods: {
    updateActionArea(newType) {
      this.MainScreenType = newType;
    },
  },
};
</script>

<style>
html {
  font-size: 1vw;
  font-family: "Roboto", sans-serif;
  color: white;
  background-color: white;
}
</style>

<style scoped>
.top {
  display: block;
  background-color: lightslategray;
  margin: 0;
  padding: 5px;
}

.top h1 {
  text-align: center;
  font-size: 4rem;
  margin: 0;
  padding: 0;
}

/* NAVBAR */

.navbar {
  height: auto;
  flex: 100%;
  background-color: lightgrey;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
  margin-bottom: 0;
}

.navbar li {
  display: block;
  flex: 1;
}

/* ACTION AREA */

.action-area-holder {
  display: block;
  min-height: 500px;
  background-color: grey;
  margin: 0;
  padding: 0;
}

/* FOOTER */

.footer {
  height: auto;
  flex: 100%;
  background-color: lightgrey;
  display: flex;
  margin-top: 5px;
  font-size: 1.2rem;
}
</style>