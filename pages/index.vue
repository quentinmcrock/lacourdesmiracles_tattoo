<template>
<div>
  <div class="container border">
    <h2>L'équipe</h2>
    <p>Les artistes de <b>la Cour des Miracles</b> sont tous des <i>artistes</i> reconnus et confirmés. Ils ont chacun leur propre <i>style</i>, il est important de vous familiariser avec leurs différents <i>univers</i>. Nous vous proposons donc d’aller voir les <i>galeries</i> et <i>pages perso</i> de chacun et de suivre les liens proposés.</p>
    <h3 class="recrute">La cour des miracles <strong>recherche des tatoueurs</strong>, bon niveau et book solide requis !</h3>
  </div>
  <cdm-artistes/>
  
  <div class="container border black">
    <h2>Nos studios</h2>
    <p>Pour chaque projet nous préférons bien évidemment en discuter avec vous directement. La plupart des tatouages réalisés sont des motifs originaux, et une rencontre est souvent nécessaire. Cependant pour un premier contact ou ceux qui viennent de loin il est possible de contacter par <a href="mailto:contact@lacourdesmiracles.tattoo">mail</a> ou via notre page facebook.</p>
  </div>

  <cdm-shop/>
  
  <div class="container border black">
    <p><b>Tous nos locaux respectent des règles d’hygiène strictes tant au niveau de la stérilisation qu’au niveau des matériaux utilisés !</b></p>
  </div>
  
  <div class="container border">
    <h2>Nos actualités</h2>
  </div>  
  <div class="content-blog">
    <cdm-blog/>
      <div class="full-width">
        <div class="container border black">
            <nuxt-link to="/blog/"><p>Voir les autres actualités !</p></nuxt-link>
      </div>
  </div>

</div> 
</div>
</template>

<script>
  import $ from 'jquery'
  // import components
  import cdmBlog from '~/components/blog.vue'
  import cdmArtistes from '~/components/artistes.vue'
  import cdmShop from '~/components/shop.vue'
  // export
  export default {
    layout: 'default',
    components: {
        cdmBlog,
        cdmArtistes,
        cdmShop
    },
    head() {
      return {
        title: 'LA COUR DES MIRACLES',
        meta: [
          { hid: 'description', name: 'description', content: 'Piero a créé la Cour des Miracles à Toulouse il y a presque 10 ans dans le but de réunir une équipe de tatoueurs spécialisés dans chacun des grands courants de l’art du tatouage' },
          { 'property': 'og:title', 'content': 'LA COUR DES MIRACLES', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Piero a créé la Cour des Miracles à Toulouse il y a presque 10 ans dans le but de réunir une équipe de tatoueurs spécialisés dans chacun des grands courants de l’art du tatouage' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    mounted () {
      	VanillaTilt.init(document.querySelectorAll("h2"), {
          max: 25,
          speed: 400
        });
    }
  }
</script>
<style>
h3.recrute {
  margin-top: 30px;
}
@media only screen and (min-width:960px) and (max-width:1264px){

}
@media only screen and (min-width:600px) and (max-width:959px){

}
@media only screen and (max-width:599px){

}
</style>
