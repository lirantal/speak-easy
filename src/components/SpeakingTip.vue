<template>
  <div class="speakingTip">
    <div>
      <input type="button" value="Lucky Tip" v-on:click="setRandomTweet" />
    </div>

    <TwitterCard v-bind:tweet-url="tweetUrl" :key="tweetUrl"></TwitterCard>
  </div>
</template>

<script>
import TwitterCard from "./TwitterCard.vue";

const tweets = [
  "930910860846993410",
  "950453575817162752",
  "771763270273294336",
  "783943172057694208"
];

export default {
  name: "SpeakingTip",
  components: {
    TwitterCard
  },
  data: function() {
    return {
      tweetUrl: ""
    };
  },
  mounted: function() {
    this.setRandomTweet();
  },
  methods: {
    setRandomTweet() {
      const totalTweets = tweets.length;
      const randomTweetIndex = Math.floor(Math.random() * totalTweets);

      console.log("random tweet function called");
      this.tweetUrl = tweets[randomTweetIndex];
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