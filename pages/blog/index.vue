<template>
<div>
  <div class="container border">
      <h2>Nos actualités</h2>
  </div>  
  <div class="content-blog">
      <cdm-blog/>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
  // import components
  import cdmBlog from '~/components/blog.vue'
  // export
  export default {
    layout: 'default',
     head() {
      return {
        title: 'NOS ACTUALITÉS',
        meta: [
          { hid: 'description', name: 'description', content: 'Piero a créé la Cour des Miracles à Toulouse il y a presque 10 ans dans le but de réunir une équipe de tatoueurs spécialisés dans chacun des grands courants de l’art du tatouage' },
          { 'property': 'og:title', 'content': 'LA COUR DES MIRACLES', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Piero a créé la Cour des Miracles à Toulouse il y a presque 10 ans dans le but de réunir une équipe de tatoueurs spécialisés dans chacun des grands courants de l’art du tatouage' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    components: {
        cdmBlog
    },
    mounted: () => {
      	
    }
  }
</script>
