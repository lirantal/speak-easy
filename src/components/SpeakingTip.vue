<template>
  <div class="speakingTip">
    <TwitterCard tweetId="123"></TwitterCard>
  </div>
</template>

<script>
import TwitterCard from "./TwitterCard.vue";

export default {
  name: "SpeakingTip",
  components: {
    TwitterCard
  }
};
</script>

<style>
.speakingTip {
  text-align: center;
  display: inline-block;
}
</style>