<template>
  <div class="container">
      <div class="blog-list">
          <article v-for="post in posts" :key="post.date">
              <nuxt-link class="blog-title underline" :to="post._path">{{ post.title }}</nuxt-link>
              <img class="blog-cover" :src="post.couverture">
              <vue-markdown>{{post.intro}}...</vue-markdown>
              <div class="row vertical-aligned-columns">
                <div class="a">
                  <nuxt-link class="blog-readmore underline" :to="post._path">En savoir plus</nuxt-link>
                </div>
                <div class="b">
                   <div class="blog-date">{{ post.date }}</div>
                </div>
              </div>
          </article>
      </div>
      <cdm-sidebar/>
  </div>
</template>
<script>
  import cdmSidebar from '~/components/sidebar.vue'
  import VueMarkdown from 'vue-markdown'
  export default {
    components: {
      cdmSidebar,
      VueMarkdown 
    },
    data() {
      const context = require.context('~/content/blog/posts/', false, /\.json$/);
      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/blog/${key.replace('.json', '').replace('./', '')}`
      }));
      return { posts };
    },
    mounted() {
 
    }
  };
</script>
<style>
  .blog-list {
      display: inline-grid;
      width: 70%;
      padding-right: 15px;
  }
  a.blog-title {
    color: #000;
    text-decoration: none;
    position: relative;
    font-family: titaniaregular,serif;
    font-size: 40px;
  }
  article img {
    width: 100%;
  }
  article .blog-cover {
    padding: 15px 0px;
  }
  article p {
    padding: 0px;
    text-align: justify;
    font-weight: 400;
    font-size: 26px;
    line-height: 1.7;
    margin-bottom: 15px;
    color: #505050;
  }
  article a {
    font-family: titaniaregular,serif;
    color: black;
  }
 
  .blog-readmore {
    font-family: titaniaregular,serif;
    color: black;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
  }
  .blog-date {
      border-left: 7px double #e6e6e6;
      margin-bottom: 15px;
      padding-left: 10px;
      font-size: 16px;
      line-height: 1.56em;
      color: #000;
      font-weight: 900;
      font-family: 'titaniaregular', serif;
      text-align: right;
  }
  .blog-date b.grey {
      color: #898989;
      font-weight: normal;
  }
  .content-blog section {
      background: #fff none repeat scroll 0 0;
      border-color: #e6e6e6;
      border-style: double inset;
      border-width: 7px 0;
      margin: 45px 0px;
      padding: 30px;
  }
  .sa {
      padding: 0 30px;
  }
  @media only screen and (min-width:960px) and (max-width:1264px){
  
  }
  @media only screen and (min-width:600px) and (max-width:959px){
  
  }
  @media only screen and (max-width:599px){
      .blog-list {
          display: inline-grid;
          width: 100%;
          padding-right: 0;
      }
  }
</style>
