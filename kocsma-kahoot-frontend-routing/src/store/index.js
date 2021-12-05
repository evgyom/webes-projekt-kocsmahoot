import { createStore } from "vuex";

export default createStore({
  state: {
    GameStarted: false,
    QuizID: null,
    Questions: null,
    PIN: null,
    BoardID: null,
    TeamName: null,
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
    },
    updatePIN(state, PIN){
      state.PIN = PIN;
    },
    setBoardID(state, boardID){
      state.BoardID = boardID;
    },
    setTeamName(state, teamName){
      state.TeamName = teamName;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getGameStartedState: state => state.GameStarted,
    getQuizID: state => state.QuizID,
    getQuestions: state => state.Questions,
    getPIN: state => state.PIN,
    getBoardID: state => state.BoardID,
    getTeamName: state => state.TeamName
  }
});
