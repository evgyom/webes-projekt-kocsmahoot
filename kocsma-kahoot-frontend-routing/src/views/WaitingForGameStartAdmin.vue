<template>
  <div id="holder">
    <h2>Waiting for guests to join.</h2>
    <div id="spinner-holder">
      <half-circle-spinner
        id="spinner"
        :animation-duration="1000"
        :size="120"
        :color="'#000000'"
      />
    </div>
    <button>Cancel</button>
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";

export default {
  components: {
    HalfCircleSpinner
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

button{
  display: block;
  margin: auto;
  width: 8%;
  font-size: 30px;
}

</style>
