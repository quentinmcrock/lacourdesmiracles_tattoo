<template>
  <div class="derniers-articles">
      <div class="box">    
        <nuxt-link v-for="post in posts.slice(0, 1)" :key="post.date" class="highlight-title" :to="post._path">
          <img class="centered-and-cropped" :src="post.couverture">
        </nuxt-link>
      </div>
      <div class="box">
        <nuxt-link v-for="post in posts.slice(1, 2)" :key="post.date" class="highlight-title" :to="post._path">
          <img class="centered-and-cropped" :src="post.couverture">
        </nuxt-link>
      </div>
      <div class="box">
        <nuxt-link v-for="post in posts.slice(2, 3)" :key="post.date" class="highlight-title" :to="post._path">
          <img class="centered-and-cropped" :src="post.couverture">
        </nuxt-link>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      const context = require.context('~/content/blog/posts/', false, /\.json$/);
      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/blog/${key.replace('.json', '').replace('./', '')}`
      }));
      return { posts };
    }
  };
</script>
<style>
  .derniers-articles {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-gap: 0px;
  }
  .centered-and-cropped {
    width: 100%;
  }
  .box {
  }
</style>
