<template>
  <div>
    <cdm-navbar/>
    <nuxt/>
    <cdm-footer/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import cdmNavbar from '~/components/navbar.vue'
  import cdmFooter from '~/components/footer.vue'
  export default {
      transition: 'page',
      components: {
          cdmNavbar,
          cdmFooter
      },
      head: {
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Slabo+27px' }
        ]
      },
      mounted: () => {
          $("#navbar").addClass('hidden');
      }
  }
</script>
<style>

</style>
