<template>
  <div class="shop">
      <div class="delacroix shop-select shop-left active">
          <p>1 RUE DELACROIX</p>
          <div class="middle-right">
              <a class="mapping" target="_blank" href="https://www.google.com.br/maps/place/La+Cour+des+Miracles+tatouages+et+piercing/@43.601287,1.4504512,17z/data=!4m13!1m7!3m6!1s0x12aebc9a9b1e13dd:0xaf2c8f779f133463!2s1+Rue+Delacroix,+31000+Toulouse!3b1!8m2!3d43.601287!4d1.4526399!3m4!1s0x12aebc845b6d2811:0x7f46f16bb41fc5ed!8m2!3d43.6012935!4d1.4526337">S'Y RENDRE</a>
          </div> 
          <div class="map">
              <div class="preview-wrapper">
                  <div class="map-inst style-1 preview" id="map-canvas" data-lat="43.6012258" data-lng="1.4523422" data-zoom="17"></div>
                  <div class="addresses-block hidden" data-rel="map-canvas">
                    <a class="marker" data-lat="43.6012258" data-lng="1.4523422" data-string="1 Rue Delacroix"></a>
                  </div>
              </div>
              <img class="devanture" src="https://lacourdesmiracles.tattoo/assets/img/studio/cdm-img1-idrac.png">
          </div>
      </div>      
      <div class="delacroix shop-select shop-right active">
        <div class="transform">
            <div class="cover">
                <img src="https://lacourdesmiracles.tattoo/assets/img/studio/cdm-img3-idrac.png">
            </div>
            <div class="info">
                <p>Mardi au Samedi : <b>10H à 12H et 14H à 19H</b></p>
                <p class="detaille">Le studio de la <b>rue Delacroix</b> est exclusivement dédié au <b>tatouage</b>, <a title="Voir la page complète de Piero" href="/artistes/piero/">Piero</a> ainsi que la quasi totalité des autres tatoueurs sont basés là bas.</p>
                <a class="tel" href="tel:+33561539255">05 61 53 92 55</a><br/>
                <a class="mailto" href="mailto:contact@thebigvoodoo.com">contact@thebigvoodoo.com</a><br/>
                <p>1 RUE DELACROIX 31000 TOULOUSE</p>
                <div class="follow">
                  <a class="entry" href="https://www.instagram.com/lacourdesmiraclestattoos/" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a class="entry" href="https://www.facebook.com/lacourdesmiraclestattoos/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                  <a class="entry" href="https://twitter.com/lacourtattoo" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
      </div>      
      <div class="malbec shop-select shop-left">
          <p>10 RUE MALBEC</p>
          <div class="middle-right">
              <a class="mapping" target="_blank" href="https://www.google.fr/maps/place/the+Court+of+Miracles/@43.6021081,1.3699905,12z/data=!4m18!1m12!4m11!1m3!2m2!1d1.440715!2d43.6017352!1m6!1m2!1s0x12aebb63a06df025:0x4aa5e963aefb867e!2sla+cour+des+miracles+rue+malbec+google+map!2m2!1d1.4400303!2d43.6021295!3m4!1s0x12aebb63a06df025:0x4aa5e963aefb867e!8m2!3d43.6021295!4d1.4400303">S'Y RENDRE</a>
          </div> 
          <div class="map">
              <div class="preview-wrapper">
                  <div class="map-inst style-1 preview" id="map-canvas2" data-lat="43.6021025" data-lng="1.4398719"  data-zoom="17"></div>
                  <div class="addresses-block hidden" data-rel="map-canvas2">
                    <a class="marker"  data-lat="43.6021025" data-lng="1.4398719"  data-string="10 Rue Malbec"></a>
                  </div>
              </div>
              <img class="devanture" src="https://lacourdesmiracles.tattoo/assets/img/studio/cdm-img1-malbec.png">
          </div>
      </div>      
      <div class="malbec shop-select shop-right">
        <div class="transform">
            <div class="cover">
                <img src="https://lacourdesmiracles.tattoo/assets/img/studio/cdm-img3-malbec.png">
            </div>
            <div class="info">
                <p>Mardi au Samedi : <b>13H/19H</b></p>
                <p class="detaille">C'est au <b>10 rue Malbec</b> que se trouve le studio de piercing mais vous pouvez aussi vous faire tatouer là-bas</p>
                <a class="tel" href="tel:+33984011269">09 84 01 12 69</a><br/>
                <a class="mailto" href="mailto:contact@thebigvoodoo.com">contact@thebigvoodoo.com</a><br/>
                <p>10 RUE MALBEC 31000 TOULOUSE</p>
                <div class="follow">
                  <a class="entry" href="https://www.instagram.com/lacourdesmiraclestattoos/" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a class="entry" href="https://www.facebook.com/lacourdesmiraclestattoos/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                  <a class="entry" href="https://twitter.com/lacourtattoo" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
      </div>      
      <div class="navigation">
          <div id="delacroix" class="select active">rue Delacroix</div>
          <div id="malbec" class="select">rue Malbec</div>
      </div>
  </div>
