import { createStore } from "vuex";

export default createStore({
  state: {
    GameStarted: false
  },
  mutations: {
    setGameStarted(state){
      console.log("Setting game started");
      state.GameStarted = true;
    },
    unsetGameStarted(state){
      state.GameStarted = false;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getGameStartedState: state => state.GameStarted
  }
});
