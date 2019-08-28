<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">speak|easy</a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>

    <section class="hero is-dark">
      <div class="hero-body">
        <SpeakingTip />
      </div>
    </section>

    <section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>speak|easy</strong> by
            <a href="https://twitter.com/liran_tal">Liran Tal</a>
          </p>
        </div>
      </footer>
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
