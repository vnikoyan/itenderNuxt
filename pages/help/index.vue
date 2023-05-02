<template>
  <div id="help"  class="help-3">
        <header class="position-relative mob-image-block">
            <img src="~/assets/landing/images/help-page.jpg" alt="image" class="w-100">
            <img src="~/assets/landing/images/sliderLayout.png" alt="layout" class="w-100 layout">
        </header>
        <div class="help-block">
            <div class="block-container">
                <h1 class="main-title">Օգնություն</h1>
                <p class="text-distance text-center mb-0 main-content-styles px-4">Ստացիր տենդերներին վերաբերող հարցերի պատասխանները</p>
            </div>
          <b-card no-body>
              <b-tabs pills card>
                  <template v-if="me.package !== 'Գոլդ'" #tabs-end>
                      <b-nav-item href="#" role="presentation" @click="pleaseBuyGoldPackage()">Բողոքարկում</b-nav-item>
                  </template>
                  <b-tab title="Տեղեկատվություն" active class="p-0">
                        <div class="help-content" id="accordion" v-for="(item, index) in info" :key="index">
                            <b-card no-body class="my-3">
                                <b-card-header header-tag="header" class="w-100 m-0 card-header help-content border-0 help-content-main-block" :id="`${'heading_' + index}`" role="tab">
                                    <div v-b-toggle="`${'collapse_' + index}`"  class="help-content-block d-flex align-items-center justify-content-between" data-toggle="collapse" :data-target="`${'#collapse_' + index}`" aria-expanded="false" :aria-controls="`${'#collapse_' + index}`">
                                        <h1 class="help-content-header mr-5 active mb-0">{{item.title.hy}}</h1>
                                        <img src="~/assets/landing/images/more.svg" alt="arrow icon" class="help-content-more-arrow active">
                                    </div>
                                </b-card-header>
                                <b-collapse :id="`${'collapse_' + index}`" class="collapse" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <div class="card-body help-content-text" v-html="item.description.hy"></div>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                  </b-tab>
                  <b-tab title="ՀՏՀ" class="p-0"> 
                      <div class="help-content" id="accordion" v-for="(item, index) in faq" :key="index">
                        <b-card no-body class="my-3">
                            <b-card-header header-tag="header" class="w-100 m-0 card-header help-content border-0 help-content-main-block" :id="`${'heading_' + index}`" role="tab">
                                <div v-b-toggle="`${'collapse_' + index}`"  class="help-content-block d-flex align-items-center justify-content-between" data-toggle="collapse" :data-target="`${'#collapse_' + index}`" aria-expanded="false" :aria-controls="`${'#collapse_' + index}`">
                                    <h1 class="help-content-header mr-5 active mb-0">{{item.title.hy}}</h1>
                                    <img src="~/assets/landing/images/more.svg" alt="arrow icon" class="help-content-more-arrow active">
                                </div>
                            </b-card-header>
                            <b-collapse :id="`${'collapse_' + index}`" class="collapse" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <div class="card-body help-content-text" v-html="item.description.hy"></div>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                      </div>
                  </b-tab>
                  <b-tab v-if="me.package === 'Գոլդ'" title="Բողոքարկում" class="p-0" :disabled="me.package !== 'Գոլդ'"> 
                    <div class="help-content" id="accordion" v-for="(item, index) in protest" :key="index">
                        <b-card no-body class="my-3">
                            <b-card-header header-tag="header" class="w-100 m-0 card-header help-content border-0 help-content-main-block" :id="`${'heading_' + index}`" role="tab">
                                <div v-b-toggle="`${'collapse_' + index}`"  class="help-content-block d-flex align-items-center justify-content-between" data-toggle="collapse" :data-target="`${'#collapse_' + index}`" aria-expanded="false" :aria-controls="`${'#collapse_' + index}`">
                                    <h1 class="help-content-header mr-5 active mb-0">{{item.title.hy}}</h1>
                                    <img src="~/assets/landing/images/more.svg" alt="arrow icon" class="help-content-more-arrow active">
                                </div>
                            </b-card-header>
                            <b-collapse :id="`${'collapse_' + index}`" class="collapse" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <div class="card-body help-content-text" v-html="item.description.hy"></div>
                                </b-card-body>
                            </b-collapse>
                        </b-card>  
                    </div>
                  </b-tab>
              </b-tabs>
          </b-card>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  computed: {
      info() {
          return this.$store.getters['info/info']
      },
      faq() {
          return this.$store.getters['faq/faq']
      },
      protest() {
          return this.$store.getters['protest/protest']
      },
      isAuthenticated() {
          return this.$store.getters['auth/isAuthenticated']
      },
      me() {
          return this.$store.getters['user/me']
      },
  },
  mounted() {
      this.$store.dispatch('info/get')
      this.$store.dispatch('faq/get')
      this.$store.dispatch('protest/get')
  },
  methods:{
      pleaseBuyGoldPackage(){
          this.$fire({
              text: "Հասանելի է Գոլդ փաթեթի օգտատերերին",
              type: "info",
              confirmButtonText: 'Լավ'
          })
      },
      consoleLog(msg) {
          console.log(msg)
      },
  },
  head: {
      title: 'Տենդեր օգնություն',
      link: [
          {rel: 'canonical', href: 'https://www.itender.am/help'}
      ],
      meta: [
          { name: 'description', content: 'Ինչ է տենդերը, ինչպես մասնակցել տենդերների և նմանատիպ հարցերի պատասխանները կարող եք գտնել iTender-ում։' }
      ]
  },
}
</script>

