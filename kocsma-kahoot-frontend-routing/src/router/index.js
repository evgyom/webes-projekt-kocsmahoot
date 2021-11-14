import { createRouter, createWebHistory } from "vue-router";
import JoinGame from "../views/JoinGame.vue";
import CreateGame from "../views/CreateGame.vue";
import UploadGame from "../views/UploadGame.vue";
import HowToPlay from "../views/HowToPlay.vue";
import Leaderboard from "../views/Leaderboard.vue";


const routes = [
  {
    path: "/",
    name: "JoinGame",
    component: JoinGame,
  },
  {
    path: "/create-game",
    name: "CreateGame",
    component: CreateGame,
  },
  {
    path: "/upload-game",
    name: "UploadGame",
    component: UploadGame,
  },
  {
    path: "/how-to-play",
    name: "HowToPlay",
    component: HowToPlay,
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: Leaderboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