</template>
<script> 
import $ from 'jquery'
export default {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.4.1/vanilla-tilt.min.js', ssr: false  },
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCFtCw7NoiddOxMQnYN1O1BQcnft1wmJx8', ssr: false  }
    ]
  },
  mounted: () => {
  
      $('.select').on('click', function(){
          $(".malbec, .delacroix, #malbec, #delacroix").toggleClass('active');
      });
      VanillaTilt.init(document.querySelectorAll(".devanture"), {
          max: 25,
          speed: 400
      });
      $(function() {

        var marker = [], marker2 = [], infowindow = [], maps = [];

        function addMarker(location,name,contentstr,map){
           marker[name] = new google.maps.Marker({
              position: location,
              map: map,
              icon: 'https://lacourdesmiracles.tattoo/assets/img/marker.png'
           });
           marker[name].setMap(map);
          infowindow[name] = new google.maps.InfoWindow({
            content: '<div class="scrollfix">'+contentstr+'</div>'
          });
          google.maps.event.addListener(marker[name], 'click', function() {
            infowindow[name].open(map,marker[name]);
          });
        }

        function moveto_region(location,zoom_level) {
          map.setZoom(zoom_level);
          map.setCenter(location);
        }

        $('.marker').on('click', function(){
          var coord1 = $(this).attr('data-lng');
          var coord2 = $(this).attr('data-lat');
          var location = new google.maps.LatLng(coord2,coord1);
          moveto_region(location, 18);
        });

        function initialize(mapInst, index) {

          var lat = mapInst.attr("data-lat");
          var lng = mapInst.attr("data-lng");

          var myLatlng = new google.maps.LatLng(lat,lng);

          var setZoom = parseInt(mapInst.attr("data-zoom"));

          var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
          var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

          var mapOptions = {
            zoom: setZoom,
            scrollwheel: false,			
            center: myLatlng,
            disableDefaultUI: true		
          };
          maps[index] = new google.maps.Map(document.getElementById(mapInst.attr('id')), mapOptions);

          maps[index].mapTypes.set('map_style', styledMap);
            maps[index].setMapTypeId('map_style');


          $('.addresses-block[data-rel="'+mapInst.attr('id')+'"] a.marker').each(function(){
            var mark_lat = $(this).attr('data-lat');
            var mark_lng = $(this).attr('data-lng');
            var this_index = $('.addresses-block a').index(this);
            var mark_name = 'template_marker_'+this_index;
            var mark_locat = new google.maps.LatLng(mark_lat, mark_lng);
            var mark_str = $(this).attr('data-string');
            addMarker(mark_locat,mark_name,mark_str,maps[index]);	
          });
        }        
        setTimeout(function(){
          var index = 0;
          $('.map-inst').each(function(){
            initialize($(this), index);
            index = index + 1;
          });
        }, 500);  

      });
  }
}
</script>
<style>
  .shop {
      height: calc(100vh - 100px);
      background: #000;
      width: 100%;
      position: relative;
      overflow: hidden;
      min-height:750px;
  }
  .shop-select {
      position: absolute;
      height: 100%;
      width:50%;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      padding: 30px;
      background:#000;
      overflow:hidden;
  }
  .shop-left{
      left:0;
      padding-top: 175px;
  }
  .shop-right{
      right:0;
  }
  .malbec.shop-left,
  .delacroix.shop-right{
      top:100%;
  }
  .malbec.shop-right,
  .delacroix.shop-left{
      top:-100%;
  }
  .malbec.shop-left.active,
  .malbec.shop-right.active,
  .delacroix.shop-left.active,
  .delacroix.shop-right.active{
      top:0;
  }
  .transform{
      position: relative;
      height: 100%;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
  }
  .malbec.shop-left .transform,
  .delacroix.shop-right .transform{
      transform: translateY(-60%);
      -webkit-transform: translateY(-60%);
  }
  .malbec.shop-right .transform,
  .delacroix.shop-left .transform{
      transform: translateY(60%);
      -webkit-transform: translateY(60%);
  }  
  .malbec.shop-left.active .transform,
  .malbec.shop-right.active .transform,
  .delacroix.shop-left.active .transform,
  .delacroix.shop-right.active .transform{
      transform: translateY(0%);
      -webkit-transform: translateY(0%);
  }
  .cover {
      width: 100%;
      height: 50%;
      position: relative;
      overflow: hidden;
      margin-bottom: 30px;
  }
  .cover img {
      position: relative;
      width: 100%;
      top: 50%;
      transform: translatey(-50%);
      -webkit-transform: translatey(-50%);
  }
  .info {
      padding: 0 15px;
      color: #fff;
  }
  .info p {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 22px;
  }
  .info b, .info a {
      font-size: 20px;
      font-weight: 100;
      font-family: 'titaniaregular', serif;
      color: #fff;
  }
  .tel {
      background: white none repeat scroll 0 0;
      color: black !important;
      display: inline-block;
      padding: 10px;
      margin-bottom:30px;
  }
  .navigation {
      color: #fff;
      top: 0;
      position: absolute;
      text-align: center;
      padding: 50px;
      width: 50%;
      z-index:2;
  }
  .navigation .select{
      font-size: 45px;
      line-height: 1;
      font-weight: 900;
      font-family: 'titaniaregular', serif;
      color:gray;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      cursor:pointer;
  }
  .select.active{
      color:#fff;
      font-size: 72px;
  }
  .middle-right {
      position: absolute;
      width: auto;
      height: auto;
      right: 50px;
      top: 450px;
      z-index:1;
  }
  .mapping {
      line-height: 1;
      font-weight: 900;
      font-family: titaniaregular,serif;
      text-align: center;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%) rotate(-90deg) scale(.5);
      width: 445px;
      color:#fff !important;
      font-size: 72px;
      opacity:0;
      -webkit-transition:all .5s ease;
      transition:all .5s ease;
  }
  .active .mapping {
      transform: translate(-50%, -50%) rotate(-90deg) scale(1);
      opacity:1;
      -webkit-transition:all .5s ease .5s;
      transition:all .5s ease .5s;
  }
  .shop-left p{
      font-size: 20px;
      line-height: 1;
      font-family: titaniaregular,serif;
      position: absolute;
      color: #fff;
      opacity: 0;
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
      bottom: 50px;
      text-align: center !important;
      width: 100%;
      left: 0;
  }
  .shop-left.active p{
      opacity:1;
  }
  .map {
      position: relative;
      height: calc(100% - 50px);
      padding: 25px 75px 75px;
  }
  .devanture {
      position: absolute;
      bottom: 50px;
      left: 50px;
      max-width: 280px;
  }
  .preview,
  .preview-wrapper{
      height: 100%;
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
  
  @media only screen and (min-width:960px) and (max-width:1264px){
      
      .devanture {
          bottom: 15px;
          left: 15px;
          max-width: 200px;
      }      
      .navigation .select {
          font-size: 30px;
      }
      .select.active {
          font-size: 50px;
      }
      .mapping{
          font-size: 50px;
      }
      .cover {
          height: 35%;
          padding: 0 15px;
      }
      .middle-right {
          top: 375px;
      }
      .map {
          padding: 25px 85px 75px 40px;
      }
      .shop-select{
          padding: 30px 0;
      }
      .shop-left {
          padding-top: 130px;
      }
  }
  @media only screen and (min-width:600px) and (max-width:959px){
      .shop {
          height: auto;
          width: 100%;
          position: relative;
          min-height: none;
          background: transparent;
      }
      .navigation{
          display:none;
      }
      .shop-select {
          width:100%;
          position: relative;
          padding-top: 30px;
      }
      .shop-right {
          padding: 0 0 30px;
          margin-bottom: 30px;
      }
      .shop-left {
          padding: 30px 0 15px;
      }
      .shop-left p {
          position: relative;
          opacity: 1 !important;
          bottom: auto;
          font-size: 50px;
      }
      .middle-right {
          position: relative;
          right: 0;
          top: 0;
      }
      .mapping {
          text-align: center;
          display: block;
          position: relative;
          top: 0;
          left: 0;
          -webkit-transform: none !important;
          transform: none !important;
          width: 100%;
          font-size: 30px;
          margin: 15px 0;
          opacity: 1;
      }
      .devanture {
          display:none;
      } 
      .map {
          position: relative;
          height: 300px;
          padding: 15px;
      }
      .transform {
          transform: none !important;
      }
      .cover {
          height: 250px;
          padding: 0 15px;
      }
      .info {
          text-align: center;
      }
  }
  @media only screen and (max-width:599px){
      .shop {
          height: auto;
          width: 100%;
          position: relative;
          min-height: none;
          background: transparent;
      }
      .navigation{
          display:none;
      }
      .shop-select {
          width:100%;
          position: relative;
          padding-top: 30px;
      }
      .shop-right {
          padding: 0 0 30px;
          margin-bottom: 30px;
      }
      .shop-left {
          padding: 30px 0 15px;
      }
      .shop-left p {
          position: relative;
          opacity: 1 !important;
          bottom: auto;
          font-size: 30px !important;
      }
      .middle-right {
          position: relative;
          right: 0;
          top: 0;
      }
      .mapping {
          text-align: center;
          display: block;
          position: relative;
          top: 0;
          left: 0;
          -webkit-transform: none !important;
          transform: none !important;
          width: 100%;
          font-size: 20px;
          margin: 15px 0;
          opacity: 1;
      }
      .devanture {
          display:none;
      } 
      .map {
          position: relative;
          height: 300px;
          padding: 15px;
      }
      .transform {
          transform: none !important;
      }
      .cover {
          height: 250px;
          padding: 0 15px;
      }
      .info {
          text-align: center;
      }
  }
</style>
