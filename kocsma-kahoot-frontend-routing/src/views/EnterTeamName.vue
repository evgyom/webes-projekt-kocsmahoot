<template>
  <div>
    <h2>{{ $route.params.name }}</h2>
    <h2>Enter the name of your team!</h2>
    <div id="teamname-enter-form">
      <input type="text" />
      <button @click="SetGameStarted">
        <router-link
          style="text-decoration: none"
          :to="{ name: 'WaitingForGameStartAdmin' }"
          >START!</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {

  },
  methods: {
    SetGameStarted() {
      this.$store.commit('setGameStarted');
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
#teamname-enter-form {
  display: flex;
  margin: auto;
  width: 35%;
  padding-bottom: 50px;
}

#teamname-enter-form input {
  flex: 5;
  height: 100px;
  font-size: 80px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
  padding-top: 0;
  padding-bottom: 0;
}

#teamname-enter-form button {
  flex: 1;
  height: 100px;
  font-size: 50px;
  font-weight: bold;
  margin-top: auto;
  padding-top: 0;
  padding-bottom: 0;
  background-color: darkred;
}

a {
  color: white;
}
</style>
