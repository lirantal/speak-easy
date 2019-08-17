<template>
  <div class="speakingTip">
    <TwitterCard v-bind:tweet-url="tweet"></TwitterCard>
  </div>
</template>

<script>
import TwitterCard from "./TwitterCard.vue";

export default {
  name: "SpeakingTip",
  components: {
    TwitterCard
  },
  data: function() {
    return {
      tweet:
        "https://twitter.com/the_thagomizer/status/930910860846993410?ref_src=twsrc%5Etfw"
    };
  }
};
</script>

<style>
.speakingTip {
  text-align: center;
  display: inline-block;
}
</style>