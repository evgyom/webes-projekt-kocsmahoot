import { createStore } from "vuex";

export default createStore({
  state: {
    GameStarted: false,
    QuizID: null,
    Questions: null
  },
  mutations: {
    setGameStarted(state){
      console.log("Setting game started");
      state.GameStarted = true;
    },
    unsetGameStarted(state){
      state.GameStarted = false;
    },
    setQuizID(state, ID){
      state.QuizID = ID;
    },
    loadQuestions(state, questions){
      state.Questions = questions;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getGameStartedState: state => state.GameStarted,
    getQuizID: state => state.QuizID,
    getQuestions: state => state.Questions
  }
});
