<template>
  <div class="sidebar">
  
    <div class="share border">
     <p class="link">
      Nous suivre :
      <a class="entry" href="www.facebook.com/lacourdesmiraclestattoos/" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a class="entry" href="www.instagram.com/lacourdesmiraclestattoos/" target="_blank"><i class="fab fa-instagram"></i></a>
      <a class="entry" href="www.twitter.com/lacourtattoo" target="_blank"><i class="fab fa-twitter"></i></a>
     </p>
    </div>

    <cdm-events/>
    <div class="collapsible">
      <div class="collapsible__head">
        <div class="collapsible__title"><h4>Derniers articles</h4></div>
        <div class="collapsible__icon-box">
          <i class="fas fa-angle-down collapsible__icon"></i>
        </div>
      </div>
      <div class="collapsible__body">
        <div class="collapsible__content">
          <div class="linked border" v-for="post in posts" :key="post.date">        
              <img :src="post.couverture" alt="Avatar" class="image" style="width:100%"> 
              <nuxt-link :to="post._path" class="text">{{ post.title }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import cdmEvents from '~/components/plug/derniers-events.vue'
  export default {
    components: {
      cdmEvents
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
      document.querySelectorAll('.collapsible').forEach(el => el.addEventListener('click', e => {
        e.currentTarget.classList.toggle('collapsible--open')
      }));
    }
  };
</script>
<style>
  .sidebar {
      position: relative;
      display: inline-grid;
      text-align: left;
      width: 30%;
  }
  .centered-and-cropped { 
    object-fit: cover;
  }
  .sidebar img {
    width: 100%;
    margin-bottom: 0px;
  }
  
  a.highlight-title {
    color: #000000;
    text-decoration: none;
    font-family: titaniaregular,serif;
    border-bottom: 0px;
  }
  .sidebar h4 {
      font-family: titaniaregular;
      font-size: 26px;
      line-height: 50px;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: 100;
  }
  .entry{
      background:#151515 none repeat scroll 0 0;
      color:#fff;
      display:inline-block;
      font-size:14px;
      height:30px;
      line-height:30px;
      margin:10px;
      position:relative;
      text-align:center;
      -webkit-transition:all 0.3s ease 0s;
      transition:all 0.3s ease 0s;
      vertical-align:bottom;
      width:30px;
  }
  .entry:hover{
      color:#fff;
  }
  .entry:before{
      background:#000000;
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      content:"";
      transform:scale(0);
      -webkit-transform:scale(0);
      transition:all .3s;
      -webkit-transition:all .3s;
  }
  .entry:hover:before{
      transform:scale(1);
      -webkit-transform:scale(1);
  }
  .entry .fab{
      position:relative;
  }
  .link {
      line-height: 50px;
      display: block;
      position: relative;
      text-align:left;
      font-family: titaniaregular;
      font-size: 18px!important;
      color: black !important;
  }
  .link a {
      float: right;
  }
  .linked{
      margin: 0 0 30px;
      border-top: none !important;
  }
  .share.border {
      border-color: #000 !important;
  }
  .text{
      color:#000;
      text-decoration:none;
      margin-bottom:10px;
      line-height: 30px;
      font-family: titaniaregular,serif;
      font-size:18px;
  }
  .collapsible {
      min-width: 300px;
      max-width: 700px;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
  }
  .collapsible > * {
  }
  .collapsible__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 35px;
      z-index: 1;
      cursor: pointer;
  }
  .collapsible__body {
      border-top: none;
      margin-top: -15px;
      overflow: hidden;
      height: 0;
      padding: 0 20px;
      transition: all .4s;
  }
  .collapsible__content {
      opacity: 0;
      transition: all .4s .4s;
      display: flex;
      justify-content: space-between;
  }
  .collapsible__icon {
      transition: all .2s;
      transform: rotate(0);
  }
  .collapsible--open .collapsible__icon {
      transform: rotate(180deg);
  }
  .collapsible--open .collapsible__body {
      padding: 30px 0px 30px;
      height: 100%;
  }
  .collapsible--open .collapsible__content {
      opacity: 1;
  }
  @media only screen and (min-width:960px) and (max-width:1264px){
  
  }
  @media only screen and (min-width:600px) and (max-width:959px){
  
  }
  @media only screen and (max-width:599px){
      .sidebar {
          width: 100%;
      }
  }
</style>
