<template>
  <div id="twitterCard">
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <div id="tweetInstance"></div>
  </div>
</template>

<script>
export default {
  name: "TwitterCard",
  props: {
    tweetUrl: String
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted: async function() {
    await appendScriptToHead();

    const twttr = window.twttr;
    await twttr.ready();

    twttr.widgets
      .createTweet(this.tweetUrl, document.getElementById("tweetInstance"), {
        theme: "light",
        align: "center",
        conversation: "none"
      })
      .then(() => {
        // eslint-disable-next-line no-console
        this.isLoading = false;
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }
};

function appendScriptToHead() {
  return new Promise(resolve => {
    let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);

    twitterScript.onload = () => {
      resolve();
    };
  });
}
</script>
