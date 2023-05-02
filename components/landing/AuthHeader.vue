<template>
  <div id="authHeader">
    <div class="desktop">
      <div class="header">
        <div class="block-container d-flex align-items-center justify-content-between h-100">
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
          <div class="info d-flex">
            <a class="d-flex align-items-center" href="mailto:info@itender.am">
              <img src="~/assets/landing/images/Mail.svg" alt="mail">
              <span>info@itender.am</span>
            </a>
            <a class="d-flex align-items-center" href="tel:+37491244970">
              <img src="~/assets/landing/images/Phone.svg" alt="phone">
              <span>+374 94 244 970</span>
            </a>
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="block-container d-flex justify-content-between align-items-center h-100 header-block ">
          <nuxt-link to="/">
            <img src="~/assets/landing/images/Logo.svg" alt="logo">
          </nuxt-link>
          <div class="d-flex align-items-center">
            <ul class="d-flex">
              <li><nuxt-link exact to="/" class="menu-item main">Գլխավոր</nuxt-link></li>
              <li><nuxt-link :to="userType === 'STATE' ? '/packages/state' : '/packages/private'" class="menu-item">Փաթեթներ</nuxt-link></li>
              <li><nuxt-link to="/participant/tenders" class="menu-item">Տենդերներ</nuxt-link></li>
              <li><nuxt-link to="/help" class="menu-item">Օգնություն</nuxt-link></li>
              <li><nuxt-link to="/regulation" class="menu-item">Կանոնակարգ</nuxt-link></li>
            </ul>
            <div class="spacing-block dropdown position-relative">
              <div @click="dropdownFunc" class="user-account d-flex" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="user d-flex align-items-end justify-content-center">
                  <img src="~/assets/landing/images/Union.svg" alt="user">
                </div>
                <button class="user-btn rotate-arrow">
                  <img src="~/assets/landing/images/arrow-bottom.svg" alt="arrow">
                </button>
              </div>
              <div :key="dropdownKey" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span @click="$router.push('/packages/state')" class="dropdown-item" v-if="userPackage === 'Անվճար'">
                  Դուք դեռ ձեռք չեք բերել որևէ փաթեթ
                </span>
                <a class="dropdown-item" v-tooltip="userPackage === 'Անվճար' && $store.getters.userType === 'STATE' ? 'Դուք դեռ ձեռք չեք բերել որևէ փաթեթ' : ''"
                  @click.prevent="userPackage === 'Անվճար' && $store.getters.userType === 'STATE' ? $router.push('/') : $router.push('/dashboard')" 
                  :class="userPackage === 'Անվճար' && $store.getters.userType === 'STATE' ? 'disabled' : ''">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63637 0H5.27274C6.09092 0 6.81819 0.727274 6.9091 1.63637V5.27274C6.9091 6.18183 6.18183 6.9091 5.27274 6.9091H1.63637C0.727274 6.9091 0 6.18183 0 5.27274V1.63637C0 0.727274 0.727274 0 1.63637 0ZM1.36364 5.45456H5.45456V1.36364H1.36364V5.45456ZM10.7277 0H14.364C15.1822 0 15.9095 0.727274 16.0004 1.63637V5.27274C16.0004 6.18183 15.2731 6.9091 14.364 6.9091H10.7277C9.81858 6.9091 9.09131 6.18183 9.09131 5.27274V1.63637C9.09131 0.727274 9.81858 0 10.7277 0ZM10.4549 5.45456H14.5459V1.36364H10.4549V5.45456ZM5.27274 9.09089H1.63637C0.727274 9.09089 0 9.81816 0 10.7273V14.3636C0 15.2727 0.727274 16 1.63637 16H5.27274C6.18183 16 6.9091 15.2727 6.9091 14.3636V10.7273C6.81819 9.81816 6.09092 9.09089 5.27274 9.09089ZM5.45456 14.5454H1.36364V10.4545H5.45456V14.5454ZM10.7277 9.09094H14.364C15.1822 9.09094 15.9095 9.81822 16.0004 10.7273V14.3637C16.0004 15.2728 15.2731 16 14.364 16H10.7277C9.81858 16 9.09131 15.2728 9.09131 14.3637V10.7273C9.09131 9.81822 9.81858 9.09094 10.7277 9.09094ZM10.4549 14.5455H14.5459V10.4546H10.4549V14.5455Z" fill="#006BE6"/>
                  </svg>
                  {{isMobile ? 'Աշխատանքային վահանակ' : 'Աշխատանքային վահանակ'}}
                </a>
                <a class="dropdown-item" :class="userPackage === 'Անվճար' && $store.getters.userType === 'STATE' ? 'disabled' : ''" @click.prevent="$router.push('/settings')" id="settings_detail_tab"
                  href="#settings_detail" data-toggle="pill">
                  <svg width="16" height="18" viewBox="0 0 16 18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6837 4.72369C12.6837 7.28062 10.6349 9.44416 8.00079 9.44416C5.36665 9.44416 3.31787 7.28062 3.31787 4.62535C3.31787 2.06843 5.36665 -0.0951168 8.00079 0.0032263C10.5374 0.0032263 12.6837 2.06843 12.6837 4.72369ZM11.2203 4.62535C11.2203 2.85518 9.75689 1.38003 8.00079 1.38003C6.2447 1.38003 4.78128 2.85518 4.78128 4.62535C4.78128 6.39553 6.2447 7.87067 8.00079 7.87067C9.75689 7.87067 11.2203 6.39553 11.2203 4.62535ZM5.17072 10.9193H10.8293C13.6585 10.9193 16 13.2795 16 16.1315V18H0V16.1315C0 13.2795 2.34146 10.9193 5.17072 10.9193ZM1.46341 16.6232H14.439V16.2298C14.439 14.1646 12.7805 12.4928 10.7317 12.4928H5.17072C3.12195 12.4928 1.46341 14.1646 1.46341 16.2298V16.6232Z" fill="#006BE6"/>
                  </svg>
                  Անձնական տվյալներ
                </a>
                <a class="dropdown-item" @click.prevent="$store.dispatch('logout')" href="javascript:void(0)">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.9585 14.539L2.05574 1.46104H8.18145V0H2.2502C1.27787 0 0.5 0.779221 0.5 1.55844V14.2468C0.5 15.2208 1.27787 16 2.2502 16H8.08421V14.539H1.9585ZM12.6802 7.31816H5.09601V8.7792H12.6802L10.4439 11.0195L11.5134 11.9935L14.4304 9.07141L15.5 8.09738L14.4304 6.92855L11.5134 4.00647L10.4439 5.0779L12.6802 7.31816Z" fill="#006BE6"/>
                  </svg>
                  Ելք համակարգից
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="header">
        <div class="block-container">
          <div class="info d-flex flex-column align-items-center">
            <a class="d-flex align-items-center" href="tel:+37491244970">
              <img src="~/assets/landing/images/Phone.svg" alt="phone">
              <span>+374 94 244 970</span>
            </a>
            <a class="d-flex align-items-center" href="mailto:info@itender.am">
              <img src="~/assets/landing/images/Mail.svg" alt="mail">
              <span>info@itender.am</span>
            </a>
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="block-container d-flex justify-content-between align-items-center h-100 header-block">
          <nuxt-link to="/">
            <img src="~/assets/landing/images/Logo.svg" alt="logo">
          </nuxt-link>
          <div class="d-flex align-items-center">
            <div class="dropdown position-relative mr-4">
              <div @click="dropdownFunc" class="user-account d-flex" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="user d-flex align-items-end justify-content-center">
                  <img src="~/assets/landing/images/Union.svg" alt="user">
                </div>
                <button class="user-btn rotate-arrow">
                  <img src="~/assets/landing/images/arrow-bottom.svg" alt="arrow">
                </button>
              </div>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" v-tooltip="userPackage === 'Անվճար' && $store.getters.userType === 'STATE' ? 'Դուք դեռ ձեռք չեք բերել որևէ փաթեթ' : ''"
                  @click.prevent="userPackage === 'Անվճար' && $store.getters.userType === 'STATE' ? $router.push('/') : $router.push('/dashboard')" 
                  :class="userPackage === 'Անվճար' && $store.getters.userType === 'STATE' ? 'disabled' : ''">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63637 0H5.27274C6.09092 0 6.81819 0.727274 6.9091 1.63637V5.27274C6.9091 6.18183 6.18183 6.9091 5.27274 6.9091H1.63637C0.727274 6.9091 0 6.18183 0 5.27274V1.63637C0 0.727274 0.727274 0 1.63637 0ZM1.36364 5.45456H5.45456V1.36364H1.36364V5.45456ZM10.7277 0H14.364C15.1822 0 15.9095 0.727274 16.0004 1.63637V5.27274C16.0004 6.18183 15.2731 6.9091 14.364 6.9091H10.7277C9.81858 6.9091 9.09131 6.18183 9.09131 5.27274V1.63637C9.09131 0.727274 9.81858 0 10.7277 0ZM10.4549 5.45456H14.5459V1.36364H10.4549V5.45456ZM5.27274 9.09089H1.63637C0.727274 9.09089 0 9.81816 0 10.7273V14.3636C0 15.2727 0.727274 16 1.63637 16H5.27274C6.18183 16 6.9091 15.2727 6.9091 14.3636V10.7273C6.81819 9.81816 6.09092 9.09089 5.27274 9.09089ZM5.45456 14.5454H1.36364V10.4545H5.45456V14.5454ZM10.7277 9.09094H14.364C15.1822 9.09094 15.9095 9.81822 16.0004 10.7273V14.3637C16.0004 15.2728 15.2731 16 14.364 16H10.7277C9.81858 16 9.09131 15.2728 9.09131 14.3637V10.7273C9.09131 9.81822 9.81858 9.09094 10.7277 9.09094ZM10.4549 14.5455H14.5459V10.4546H10.4549V14.5455Z" fill="#006BE6"/>
                  </svg>
                  {{isMobile ? 'Աշխատանքային վահանակ' : 'Աշխատանքային վահանակ'}}
                </a>
                <a class="dropdown-item" :class="userPackage === 'Անվճար' && $store.getters.userType === 'STATE' ? 'disabled' : ''" @click.prevent="$router.push('/settings')" id="settings_detail_tab"
                  href="#settings_detail" data-toggle="pill">
                  <svg width="16" height="18" viewBox="0 0 16 18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6837 4.72369C12.6837 7.28062 10.6349 9.44416 8.00079 9.44416C5.36665 9.44416 3.31787 7.28062 3.31787 4.62535C3.31787 2.06843 5.36665 -0.0951168 8.00079 0.0032263C10.5374 0.0032263 12.6837 2.06843 12.6837 4.72369ZM11.2203 4.62535C11.2203 2.85518 9.75689 1.38003 8.00079 1.38003C6.2447 1.38003 4.78128 2.85518 4.78128 4.62535C4.78128 6.39553 6.2447 7.87067 8.00079 7.87067C9.75689 7.87067 11.2203 6.39553 11.2203 4.62535ZM5.17072 10.9193H10.8293C13.6585 10.9193 16 13.2795 16 16.1315V18H0V16.1315C0 13.2795 2.34146 10.9193 5.17072 10.9193ZM1.46341 16.6232H14.439V16.2298C14.439 14.1646 12.7805 12.4928 10.7317 12.4928H5.17072C3.12195 12.4928 1.46341 14.1646 1.46341 16.2298V16.6232Z" fill="#006BE6"/>
                  </svg>
                  Անձնական տվյալներ
                </a>
                <a class="dropdown-item" @click.prevent="$store.dispatch('logout')" href="javascript:void(0)">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.9585 14.539L2.05574 1.46104H8.18145V0H2.2502C1.27787 0 0.5 0.779221 0.5 1.55844V14.2468C0.5 15.2208 1.27787 16 2.2502 16H8.08421V14.539H1.9585ZM12.6802 7.31816H5.09601V8.7792H12.6802L10.4439 11.0195L11.5134 11.9935L14.4304 9.07141L15.5 8.09738L14.4304 6.92855L11.5134 4.00647L10.4439 5.0779L12.6802 7.31816Z" fill="#006BE6"/>
                  </svg>
                  Ելք համակարգից
                </a>
              </div>
            </div>
            <div data-toggle="collapse" data-target="#mob-menu" aria-expanded="false" aria-controls="mob-menu">
              <img class="header-mob-menu" src="~/assets/landing/images/mobmenu.svg" alt="menu" @click="menu" :class=" toggleMenu ? 'd-none' : 'd-block'">
              <img class="header-mob-menu" @click="menu"  :class=" toggleMenu ? 'd-block' : 'd-none'" src="~/assets/landing/images/openedMenu.svg" alt="openedMenu">
            </div>
          </div>
        </div>
        <div id="mob-menu" class="mob-menu-items-block collapse">
          <div class="mob-overflow-block little-scroll">
            <ul class="mob-menu-items">
              <li>
                <nuxt-link exact to="/" class="menu-item main">
                  <span @click="closeMobMenu" role="link">Գլխավոր</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="userType === 'STATE' ? '/packages/state' : '/packages/private'"  class="menu-item">
                  <span @click="closeMobMenu" role="link">Փաթեթներ</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/participant/tenders" class="menu-item">
                  <span @click="closeMobMenu" role="link">Տենդերներ</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/help" class="menu-item">
                  <span @click="closeMobMenu" role="link">Օգնություն</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/regulation" class="menu-item">
                  <span @click="closeMobMenu" role="link">Կանոնակարգ</span>
                </nuxt-link>
              </li>
            </ul>
            <div class="social-media d-flex align-items-center justify-content-center">
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
          <div class="menu-footer text-center">
            © 2018 - 2023 Բոլոր իրավունքները պաշտպանված են։
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import isMobile from '@/mixins/isMobileView'
import $ from 'jquery'
export default {
  mixins: [isMobile],
  computed: {
    lng () {
      return this.$store.getters["user/locale"];
    },
    userType() {
      return this.$store.getters.userType
    },
    me() {
      return this.$store.getters['user/me']
    },
  },
  data(){
    return{
      toggleMenu: false,
      dropdown: false,
      dropdownKey: 1,
      userPackage: '',
    }
  },
  watch: {
    me() {
      if(this.me.package === undefined){
        this.userPackage = this.$store.getters.userPackage
      }else{
        this.userPackage = this.me.package
      }
    },
  },
  created() {
    this.$store.dispatch('user/me')
  },
  async mounted(){},
  methods:{
    closeMobMenu(){
      document.getElementById("mob-menu").classList.remove("show");
      document.getElementsByTagName('body')[0].style.overflow = "auto";
    },
    chngelng(lng){
      this.$store.dispatch("user/setLocale",lng);
      this.$i18n.locale = this.lng;
    },
    dropdownFunc(){
      if(!this.toggleMenu){
        this.dropdown = !this.dropdown
      }
    },
    consoleLog(data){
      console.log(data)
    },
    menu(){
      this.toggleMenu = !this.toggleMenu
      if(this.toggleMenu){
        this.dropdown = true
        $('body').css('overflow', 'hidden');
      }else{
        $('body').css('overflow', 'auto');
      }         
    },
  }
}
</script>

