import { createRouter, createWebHistory } from "vue-router";
import JoinGame from "../views/JoinGame.vue";
import CreateGame from "../views/CreateGame.vue";
import UploadGame from "../views/UploadGame.vue";
import HowToPlay from "../views/HowToPlay.vue";
import Leaderboard from "../views/Leaderboard.vue";
import EnterTeamName from "../views/EnterTeamName.vue";
import WaitingForGameStartAdmin from "../views/WaitingForGameStartAdmin.vue";
import WaitingForGameStartGuest from "../views/WaitingForGameStartGuest.vue";
import Question from "../views/Question.vue";


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
    path: "/enter-team-name/:name",
    name: "EnterTeamName",
    component: EnterTeamName,
  },
  {
    path: "/waiting-for-game-start-admin",
    name: "WaitingForGameStartAdmin",
    component: WaitingForGameStartAdmin,
  },
  {
    path: "/waiting-for-game-start-guest",
    name: "WaitingForGameStartGuest",
    component: WaitingForGameStartGuest,
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
  {
    path: "/question",
    name: "Question",
    component: Question,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
