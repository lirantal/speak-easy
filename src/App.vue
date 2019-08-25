<template>
  <div id="app">
    <section class="hero is-dark">
      <div class="hero-body">
        <SpeakingTip />
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import SpeakingTip from "./components/SpeakingTip";

Vue.use(Buefy);

export default {
  name: "app",
  components: {
    SpeakingTip
  }
};
</script>
