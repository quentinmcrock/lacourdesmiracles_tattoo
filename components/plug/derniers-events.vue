<template>
  <div class="derniers-events">
    <img class="mySlides" src="https://www.occitania.immo/images/uploads/website-news.jpg">
    <img class="mySlides" src="https://www.occitania.immo/images/uploads/website-news.jpg">
    <button class="w3-button w3-display-left" >&#10094;</button>
    <button class="w3-button w3-display-right" >&#10095;</button>
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
    },
    mounted() {
      var slideIndex = 1;
      showDivs(slideIndex);

      function plusDivs(n) {
          showDivs(slideIndex += n);
      }

      function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {slideIndex = 1} 
          if (n < 1) {slideIndex = x.length} ;
          for (i = 0; i < x.length; i++) { x[i].style.display = "none"; }
          x[slideIndex-1].style.display = "block"; 
      }
      $('.w3-display-left').on('click', function(){
          plusDivs(-1);
      });
      $('.w3-display-right').on('click', function(){
          plusDivs(+1);
      });
    }
  };
</script>
<style>
  .mySlides {display:none;}
</style>
