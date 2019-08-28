<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">speak|easy</a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <a
            class="navbar-item"
            href="https://github.com/lirantal/speak-easy/blob/master/src/components/TweetsData.json"
          >+ Add Tip</a>

          <span class="navbar-item">
            <a class="button is-primary is-inverted" href="https://github.com/lirantal/speak-easy">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>GitHub</span>
            </a>
          </span>
        </div>
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
            ✨deployed with
            <a href="https://www.netlify.com">netlify</a>
            ✨secured by
            <a href="https://www.snyk.io">snyk</a>
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
