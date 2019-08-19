<template>
  <div id="app">
    <SpeakingTip />
  </div>
</template>

<script>
import SpeakingTip from "./components/SpeakingTip";

export default {
  name: "app",
  components: {
    SpeakingTip
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
