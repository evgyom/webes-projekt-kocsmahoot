<template>
  <div class="enter-pin-component">
    <h1> Enter your PIN below: </h1>
    <div class= "pin-enter-form"> 
      <input type="text">
      <button> GO! </button>
    </div>
    <p> You can get the game-PIN from the admin of your team.</p>
  </div>
</template>

<script>
export default {
  props: {
  },
}
</script>

<style scoped>
  h1 {
    font-size: 3rem;
    text-align: center;
    margin-top: 5 px;
  }

  .pin-enter-form {
    display: flex;
    margin: auto;
    width: 50%;
  }

  .pin-enter-form input{
    flex: 5;
    height: 3rem;
    font-size: 3rem;
  }

  .pin-enter-form button{
    flex: 1;
    height: 3rem;
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin-top: 5 px;
  }

</style>
