<template>
  <div class="minishop">
      <div class="delacroix shop-select shop-left active">
          <p>1 RUE DELACROIX</p>
          <div class="middle-right">
              <a class="mapping" target="_blank" href="https://www.google.com.br/maps/place/La+Cour+des+Miracles+tatouages+et+piercing/@43.601287,1.4504512,17z/data=!4m13!1m7!3m6!1s0x12aebc9a9b1e13dd:0xaf2c8f779f133463!2s1+Rue+Delacroix,+31000+Toulouse!3b1!8m2!3d43.601287!4d1.4526399!3m4!1s0x12aebc845b6d2811:0x7f46f16bb41fc5ed!8m2!3d43.6012935!4d1.4526337">S'Y RENDRE</a>
          </div> 
      </div>      
      <div class="delacroix shop-select shop-right active">
        <div class="transform">
            <div class="info">
                <p>Mardi au Samedi : <b>10H à 12H et 14H à 19H</b></p>
                <a class="tel" href="tel:+33561539255">05 61 53 92 55</a><br/>
                <a class="mailto" href="mailto:contact@thebigvoodoo.com">contact@thebigvoodoo.com</a><br/>
                <p>1 RUE DELACROIX 31000 TOULOUSE</p>
            </div>
        </div>
      </div>      
      <div class="malbec shop-select shop-left">
          <p>10 RUE MALBEC</p>
          <div class="middle-right">
              <a class="mapping" target="_blank" href="https://www.google.fr/maps/place/the+Court+of+Miracles/@43.6021081,1.3699905,12z/data=!4m18!1m12!4m11!1m3!2m2!1d1.440715!2d43.6017352!1m6!1m2!1s0x12aebb63a06df025:0x4aa5e963aefb867e!2sla+cour+des+miracles+rue+malbec+google+map!2m2!1d1.4400303!2d43.6021295!3m4!1s0x12aebb63a06df025:0x4aa5e963aefb867e!8m2!3d43.6021295!4d1.4400303">S'Y RENDRE</a>
          </div> 
      </div>      
      <div class="malbec shop-select shop-right">
        <div class="transform">
            <div class="info">
                <p>Mardi au Samedi : <b>13H/19H</b></p>
                <a class="tel" href="tel:+33984011269">09 84 01 12 69</a><br/>
                <a class="mailto" href="mailto:contact@thebigvoodoo.com">contact@thebigvoodoo.com</a><br/>
                <p>10 RUE MALBEC 31000 TOULOUSE</p>
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
  mounted: () => {
  
      if($('.minishop').hasClass('mlb')){
          $(".malbec, .delacroix, #malbec, #delacroix").toggleClass('active');
      }  
      $('.select').on('click', function(){
          $(".malbec, .delacroix, #malbec, #delacroix").toggleClass('active');
      });
      
  }
}
</script>
<style>  
  .minishop {
      height: 240px;
      background: #000;
      width: 100%;
      position: relative;
      overflow: hidden;
      min-height:auto;
  }
  .minishop .shop-select {
      position: absolute;
      height: 100%;
      width:50%;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      padding: 30px;
      background:gray;
      overflow:hidden;
  }
  .minishop .shop-left {
      left:0;
      padding-top: 100px;
  }
  .minishop.all .shop-left {
      padding-top: 160px;
  }
  .minishop .shop-right{
      right:0;
  }
  .minishop .malbec.shop-left,
  .minishop .delacroix.shop-right{
      top:100%;
  }
  .minishop .malbec.shop-right,
  .minishop .delacroix.shop-left{
      top:-100%;
  }
  .minishop .malbec.shop-left.active,
  .minishop .malbec.shop-right.active,
  .minishop .delacroix.shop-left.active,
  .minishop .delacroix.shop-right.active{
      top:0;
  }
  .minishop .transform{
      position: relative;
      height: 100%;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
  }
  .minishop .malbec.shop-left .transform,
  .minishop .delacroix.shop-right .transform{
      transform: translateY(-60%);
      -webkit-transform: translateY(-60%);
  }
  .minishop .malbec.shop-right .transform,
  .minishop .delacroix.shop-left .transform{
      transform: translateY(60%);
      -webkit-transform: translateY(60%);
  }  
  .minishop .malbec.shop-left.active .transform,
  .minishop .malbec.shop-right.active .transform,
  .minishop .delacroix.shop-left.active .transform,
  .minishop .delacroix.shop-right.active .transform{
      transform: translateY(0%);
      -webkit-transform: translateY(0%);
  }
  .minishop.dlc .malbec,
  .minishop.dlc #malbec{
      display:none;
  }
  .minishop.mlb .delacroix,
  .minishop.mlb #delacroix{
      display:none;
  }
  .minishop .info {
      padding: 0 15px;
      color: #fff;
  }
  .minishop .info p {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 22px;
      padding: 0;
  }
  .minishop .info b, 
  .minishop .info a {
      font-size: 16px;
      font-weight: 500;
      font-family: 'titaniaregular', serif;
      letter-spacing:1px;
      color: #fff;
  }
  .minishop .tel {
      background: white none repeat scroll 0 0;
      color: black !important;
      display: inline-block;
      padding: 10px;
      margin-bottom:30px;
  }
  .minishop.mlb .navigation,
  .minishop.dlc .navigation{
      display:none;
  }
  .minishop .navigation {
      color: #fff;
      top: 0;
      position: absolute;
      text-align: center;
      padding: 25px;
      width: 50%;
      z-index:2;
  }
  .minishop .navigation .select {
      font-size: 45px;
      line-height: 1;
      font-weight: 900;
      font-family: 'titaniaregular', serif;
      color:#000;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      cursor:pointer;
  }
  .minishop .navigation .select.active{
      color:#fff;
      font-size: 72px;
  }
  .minishop .middle-right {
      position: relative;
      width: auto;
      height: auto;
      z-index:1;
      top: 0;
      left:0;
  }
  .minishop .mapping {
      margin: 15px 0;
      line-height: 1;
      font-weight: 900;
      font-family: titaniaregular,serif;
      text-align: center;
      display: block;
      position: relative;
      top: 0;
      left:0;
      width: 100%;
      color:#fff !important;
      font-size: 30px;
      opacity:1;
      -webkit-transition:all .5s ease;
      transition:all .5s ease;      
      -webkit-transform:none !important;
      transform:none !important;
  }
  .minishop .active .mapping {
      opacity:1;
      -webkit-transition:all .5s ease .5s;
      transition:all .5s ease .5s;
  }
  .minishop .shop-left p{
      font-size: 50px;
      line-height: 1;
      font-family: titaniaregular,serif;
      position: relative;
      color: #fff;
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
      text-align: center !important;
      width: 100%;
      left: 0;
      opacity:1;
  }
  .minishop.all .shop-left p {
      display:none;
  }
  .minishop .entry{
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
  .minishop .entry:hover{
      color:#fff;
  }
  .minishop .entry:before{
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
  .minishop .entry:hover:before{
      transform:scale(1);
      -webkit-transform:scale(1);
  }
  .minishop .entry .fab{
      position:relative;
  }
  @media only screen and (min-width:960px) and (max-width:1264px){
      .minishop .shop-select{
          padding: 30px 0;
      }
      .minishop .shop-select.shop-left {
          padding-top: 130px;
      }   
      .minishop .navigation .select {
          font-size: 30px;
      }
      .minishop .navigation .select.active {
          font-size: 50px;
      }
      .minishop .mapping{
          font-size: 50px;
      }
      .minishop .info a, 
      .minishop .info b {
          font-size: 20px;
          font-weight: 100;
      }
  }
  @media only screen and (min-width:600px) and (max-width:959px){
      .minishop {
          height: auto;
          width: 100%;
          position: relative;
          background: transparent;
      }
      .minishop .navigation{
          display:none;
      }
      .minishop .shop-select {
          width:100%;
          position: relative;
          padding-top: 30px;
      }
      .minishop .shop-right {
          padding: 0 0 30px;
          margin-bottom: 30px;
      }
      .minishop .shop-left {
        padding: 30px 0 15px !important;
      }
      .minishop .shop-left p {
          position: relative;
          opacity: 1 !important;
          bottom: auto;
          font-size: 50px;
      }
      .minishop.all .shop-left p {
          display:block;
      }
      .minishop .middle-right {
          position: relative;
          right: 0;
          top: 0;
      }
      .minishop .mapping {
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
      .minishop .transform {
          transform: none !important;
      }
      .minishop .info {
          text-align: center;
      }
      .minishop .info p {
          text-align: center;
      }
  }
  @media only screen and (max-width:599px){
      .minishop {
          height: auto;
          width: 100%;
          position: relative;
          background: transparent;
      }
      .minishop .navigation{
          display:none;
      }
      .minishop .shop-select {
          width:100%;
          position: relative;
          padding-top: 30px;
      }
      .minishop .shop-right {
          padding: 0 0 30px;
          margin-bottom: 30px;
      }
      .minishop .shop-left {
        padding: 30px 0 15px !important;
      }
      .minishop .shop-left p {
          position: relative;
          opacity: 1 !important;
          bottom: auto;
          font-size: 32px;
          margin:0;
      }
      .minishop.all .shop-left p {
          display:block;
      }
      .minishop .middle-right {
          position: relative;
          right: 0;
          top: 0;
      }
      .minishop .mapping {
          text-align: center;
          display: block;
          position: relative;
          top: 0;
          left: 0;
          -webkit-transform: none !important;
          transform: none !important;
          width: 100%;
          font-size: 26px;
          margin: 15px 0;
          opacity: 1;
      }
      .minishop .transform {
          transform: none !important;
      }
      .minishop .info {
          text-align: center;
      }
      .minishop .info p {
          text-align: center;
      }
  }
</style>
