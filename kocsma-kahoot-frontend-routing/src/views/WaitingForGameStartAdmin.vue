<template>
  <div id="holder">
    <h2>Waiting for guests to join.</h2>
    <h2>PIN: {{PIN}}</h2>
    <div id="spinner-holder">
      <half-circle-spinner
        id="spinner"
        :animation-duration="1000"
        :size="120"
        :color="'#000000'"
      />
    </div>
    <div id="buttons-holder">
      <button id="start-button">Start</button
      ><button @click="navigateBack" id="cancel-button">Cancel</button>
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";

export default {
  components: {
    HalfCircleSpinner,
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm("Do you really want to leave?");
    if (answer) {
      next();
      this.$store.commit("unsetGameStarted");
    } else {
      next(false);
    }
  },
  methods: {
    navigateBack() {
      history.back();
    },
  },
  data() {
    return {
      PIN: null,
    };
  },
};
</script>

<style scoped>
#holder {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}

#spinner-holder {
  display: block;
  width: 50%;
  height: 200px;
  margin: auto;
}

#spinner {
  display: block;
  width: 20%;
  margin: auto;
}

#buttons-holder {
  display: flex;
  margin: auto;
  width: 20%;
}

button {
  display: block;
  margin: auto;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
}

#start-button {
  background-color: darkred;
  justify-self: right;
}
</style>
