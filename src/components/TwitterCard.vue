<template>
  <div id="twitterCard" class="card">
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
    const twttr = window.twttr;
    if (!twttr) {
      return;
    }

    await twttr.ready();
    twttr.widgets
      .createTweet(this.tweetUrl, document.getElementById("tweetInstance"), {
        theme: "light"
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>