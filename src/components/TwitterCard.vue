<template>
  <div id="twitterCard">
    <div id="tweetInstance"></div>
  </div>
</template>

<script>
export default {
  name: "TwitterCard",
  props: {
    tweetUrl: String
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
