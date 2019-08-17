<template>
  <div class="card">
    <blockquote class="twitter-tweet">
      <p>
        &lt; --- &gt; ... loading tip ... &lt; ---- &gt;
        <a v-bind:href="tweetUrl"></a>
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "TwitterCard",
  props: {
    tweetUrl: String
  }
};
</script>