<style scoped>
  .text-distance{
      margin-top: 16px;
      margin-bottom: 30px;
  }
  .help-content-more-arrow{
      transform: rotate(90deg);
      transition: all 0.5s linear;
  }
  .help-content{
      background: #F7F7F7 !important;
      margin: 0 25%;
      cursor: pointer;
      border: 0 !important;
      border-radius: 12px;
  }
  .help-block{
      margin: 50px 0 60px;
  }
  .help-content-block{
      background: #F7F7F7;
      margin-bottom: 12px;
  }
  .help-content-block:last-child{
      margin-bottom: 0;
  }
  .help-content-header{
      color: #2D3036;
      font-size: 18px;
      line-height: 26px;
      transition: all 0.5s linear;
  }
  .help-content-text{
      color: #595E6B;
      font-size: 16px;
      line-height: 24px;
      background-color: white;
      border: 1px solid #EDEFF2;
      padding: 20px;
      border-radius: 0 0 12px 12px;
  }
  .help-content-main-block{
      padding: 16px;
  }
  [aria-expanded="true"] .help-content-header.active{
      color: #0065D9;
  }
  [aria-expanded="true"] .help-content-more-arrow.active{
      transform: rotate(270deg);
  }

  

  @media only screen and (max-width: 1200px) {
      .help-content{
          margin: 0 25px;
      }
  }
</style>
<style scoped>
.card{
margin-bottom: 12px;
}
</style>
<style>
  #help .nav.nav-pills, #help .nav-link{
      width: 100%;
  }
  #help .card{
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
  }
  #help .card-header:not(.help-content){
      background: white !important;
      box-shadow: none !important;
      margin: 30px auto 50px;
      width: fit-content;
      min-width: 500px;
      border: 1px solid #DADDE6 !important;
      box-sizing: border-box;
      border-radius: 8px !important;
      padding: 0 !important;
  }
  #help .nav.nav-pills{
      background: transparent !important;
      margin: 0 !important;
  }
  #help .nav-item{
      flex: 0 0 50%;
      max-width: 50%;
  }
  .help-3 .nav-item{
      flex: 0 0 calc(100% / 3) !important;
      max-width: calc(100% / 3) !important;
  }
  #help .nav-pills .nav-link.active, .nav-pills .show > .nav-link{
      background: #006BE6 !important;
      box-shadow: 0px 4px 8px rgba(0, 107, 230, 0.15) !important;
      border-radius: 8px !important;
      color: #FFFFFF;
      justify-content: center;
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 24px;
  }
  #help .nav-pills .nav-link{
      color: #2D3036;
      justify-content: center;
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 24px;
      padding: 12px 20px;
      transition: all 0.2s linear;
  }
  #help .tab-content > .tab-pane{
      padding-bottom: 0 !important;
  }
  .help-content-text img{
      max-width: 100%;
  }
  @media only screen and (max-width: 760px) {
      .help-content-text iframe{
          max-width: 100%;
          height: auto;
      }
      .help-3 .card-header-pills{
          justify-content: center;
      }
      .help-3 .nav-item{
          /* flex: 0 0 50% !important;
          max-width: 50% !important; */
      }
  }
</style>

