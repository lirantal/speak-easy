<template>
  <div>
    <div class="columns is-desktop is-centered">
      <div class="column is-half has-text-centered">
        <input
          class="button is-primary"
          type="button"
          value="Lucky Tip"
          v-on:click="setRandomTweet"
        />
      </div>
    </div>

    <div class="columns is-desktop is-centered">
      <div class="column is-half has-text-centered">
        <TwitterCard v-bind:tweet-url="tweetUrl" :key="tweetUrl"></TwitterCard>
      </div>
    </div>
  </div>
</template>

<script>
import TwitterCard from "./TwitterCard.vue";
import TweetsData from "./TweetsData.json";

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
      const totalTweets = TweetsData.length;
      const randomTweetIndex = Math.floor(Math.random() * totalTweets);

      this.tweetUrl = TweetsData[randomTweetIndex];
    }
  }
};
</script>
