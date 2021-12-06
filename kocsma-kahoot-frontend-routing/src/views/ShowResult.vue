<template>
  <div>
    <h2>
      The result of the quiz: {{ $route.params.correctAnswers }} /
      {{ $route.params.allQuestions }}
    </h2>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("unsetGameStarted");
  },
};
</script>


<style scoped>
</style>