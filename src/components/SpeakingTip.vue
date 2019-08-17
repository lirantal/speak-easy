<template>
  <div class="speakingTip">
    <TwitterCard v-bind:tweet-url="randomTweet"></TwitterCard>
  </div>
</template>

<script>
import TwitterCard from "./TwitterCard.vue";

export default {
  name: "SpeakingTip",
  components: {
    TwitterCard
  },
  computed: {
    randomTweet: function() {
      const tweets = [
        "https://twitter.com/the_thagomizer/status/930910860846993410?ref_src=twsrc%5Etfw",
        "https://twitter.com/devolore/status/950453575817162752?ref_src=twsrc%5Etfw"
      ];

      const totalTweets = tweets.length;
      const randomTweetIndex = Math.floor(Math.random() * totalTweets);

      return tweets[randomTweetIndex];
    }
  }
};
</script>

<style>
.speakingTip {
  text-align: center;
  display: inline-block;
}
</style>