<style scoped>
  a:hover{
    text-decoration: none;
  }
  [aria-expanded="true"] .rotate-arrow{
    transform: rotate(-180deg);
    transition: all 0.4s linear;
  }

  [aria-expanded="false"] .rotate-arrow{
    transform: rotate(0deg);
    transition: all 0.4s linear;
  }
</style>
<style>
  #authHeader .dropdown-menu{
    border-radius: 0px 0px 12px 12px !important;
    backdrop-filter: blur(8px) !important;
    background: rgba(255, 255, 255, 0.95) !important;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1) !important;
    padding: 20px !important;
    position: absolute !important;
    top: 52px !important;
    z-index: 9999999999 !important;
    right: 0 !important; 
    width: 300px !important;
    transform: inherit !important;
    will-change: inherit !important;
    left: inherit !important;
  }
  #authHeader .dropdown-item{
    font-size: 14px !important;
    line-height: 20px !important;
    display: block !important;
    padding: 0 0 20px !important;
    color: #40444D !important;
    cursor: pointer;
  }
  #authHeader .dropdown-item:last-child{
    color: #595E6B !important;
    padding: 0 !important;
  }
  #authHeader .dropdown-item svg{
    margin-right: 15px !important;
  }
  #authHeader .dropdown-menu .dropdown-item:hover, .dropdown-menu .dropdown-item:focus{
    background: transparent !important;
  }

  @media only screen and (max-width: 820px) {
    #authHeader .dropdown-menu{
      top: 52px !important;
      right: -48px !important;
    }
  }

  @media only screen and (max-width: 325px) {
    #authHeader .dropdown-menu{
      right: -64px !important;
    }
  }
</style>
