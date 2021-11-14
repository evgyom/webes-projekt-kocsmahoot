<template>
  <div>
    <h1>How to play this game?</h1>
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>



<script>
export default {
  props: {},
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  text-align: center;
  margin-top: 5 px;
}
iframe {
  font-size: 1rem;
  display: block;
  margin: auto;
  width: 30vw;
  height: 30vh;
}
</style>
