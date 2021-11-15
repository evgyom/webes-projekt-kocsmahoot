<template>
  <div id="enter-pin-component">
    <h2>Enter your PIN below:</h2>
    <div id="pin-enter-form">
      <input type="text" />
      <button @click="SetGameStarted">
        <router-link style="text-decoration: none" to="/waiting-for-game-start-guest"
          >GO!</router-link
        >
      </button>
    </div>
    <p>You can get the game-PIN from the admin of your team.</p>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    SetGameStarted() {
      this.$store.commit('setGameStarted');
    }
  },
};
</script>

<style scoped>
#enter-pin-component {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
}

#pin-enter-form {
  display: flex;
  margin: auto;
  width: 35%;
}

#pin-enter-form input {
  flex: 5;
  height: 100px;
  font-size: 80px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
}

#pin-enter-form button {
  flex: 1;
  height: 100px;
  font-size: 50px;
  font-weight: bold;
  margin-top: auto;
  padding-top: 0;
  padding-bottom: 0;
  background-color: darkred;
}

a{
  color: white;
}
</style>
