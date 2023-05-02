<template>
  <div>
    <footer id="footer" v-if="$route.fullPath !== '/signup/private' && $route.fullPath !== '/login' && $route.fullPath !== '/signup/state'">
      <div class="d-flex justify-content-between block-container footer-block">
        <div class="col-12 col-md-4 d-flex justify-content-start">
          <div>
            <nuxt-link to="/">
              <img src="~/assets/landing/images/Logo.svg" alt="logo">
            </nuxt-link>
            <p class="footer-text">Զգա մրցակցության առավելությունը.<br/> Գնի՛ր և վաճառի՛ր տենդերների միջոցով</p>
            <div class="social-media d-flex align-items-center">
              <a href="https://www.facebook.com/iTender.am" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47619 6.47619 2 12 2C17.5238 2 22 6.47619 22 12C22 17.096 18.1903 21.3004 13.2629 21.9211C13.2867 21.916 13.3102 21.9105 13.3333 21.9047V14.6666H15.9048L16.2857 12H13.3333V10.5714C13.3333 9.52379 13.7143 8.47617 14.6667 8.47617H16.2857V6.19046C16.193 6.19046 16.0702 6.18043 15.9043 6.16688C15.5589 6.13868 15.0268 6.09522 14.1905 6.09522C11.8095 6.09522 10.381 7.33331 10.381 10.2857V12H8V14.6666H10.4762V21.8847C5.6759 21.1511 2 17.0057 2 12ZM11.9802 22C11.9868 22 11.9934 22 12 22C12.0066 22 12.0133 22 12.0199 22C12.0133 22 12.0066 22 12 22C11.9934 22 11.9868 22 11.9802 22Z" fill="#6E7485"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/itender.am/" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 5.01786C14.3274 5.01786 14.5298 5.01786 15.4405 5.01786C16.25 5.01786 16.756 5.22024 17.0595 5.32143C17.4643 5.42262 17.7679 5.625 18.0714 5.92857C18.375 6.23214 18.5774 6.53571 18.6786 6.94048C18.7798 7.24405 18.881 7.64881 18.9821 8.55952C18.9821 9.36905 18.9821 9.67262 18.9821 12C18.9821 14.3274 18.9821 14.5298 18.9821 15.4405C18.9821 16.25 18.7798 16.756 18.6786 17.0595C18.5774 17.4643 18.375 17.7679 18.0714 18.0714C17.7679 18.375 17.4643 18.5774 17.0595 18.6786C16.756 18.7798 16.3512 18.881 15.4405 18.9821C14.631 18.9821 14.3274 18.9821 12 18.9821C9.67262 18.9821 9.47024 18.9821 8.55952 18.9821C7.75 18.9821 7.24405 18.7798 6.94048 18.6786C6.53571 18.5774 6.23214 18.375 5.92857 18.0714C5.625 17.7679 5.42262 17.4643 5.32143 17.0595C5.22024 16.756 5.11905 16.3512 5.01786 15.4405C5.01786 14.631 5.01786 14.3274 5.01786 12C5.01786 9.67262 5.01786 9.47024 5.01786 8.55952C5.01786 7.75 5.22024 7.24405 5.32143 6.94048C5.52381 6.53571 5.72619 6.23214 6.02976 5.92857C6.33333 5.625 6.6369 5.42262 7.04167 5.32143C7.34524 5.22024 7.75 5.01786 8.55952 5.01786C9.47024 5.01786 9.67262 5.01786 12 5.01786ZM12 3.5C9.67262 3.5 9.36905 3.5 8.45833 3.5C7.54762 3.5 6.94048 3.70238 6.43452 3.90476C5.92857 4.10714 5.42262 4.41071 4.91667 4.91667C4.41071 5.42262 4.20833 5.82738 3.90476 6.43452C3.70238 7.04167 3.60119 7.64881 3.5 8.45833C3.5 9.36905 3.5 9.67262 3.5 12C3.5 14.3274 3.5 14.631 3.5 15.5417C3.5 16.4524 3.70238 17.0595 3.90476 17.5655C4.10714 18.0714 4.41071 18.5774 4.91667 19.0833C5.32143 19.4881 5.82738 19.7917 6.43452 20.0952C6.94048 20.2976 7.54762 20.3988 8.45833 20.5C9.36905 20.5 9.67262 20.5 12 20.5C14.3274 20.5 14.631 20.5 15.5417 20.5C16.4524 20.5 17.0595 20.2976 17.5655 20.0952C18.0714 19.8929 18.5774 19.5893 19.0833 19.0833C19.4881 18.6786 19.7917 18.1726 20.0952 17.5655C20.2976 17.0595 20.3988 16.4524 20.5 15.5417C20.5 14.631 20.5 14.3274 20.5 12C20.5 9.67262 20.5 9.36905 20.5 8.45833C20.5 7.54762 20.2976 6.94048 20.0952 6.43452C19.8929 5.92857 19.5893 5.42262 19.0833 4.91667C18.5774 4.5119 18.1726 4.20833 17.5655 3.90476C17.0595 3.70238 16.4524 3.60119 15.5417 3.5C14.631 3.5 14.3274 3.5 12 3.5Z" fill="#6E7485"/>
                  <path d="M12.0002 7.54761C9.47047 7.54761 7.54785 9.47023 7.54785 12C7.54785 14.5298 9.57166 16.5536 12.1014 16.5536C14.6312 16.5536 16.655 14.5298 16.655 12C16.655 9.47023 14.53 7.54761 12.0002 7.54761ZM12.0002 15.0357C10.3812 15.0357 8.96452 13.7202 8.96452 12C8.96452 10.2798 10.28 8.96427 12.0002 8.96427C13.7205 8.96427 15.0359 10.2798 15.0359 12C15.0359 13.7202 13.6193 15.0357 12.0002 15.0357Z" fill="#6E7485"/>
                  <path d="M16.5534 8.55958C17.1123 8.55958 17.5653 8.10653 17.5653 7.54767C17.5653 6.98881 17.1123 6.53577 16.5534 6.53577C15.9945 6.53577 15.5415 6.98881 15.5415 7.54767C15.5415 8.10653 15.9945 8.55958 16.5534 8.55958Z" fill="#6E7485"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/i-tender-a7871a166/" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3.5 8.5H7V20.5H3.5V8.5ZM5.3 7C4.2 7 3.5 6.3 3.5 5.3C3.5 4.3 4.2 3.5 5.3 3.5C6.4 3.5 7 4.3 7.1 5.3C7 6.3 6.4 7 5.3 7ZM20.5 20.5H17V14.1C17 12.5 16.1 11.5 14.7 11.5C13.6 11.5 13.1 12.2 12.8 12.9C12.7 13.1 12.7 13.8 12.7 14.2V20.5H9.2V8.5H12.7V10.4C13.2 9.5 14 8.5 16.1 8.5C18.6 8.5 20.5 10.1 20.5 13.7V20.5Z" fill="#6E7485"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCD3gwb1H1NE9qujwPzCd3pg" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23.4 6.36628C23.2 5.18023 22.2 4.2907 20.9 4.09302C18.9 3.79651 15.6 3.5 11.9 3.5C8.2 3.5 4.9 3.79651 2.9 4.09302C1.7 4.19186 0.7 5.18023 0.5 6.36628C0.2 7.65116 0 9.62791 0 12C0 14.3721 0.2 16.3488 0.5 17.6337C0.7 18.8198 1.7 19.7093 3 19.907C5 20.2035 8.3 20.5 12 20.5C15.7 20.5 19 20.2035 21 19.907C22.2 19.7093 23.3 18.8198 23.5 17.6337C23.7 16.3488 24 14.3721 24 12C23.9 9.62791 23.6 7.65116 23.4 6.36628ZM9.5 15.3605V8.14535L15.7 11.8023L9.5 15.3605Z" fill="#6E7485"/>
                </svg>
              </a>
              <a href="https://t.me/+BdQcnDs4umc1MTdi" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="36px" height="36px">
                  <path fill="#6E7485" d="M36,12c13.255,0,24,10.745,24,24S49.255,60,36,60S12,49.255,12,36S22.745,12,36,12z M44.279,45.783	c0.441-1.354,2.51-14.853,2.765-17.513c0.077-0.806-0.177-1.341-0.676-1.58c-0.603-0.29-1.496-0.145-2.533,0.229	c-1.421,0.512-19.59,8.227-20.64,8.673c-0.995,0.423-1.937,0.884-1.937,1.552c0,0.47,0.279,0.734,1.047,1.008	c0.799,0.285,2.812,0.895,4.001,1.223c1.145,0.316,2.448,0.042,3.178-0.412c0.774-0.481,9.71-6.46,10.351-6.984	c0.641-0.524,1.152,0.147,0.628,0.672c-0.524,0.524-6.657,6.477-7.466,7.301c-0.982,1.001-0.285,2.038,0.374,2.453	c0.752,0.474,6.163,4.103,6.978,4.685c0.815,0.582,1.641,0.846,2.398,0.846S43.902,46.94,44.279,45.783z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex justify-content-md-center">
          <ul>
            <li><span class="footer-info-header">Կոնտակտներ</span></li>
            <li class="d-flex footer-info-header-item"><span>Հեռախոս՝</span> <a style="margin-left: 8px;" href="tel:+37491244970">+374 91 24 49 70 <br/> +374 94 24 49 70</a></li>
            <li class="d-flex footer-info-header-item"><span>Էլ. հասցե՝</span> <a style="margin-left: 8px;" href="mailto:info@itender.am">info@itender.am</a></li>
            <li class="d-flex footer-info-header-item"><span>Հասցեն՝</span> ք․Երևան, Ազատության 24, 313 սենյակ</li>
            <!-- <li class="d-flex footer-info-header-item"><span>Հին կայք՝</span> <a style="margin-left: 8px;" href="https://old.itender.am/">old.itender.am</a></li> -->
          </ul>
        </div>
        <div class="col-12 col-md-4 d-flex justify-content-md-end">
          <ul>
            <li><span class="footer-info-header">Կայքի քարտեզ</span></li>
            <li><nuxt-link class="footer-menu" exact to="/">Գլխավոր</nuxt-link></li>
            <li><nuxt-link class="footer-menu" to="/packages">Փաթեթներ</nuxt-link></li>
            <li><nuxt-link class="footer-menu" to="/tender">Տենդերներ</nuxt-link></li>
            <li><nuxt-link class="footer-menu" to="/help">Տեղեկատվություն</nuxt-link></li>
            <li><nuxt-link class="footer-menu" to="/regulation">Կանոնակարգ</nuxt-link></li>
          </ul>
        </div>
      </div>
      <button class="toTop-btn" @click="toTop">
        <img src="~/assets/landing/images/arrow-top.svg" alt="arrow">
      </button>
    </footer>
    <div v-if="hide">
      <hr class="m-0 footer-hr">
      <div class="footer-last-block row col-12">
        <span class="col-5">© 2018 - 2023 Բոլոր իրավունքները պաշտպանված են։</span>
        <span class="col-4">
          Crafted with
          <i class="mdi mdi-heart text-danger"></i> by
          <a href="https://www.proxoft.org/" target="_blank">Proxoft systems</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleMenu: false,
      isMobile: false,
      hide: true,
      open: false,
      links: [
        { to: '/', name: 'Home' },
        { to: '/about', name: 'About' },
        { to: '/products', name: 'Products' },
        { to: '/products/view', name: 'Products/View' },
        { to: '/about/ben-jones', name: 'Nested About' },
        { to: '/products/edit/64', name: 'Edit Product By Route Param' },
        { to: '/categories/2/products/3', name: 'Complex Route' },
        { to: '/categories/2/products/someproduct', name: 'Invalid Route Param' },
        { to: '/products/view', name: 'Vuex Store Example' },
        { to: '/admin', name: 'Admin Layout' },
        { to: '/plugin', name: 'Vue-Notifications Plugin' },
        { to: '/products/view-async', name: 'Async Fetch Example' }
      ]
    }
  },
  methods: {
    toTop(){
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    closeMobMenu(){
      document.getElementById("mob-menu").classList.remove("show");
      document.getElementsByTagName('body')[0].style.overflow = "auto";
    },
    menu(){
      this.toggleMenu = !this.toggleMenu
      if(this.toggleMenu){
        $('body').css('overflow', 'hidden');
      }else{
        $('body').css('overflow', 'auto');
      }         
    }
  },
  watch: {
    '$route.name' () {
      this.open = false
    }
  }
}
</script>

<style scoped>
a, a:hover{
  text-decoration: none !important;
}
/* .navbar {
  position: relative;
  background: #333333;
  color: white;
  padding: 10px;
}
.navbar-drawer {
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  width: 250px;
  top: 100%;
  left: -500px;
  padding: 0 10px 20px;
  background: #333333;
  text-align: center;
  transition: left 0.35s;
}
.isOpen {
  left: 0;
}
span, a {
  padding: 10px;
  color: white;
  cursor: pointer;
  text-decoration: none;
}
span:hover, a:hover {
  background: white;
  color: #333333;
}
a.nuxt-link-active {
  cursor: default;
  background: #41B883;
  color: #333333;
} */
</style>
