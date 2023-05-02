<template>
  <div id="regulation">
      <header class="position-relative mob-image-block">
          <img src="~/assets/landing/images/terms.jpg" alt="image" class="w-100 regulation-image">
          <img src="~/assets/landing/images/sliderLayout.png" alt="layout" class="w-100 layout">
      </header>
      <!-- <div class="block-container" v-html="description"></div>   -->
      <div class="regulation-main-block" v-html="description"></div>
  </div>
</template>
<script>
export default {
  name: 'Regulation',
  data() {
    return {
      description: ''
    }
  },
  mounted(){
      this.$client.get('getRegulation').then(({data}) => {
        this.description = data.description;
      })
  },
  head: {
    title: 'Տենդեր կազմակերպելու և մասնակցության կանոնակարգ',
    link: [
      {rel: 'canonical', href: 'https://www.itender.am/regulation'}
    ],
    meta: [
      { name: 'description', content: 'Ծանոթացեք iTender տենդերների կայքի միջոցով տենդերի կազմակերպման, մրցույթների մասնակցության կանոնակարգին։' }
    ]
  },
}
</script>
<style>
  .regulation-main-block{
    margin: 50px 200px 90px;
  }
  .regulation-main-title{
    margin: 0;
    color: #0E0F12;
    line-height: 40px;
    font-size: 32px;
    font-weight: 700;
  }
  .regulation-distance-block{
    margin: 40px 12.5% 0;
  }
  .regulation-block-container{
    margin: 40px 0px;
  }
  .regulation-second-block-container{
    margin: 0 0;
  }
  .regulation-content-block{
    display: flex; 
    justify-content: space-between; 
    margin-top: 24px;
  }
  .regulation-content-block ol{
    margin-left: -1em;
    width: 100%; 
    margin-bottom: 0;
  }
  .regulation-content-block ol li{
    color: #40444D;
    margin-bottom: 14px;
  }
  .regulation-content-block ol li:last-child{
    margin-bottom: 0;
  }
  .regulation-content-block ol li span{
    color: #595E6B;
    font-size: 16px;
    line-height: 24px;
  }
  .regulation-text-width{
    width: 500px;
  }
  .regulation-header{
    color: #006BE6; 
    line-height: 32px; 
    font-size: 23px; 
    margin-bottom: 0;
  }
  
  @media only screen and (max-width: 1200px) {
    .regulation-main-block{
      margin: 40px 0 140px;
    }
    .regulation-main-title{
      font-size: 26px;
      line-height: 36px;
      margin: 0 20px;
    }
    .regulation-distance-block{
      margin: 30px 20px 0;
    }
    .regulation-content-block{
      flex-direction: column;
    }
    .regulation-content-block ol{
      width: 100%; 
    }
    .regulation-content-block ol:first-child li:last-child{
      margin-bottom: 14px;
    }
    .regulation-block-container{
      margin: 40px 20px;
    }
    .regulation-second-block-container{
      margin: 0 20px;
    }
    .regulation-text-width{
      width: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    .regulation-content-block ol li span{
      font-size: 14px;
    }
    .regulation-image{
      left: -300px !important;
    }
    .regulation-header{
      font-size: 20px;
      line-height: 28px;
    }
  }
</style>
