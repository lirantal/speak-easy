<template>
  <div class="card">
    <blockquote class="twitter-tweet">
      <p>
        &lt; --- &gt; ... loading tip ... &lt; ---- &gt;
        <a v-bind:href="TweetURL"></a>
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "TwitterCard",
  props: {
    TweetURL: String
  }
};
</script>