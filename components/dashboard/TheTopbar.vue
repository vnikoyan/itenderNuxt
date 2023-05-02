<template>
  <div class="topbar-custom">
    <nav class="d-flex align-items-center">
      <div v-if="isMobile" class="open-mobile-menu">
        <template v-if="innerMenuIsClosed">
          <svg @click="$store.dispatch('settings/toggleInnerMenu')"  width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2.28571V0H0V2.28571H18ZM18 9.14286V6.85714H0V9.14286H18ZM18 16V13.7143H0V16H18Z" fill="#40444D"/>
          </svg>
        </template>
        <template v-else>
          <svg @click="$store.dispatch('settings/toggleInnerMenu')"  width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2148 1.64096L14.5738 -6.10352e-05L8.21481 6.35893L1.85586 -1.4777e-05L0.214844 1.64101L6.57379 7.99996L0.214877 14.3589L1.8559 15.9999L8.21481 9.64098L14.5738 15.9999L16.2148 14.3589L9.85583 7.99996L16.2148 1.64096Z" fill="#595E6B"/>
          </svg>
        </template>
      </div>
      <nuxt-link to="/">
        <img src="~/assets/landing/images/Logo.svg" alt="logo">
      </nuxt-link>
      <div :style="userType === 'STATE' &&  (isMobile ? 'margin-left: 20px;' : 'margin-left: 140px;')" class="d-flex justify-content-between w-100 align-items-center">
        <ul class="list-unstyled topbar-nav mb-0 d-flex">
          <li :key="actionsKey" class="dropdown" v-if="currentPageActions">
            <a class="nav-link dropdown-toggle waves-effect waves-light m-0 nav-user pr-0" data-toggle="dropdown" href="#"
              role="button" aria-haspopup="false" aria-expanded="false">
              <span class="p-2 bg-soft-classic nav-user-name hidden-sm rounded">Գործողություններ<i
                class="dripicons-chevron-down"></i></span>
            </a>
            <div class="dropdown-menu dropdown-menu-left py-2">
              <a v-for="action in currentPageActions"
                @click.prevent="() => {action.call ? action.call() : ''}"
                :key="action.title"
                class="dropdown-item mb-2"
                href="">
                <template v-if="action.title !== 'correction' && action.title !== 'negotiations'">
                  <template>
                    <span class="text-primary mr-3">
                      <i :class="action.iconClass"></i>
                    </span>
                    <span>{{ action.title }}</span>
                  </template>
                </template>
                <template v-else>
                    <div v-if="action.title === 'correction'" @click.prevent.stop="handleIsWithCorrection" class="checkbox checkbox-primary pl-1">
                      <input id="correction" :checked="correction" type="checkbox">
                      <label for="correction" class="pl-3 text-primary">Շտկում</label>
                    </div>
                    <div v-else @click.prevent.stop="handleIsWithNegotiations" class="checkbox checkbox-primary pl-1">
                      <input id="negotiations" :checked="negotiations" type="checkbox">
                      <label for="negotiations" class="pl-3 text-primary">Բանակցություններ</label>
                    </div>
                </template>
              </a>
            </div>
          </li>
          <li class="dropdown" v-if="currentPageDocs">
            <a class="nav-link dropdown-toggle waves-effect waves-light m-0 nav-user pl-0" data-toggle="dropdown" href="#"
              role="button" aria-haspopup="false" aria-expanded="false">
              <span class="p-2 bg-soft-classic nav-user-name hidden-sm rounded">Փաստաթղթեր <i
                class="dripicons-chevron-down"></i></span>
            </a>
            <div class="dropdown-menu dropdown-menu-left py-2">
              <a v-for="document in currentPageDocs"
                :key="document.title"
                @click.prevent="document.call"
                class="dropdown-item mb-2"
                :class="document.disabled && document.disabled() ? 'disabled' : document.main_doc && 'font-weight-bold'"
                href="">
                <span class="text-primary mr-3">
                  <i class="fas fa-file-download"></i>
                </span>
                <span v-if="+currentOrganized.cpv_type !== 1">{{ document.title }}</span>
                <span v-else>{{ document.title.replace(' (շուտով)','') }}</span>
              </a>
            </div>
          </li>
          <li v-if="userType === 'STATE'">
            <div class="row align-items-center m-0 p-0">
              <button
                  @click="handleOpenSupportModal"
                  type="button"
                  class="btn btn-primary rounded-pill uitooltip"
                >
                  <i class="fa fa-phone" :class="!isMobile && 'mr-2'"></i>
                  <span v-if="!isMobile">Օգնություն</span>
                </button>
            </div>
          </li>
        </ul>
        <ul  class="d-none d-xl-block list-unstyled topbar-nav mb-0">
            
        </ul>
        <ul class="list-unstyled mb-0">
          <li class="dropdown d-flex">
            <div v-if="me.organisation" class="d-flex align-items-center topbar-right-spacing">
                <div>
                  <div v-if="userType === 'STATE'">
                      <p class="mb-0 account-name account-name-menu">
                      «{{ me.organisation[0].translations.name.hy }}»
                      <template v-if="me.organisation[0].translations.company_type.hy">
                      {{ me.organisation[0].translations.company_type.hy }}
                      </template>
                      <br>
                      {{ me.name }}
                      </p>
                  </div>
                  <div v-else>
                      <p class="mb-0 account-name account-name-menu">
                      <template v-if="me.organisation[0].translations.company_type.hy">
                          «{{ me.name }}» 
                          {{ me.organisation[0].translations.company_type.hy }}
                      </template>
                      <template v-else>
                          {{ me.name }}
                      </template>
                      </p>
                  </div>
                </div>
                <div class="package-name account-name-menu">
                  {{me.package}}
                </div>
            </div>
            <div v-if="!isMobile" class="d-flex">
              <a class="nav-notification position-relative" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
                <div class="notification-account d-flex align-items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0492 3.54096C15.0984 3.54096 17.6557 5.99998 17.6557 9.14752V15.5409H6.44262V9.14752C6.44262 5.99998 8.90164 3.54096 12.0492 3.54096ZM19.1311 9.14752V15.5409H21V17.0163H19.1311V17.0164H4.96721V17.0163H3V15.5409H4.96721V9.14752C4.96721 5.21309 8.11475 2.06555 12.0492 2.06555C15.8852 2.06555 19.0328 5.21309 19.1311 9.14752ZM13.623 20.3606C13.623 21.2298 12.9184 21.9344 12.0493 21.9344C11.1801 21.9344 10.4755 21.2298 10.4755 20.3606C10.4755 19.4915 11.1801 18.7869 12.0493 18.7869C12.9184 18.7869 13.623 19.4915 13.623 20.3606Z" fill="#595E6B"/>
                  </svg>
                  <span v-if="menuNotifications.unseen_notifications" class="notification-badge">{{menuNotifications.unseen_notifications}}</span>
                </div>
              </a>
              <div class="dropdown-menu dropdown-notification topbar-dropdown" :class="isMobile ? 'dropdown-menu' : 'dropdown-menu-right'">
                <template v-if="notifications.length">
                  <div class="text-right delete-all-block">
                    <span @click="deleteNotifications" class="text-primary"><u>Ջնջել բոլորը</u></span>
                  </div>
                  <div class="notification-blocks overflow-auto little-scroll">
                    <div v-for="notification in notifications" 
                      @click="goToNotification(notification)"
                      :key="notification.id"
                      :class="notification.read_at == null && 'unread-notification-item'" 
                      class="dropdown-item notification-item"
                    >
                      <div class="notification-title row justify-content-between m-0 p-0">
                        <div class="col p-0 notification-name">
                          {{notification.data.subject}}
                        </div>
                        <div class="col-auto p-0 notification-time">{{toOpeningTime(notification.created_at)}}</div>
                      </div>
                      <div class="notification-content row justify-content-between m-0 p-0">
                        <div class="col p-0  text-truncate-container">
                          <span class="w-100">
                            Պատվիրատու՝ {{notification.data.customer}}
                          </span>
                        </div>
                        <div class="col-auto p-0 d-flex align-items-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.4828 10.595L9.51724 5.77777L8 7.24969L12.9655 12.0669L8 16.7503L9.51724 18.2222L14.4828 13.5388L16 12.0669L14.4828 10.595Z" fill="#006BE6"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="text-center delete-all-block">
                    <span class="no-notification">Ծանուցումներ չկան</span>
                  </div>
                </template>
              </div>
            </div>
            <div class="d-flex">
              <a class="nav-user" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
                  <div class="user-account d-flex">
                    <div class="user d-flex align-items-end justify-content-center">
                      <img src="~/assets/landing/images/Union.svg" alt="user">
                    </div>
                    <button class="user-btn rotate-arrow mr-0">
                      <img src="~/assets/landing/images/arrow-bottom.svg" alt="arrow">
                    </button>
                  </div>
              </a>
              <div class="dropdown-menu topbar-dropdown" :class="isMobile ? 'dropdown-menu' : 'dropdown-menu-right'">
                <nuxt-link to="/">
                  <div class="m-0 d-flex align-items-center nav-items-block justify-content-start" style="height: 40px; padding: 10px 10px 10px 20px;">
                    <div class="sidebar-icon">
                        <svg width="16" height="18" viewBox="0 0 16 18" class="mr-3">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9222 0.694078L15.0358 5.25503C15.424 5.64319 15.7151 6.1284 15.8121 6.61361V15.8503C15.8121 16.8207 15.0358 17.597 14.0654 17.597H1.93522C0.964808 17.597 0.188477 16.8207 0.188477 15.8503V6.61361C0.188477 6.1284 0.479601 5.64319 0.867766 5.25503L6.98138 0.694078C7.2725 0.499996 7.56362 0.402954 7.95179 0.402954C8.33996 0.402954 8.63108 0.499996 8.9222 0.694078ZM14.0654 16.1414C14.1624 16.1414 14.2595 16.0444 14.2595 15.9473V6.61361C14.2595 6.51656 14.2595 6.41952 14.1624 6.41952L8.04883 1.85858H7.95179H7.85475L1.83818 6.41952C1.74114 6.41952 1.74114 6.51656 1.74114 6.61361V15.9473C1.74114 16.0444 1.83818 16.1414 1.93522 16.1414H14.0654ZM4.45867 9.91302H11.5427V11.3686H4.45867V9.91302Z" fill="#006BE6"/>
                        </svg>
                    </div>
                    <p class="nav-item-content">Հիմնական էջ</p>
                  </div>
                </nuxt-link>
                <a
                  @click.prevent="$router.push('/settings')"
                  id="settings_detail_tab"
                  href="#settings_detail" data-toggle="pill" class="d-flex align-items-center"
                >
                  <div class="m-0 d-flex align-items-center nav-items-block justify-content-start" style="height: 40px; padding: 10px 10px 10px 20px;">
                    <div class="sidebar-icon">
                        <svg width="16" height="18" viewBox="0 0 16 18" class="mr-3">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6837 4.72369C12.6837 7.28062 10.6349 9.44416 8.00079 9.44416C5.36665 9.44416 3.31787 7.28062 3.31787 4.62535C3.31787 2.06843 5.36665 -0.0951168 8.00079 0.00322632C10.5374 0.00322632 12.6837 2.06843 12.6837 4.72369ZM11.2203 4.62535C11.2203 2.85518 9.75689 1.38003 8.00079 1.38003C6.2447 1.38003 4.78128 2.85518 4.78128 4.62535C4.78128 6.39553 6.2447 7.87067 8.00079 7.87067C9.75689 7.87067 11.2203 6.39553 11.2203 4.62535ZM5.17072 10.9193H10.8293C13.6585 10.9193 16 13.2795 16 16.1315V18H0V16.1315C0 13.2795 2.34146 10.9193 5.17072 10.9193ZM1.46341 16.6232H14.439V16.2298C14.439 14.1646 12.7805 12.4928 10.7317 12.4928H5.17072C3.12195 12.4928 1.46341 14.1646 1.46341 16.2298V16.6232Z" fill="#006BE6"/>
                        </svg>
                    </div>
                    <h6 class="nav-item-content">
                      <div v-if="me.organisation" class="d-flex align-items-center topbar-right-spacing">
                        <div>
                          <div v-if="userType === 'STATE'">
                              <p class="mb-0 account-name">
                                <span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                  «{{ me.organisation[0].translations.name.hy }}»
                                  <template v-if="me.organisation[0].translations.company_type.hy">
                                  {{ me.organisation[0].translations.company_type.hy }}
                                  </template>
                                </span>
                                <br>
                                {{ me.name }}
                              </p>
                          </div>
                          <div v-else>
                              <p class="mb-0 account-name">
                              <template v-if="me.organisation[0].translations.company_type.hy">
                                  «{{ me.name }}» 
                                  {{ me.organisation[0].translations.company_type.hy }}
                              </template>
                              <template v-else>
                                  {{ me.name }}
                              </template>
                              </p>
                          </div>
                        </div>
                        <div class="package-name">
                          {{me.package}}
                        </div>
                      </div>
                    </h6>
                  </div>
                </a>
                <a @click.prevent="$store.dispatch('logout')" href="javascript:void(0)">
                  <div class="m-0 d-flex align-items-center nav-items-block justify-content-start" style="height: 40px; padding: 10px 10px 10px 20px;">
                    <div class="sidebar-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" class="mr-3">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.9585 14.539L2.05574 1.46104H8.18145V0H2.2502C1.27787 0 0.5 0.779221 0.5 1.55844V14.2468C0.5 15.2208 1.27787 16 2.2502 16H8.08421V14.539H1.9585ZM12.6802 7.31816H5.09601V8.7792H12.6802L10.4439 11.0195L11.5134 11.9935L14.4304 9.07141L15.5 8.09738L14.4304 6.92855L11.5134 4.00647L10.4439 5.0779L12.6802 7.31816Z" fill="#006BE6"/>
                      </svg>
                    </div>
                    <h6 class="nav-item-content">
                      Ելք համակարգից
                    </h6>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
  import isMobile from '@/mixins/isMobileView'

  export default {
    name: 'TheTopbar',
    mixins: [isMobile],
    props: ['innerMenuWidth'],
    computed: {
      me() {
        return this.$store.getters['user/me']
      },
      locale() {
        return this.$store.getters['user/locale']
      },
      userType(){
        return this.$store.getters.userType
      },
      menuNotifications() {
        return this.$store.getters["user/menuNotifications"];
      },
      notifications() {
        return this.$store.getters["user/notifications"];
      },
      currentPageActions() {
        const action = this.$route.path.split('/')[1]
        if(action === 'organizing'){
          const organizeType = this.$route.path.split('/')[2]
          const page = this.$route.path.split('/')[3]
          if(organizeType === 'competitive' && page === 'application-evaluation'){
            if(!this.negotiations){
              const indexOfSameLastParticipant = this.actions[organizeType][page].indexOf(this.actions[organizeType][page].find((item) => item.title === "Անցում բանակցությունների"))
              return [
                {title: 'correction'},
                {title: 'negotiations'},
                ...this.actions[organizeType][page].filter((value, index) => index !== indexOfSameLastParticipant), 
              ]
            } else {
              return [
                {title: 'correction'},
                {title: 'negotiations'},
                ...this.actions[organizeType][page], 
              ]
            }
          } else {
            return this.actions[organizeType][page]
          }
        } else {
          return false;
        }
      },
      currentOrganized() {
        const organizeType = this.$route.path.split('/')[2]
        if(organizeType === 'competitive'){
          return this.$store.getters['organize/currentOrganized']
        } else if(organizeType === 'itender'){
          return this.$store.getters['organizeItender/currentOrganized']
        } else {
          return this.$store.getters['organizeOnePerson/currentOrganized']
        }
      },
      organizedRows() {
        return this.$store.getters['organize/organizedRows']
      },
      isMandatoryNegotiations() {
        return this.$store.getters['organize/isMandatoryNegotiations']
      },
      innerMenuIsClosed() {
        return this.$store.getters['settings/innerMenuIsClosed']
      },
      currentPageDocs() {
        const action = this.$route.path.split('/')[1]
        if(action === 'organizing'){
          const page = this.$route.path.split('/')[3]
          const organizeType = this.$route.path.split('/')[2]
          if(organizeType === 'oneperson' && page === 'contract-preparation'){
            if(this.isOrganizeHeld){
              return this.documents[organizeType][page+'-held']
            } else {
              return this.documents[organizeType][page+'-declined']
            }
          }
          return this.documents[organizeType][page]
        } else {
          return false;
        }
      }
    },
    data() {
      return {
        correction: false,
        negotiations: false,
        lots: [],
        isOrganizeHeld: true,
        actionsKey: 0,
        languages: {
          hy: {
            label: 'Հայերեն',
            iconSrc: '/assets/dashboard/assets/images/flags/armenia_flag.jpg',
          },
          ru: {
            label: 'Русский',
            iconSrc: '/assets/dashboard/assets/images/flags/russia_flag.jpg',
          },
        },
        organizedLots:[],
        actions: {
          competitive: {
            'application-evaluation': [
              {
                title: 'Անցում բանակցությունների',
                call: () => {this.$modal.show('negotiations-modal')},
                iconClass: 'fas fa-user-friends'
              },
              {
                title: 'Վերադառնալ հրավերի պատրաստում',
                call: this.backToPrepareInvitation,
                iconClass: 'fas fa-arrow-circle-left'
              },
            ],
            'contract-preparation': [
              {
                title: 'Վերադառնալ հայտերի գնահատում',
                call: this.backToApplicationEvaluation,
                iconClass: 'fas fa-arrow-circle-left'
              },
              {
                title: 'Պայմանագրի կնքում',
                call: () => {
                  this.$modal.show('contract-request-modal')
                },
                iconClass: 'fas fa-file-signature'
              },
            ],
          },
          oneperson: {
            'contract-preparation': [
              {
                title: 'Պայմանագրի կնքում',
                call: () => {
                  this.$modal.show('contract-request-modal')
                },
                iconClass: 'fas fa-file-signature'
              },
            ],
          },
        },
        documents: {
          competitive: {
            'prepare-invitation': [
              {
                title: 'Գնահատող հանձնաժողովի հրաման',
                call: () => {this.$modal.show('evaluator-committee-modal')}
              },
              {
                title: 'Արձանագրություն N 1',
                call: () => {
                  if(!this.currentOrganized.translations.evaluator_president.name){
                    this.$fire({
                      title: "Զգուշացում",
                      text: "Խնդրում ենք լրացնել գնահատող հանձնաժողովի հրամանը, փաստաթուղթը ստանալու համար",
                      type: "error",
                      confirmButtonText: 'Լավ'
                    })
                  } else {
                    this.$modal.show('new-editor-modal', {
                      action: 'save',
                      fileName: 'protocol_number_one',
                      editorTitle: 'Արձանագրություն N 1'
                    })
                  }
                }
              },
              {
                title: 'Պայմանագիր (հայերեն)',
                call: () => {
                  if(!this.currentOrganized.confirm){
                    this.$fire({
                      title: "Զգուշացում",
                      text: "Խնդրում ենք հաստատել ընթացակարգը, փաստաթուղթը ստանալու համար",
                      type: "error",
                      confirmButtonText: 'Լավ'
                    })
                  } else {
                    if(this.currentOrganized.evaluator_secretary_email === ""){
                      this.$fire({
                        title: "Զգուշացում",
                        text: "Պահպանեք գնահատող հանձնաժողովի հրամանը հրավերը ստանալու համար",
                        type: "error",
                        confirmButtonText: 'Լավ'
                      })
                    } else {
                      if(+this.currentOrganized.cpv_type === 3){
                       if(+this.currentOrganized.is_construction){
                          this.$modal.show('new-editor-modal', {
                            action: 'save',
                            fileName: 'contract_draft_work_construction',
                            editorTitle: 'Պայմանագրի նախագիծ'
                          })
                        } else {
                          this.$modal.show('new-editor-modal', {
                            action: 'save',
                            fileName: 'contract_draft_work',
                            editorTitle: 'Պայմանագրի նախագիծ'
                          })
                        }
                      } else if(+this.currentOrganized.cpv_type === 1){
                        this.$modal.show('new-editor-modal', {
                          action: 'save',
                          fileName: 'contract_draft_product',
                          editorTitle: 'Պայմանագրի նախագիծ'
                        })
                      } else {
                        this.$modal.show('new-editor-modal', {
                          action: 'save',
                          fileName: 'contract_draft_service',
                          editorTitle: 'Պայմանագրի նախագիծ'
                        })
                      }
                    }
                  }
                }
              },
              {
                title: `Պայմանագիր (ռուսերեն)`,
                call: () => {
                  if(!this.currentOrganized.confirm){
                    this.$fire({
                      title: "Զգուշացում",
                      text: "Խնդրում ենք հաստատել ընթացակարգը, փաստաթուղթը ստանալու համար",
                      type: "error",
                      confirmButtonText: 'Լավ'
                    })
                  } else {
                    if(+this.currentOrganized.cpv_type === 3){
                      if(+this.currentOrganized.is_construction){
                        this.$modal.show('new-editor-modal', {
                          action: 'save',
                          fileName: 'contract_draft_work_construction_ru',
                          editorTitle: 'Պայմանագրի'
                        })
                      }else {
                        this.$modal.show('new-editor-modal', {
                          action: 'save',
                          fileName: 'contract_draft_work_ru',
                          editorTitle: 'Договор'
                        })
                      }
                    } else if(+this.currentOrganized.cpv_type === 1){
                      this.$modal.show('new-editor-modal', {
                        action: 'save',
                        fileName: 'contract_draft_product_ru',
                        editorTitle: 'Договор'
                      })
                    } else {
                      this.$modal.show('new-editor-modal', {
                        action: 'save',
                        fileName: 'contract_draft_service_ru',
                        editorTitle: 'Պայմանագիր'
                      })
                    }
                  }
                }
              },
              {
                title: 'Գնման հայտ (մրցկացային)',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'purchase_request',
                    editorTitle: 'Գնման հայտ (մրցկացային)'
                  })
                }
              },
              {
                title: 'Գրանցամատյան',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'scrapbook',
                    editorTitle: 'Գրանցամատյան'
                  })
                }
              },
              // {
              //   title: 'Պայմանագիր (ռուսերեն)',
              //   call: () => {
              //     this.$modal.show('editor-modal', {
              //       fileName: 'contract',
              //       lng: 'ru',
              //       editorTitle: 'Պայմանագիր'
              //     })
              //   }
              // },
              {
                title: 'Հրավեր (հայերեն)',
                main_doc: true,
                call: () => {
                  if(this.currentOrganized.evaluator_secretary_email === ""){
                    this.$fire({
                      title: "Զգուշացում",
                      text: "Պահպանեք գնահատող հանձնաժողովի հրամանը հրավերը ստանալու համար",
                      type: "error",
                      confirmButtonText: 'Լավ'
                    })
                  } else if(this.currentOrganized.contract_html_hy === ""){
                    this.$fire({
                      title: "Զգուշացում",
                      text: "Պահպանեք պայմանագիրը (հայերեն) հրավերը ստանալու համար",
                      type: "error",
                      confirmButtonText: 'Լավ'
                    })
                  } else{
                    this.$modal.show('editor-modal', {
                      fileName: 'invitation',
                      action: 'download',
                      editorTitle: 'Հրավեր'
                    })
                  }
                }
              },
              {
                title: 'Հրավեր (ռուսերեն)',
                main_doc: true,
                call: () => {
                  if(this.currentOrganized.contract_html_ru === ""){
                    this.$fire({
                      title: "Զգուշացում",
                      text: "Պահպանեք պայմանագիրը (ռուսերեն) հրավերը ստանալու համար",
                      type: "error",
                      confirmButtonText: 'Լավ'
                    })
                  }else{
                    this.$modal.show('editor-modal', {
                      fileName: 'invitation',
                      lng: 'ru',
                      action: 'download',
                      editorTitle: 'Հրավեր'
                    })
                  }
                }
              }
            ],
            'application-evaluation': [
              {
                title: 'Ծանուցում բանակցությունների վերաբերյալ',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'save',
                    fileName: 'notice_of_negotiations',
                    editorTitle: 'Ծանուցում բանակցությունների վերաբերյալ'
                  })
                }
              },
              {
                title: 'Հայտարարություն շահերի բախման մասին',
                disabled: this.checkMandatoryNegotiations,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'statement_of_conflict_of_interest',
                    editorTitle: 'Հայտարարություն շահերի բախման մասին'
                  })
                }
              },
              {
                title: `Գնահատման թերթիկ - դատարկ`,
                disabled: this.checkMandatoryNegotiations,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'evaluation_sheet_empty',
                    editorTitle: `Գնահատման թերթիկ - դատարկ`
                  })
                }
              },
              {
                title: `Գնահատման թերթիկ`,
                disabled: this.checkMandatoryNegotiations,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'evaluation_sheet',
                    editorTitle: `Գնահատման թերթիկ`
                  })
                }
              },
              {
                title: 'Հարցում ՊԵԿ (պատճառաբանված որոշման դեպքում)',
                disabled: this.checkMandatoryNegotiations,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'save',
                    fileName: 'state_revenue_committee_survey',
                    editorTitle: 'Հարցում ՊԵԿ (պատճառաբանված որոշման դեպքում)'
                  })
                }
              },
              {
                title: 'Հայտարարություն չկայացած չափաբաժինների մասին',
                disabled: this.checkMandatoryNegotiations,
                call: () => {
                  if(this.isHasCanceledLotsCompetitive()){
                    this.$modal.show('new-editor-modal', {
                      action: 'download',
                      fileName: 'announce_procedure_buy_declined_hy',
                      editorTitle: 'Հայտարարություն չկայացած չափաբաժինների մասին'
                    })
                  } else {
                    this.$fire({
                      text: "Ընթացակարգում չկան չկայացած չափաբաժիններ",
                      type: "info",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
              {
                title: 'Հայտարարություն չկայացած չափաբաժինների մասին (ռուսերեն)',
                disabled: this.checkMandatoryNegotiations,
                call: () => {
                   if(this.isHasCanceledLotsCompetitive()){
                    this.$modal.show('new-editor-modal', {
                      action: 'download',
                      fileName: 'announce_procedure_buy_declined',
                      editorTitle: 'Հայտարարություն չկայացած չափաբաժինների մասին (ռուսերեն)'
                    })
                  } else {
                    this.$fire({
                      text: "Ընթացակարգում չկան չկայացած չափաբաժիններ",
                      type: "info",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
              {
                title: 'Բացման և գնահատման նիստի արձանագրություն',
                disabled: this.checkMandatoryNegotiations,
                main_doc: true,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'evaluation_session',
                    editorTitle: 'Բացման և գնահատման նիստի արձանագրություն'
                  })
                }
              },
              {
                title: 'Բացման և գնահատման նիստի արձանագրություն (ռուսերեն)',
                disabled: this.checkMandatoryNegotiations,
                main_doc: true,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'evaluation_session_ru',
                    editorTitle: 'Բացման և գնահատման նիստի արձանագրություն (ռուսերեն)'
                  })
                }
              },
              {
                title: 'Բացման և գնահատման նիստի արձանագրություն (հայերեն և ռուսերեն)',
                // disabled: this.comingSoon,
                main_doc: true,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'evaluation_session_mix',
                    editorTitle: 'Բացման և գնահատման նիստի արձանագրություն (հայերեն և ռուսերեն)'
                  })
                }
              },
              
            ],
            'contract-preparation': [
              {
                title: 'Պայմանագիր կնքելու որոշում',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_conc_hy',
                    editorTitle: 'Պայմանագիր կնքելու որոշում'
                  })
                }
              },
              {
                title: 'Պայմանագիր կնքելու որոշում (ռուսերեն)',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_conc',
                    editorTitle: 'Պայմանագիր կնքելու որոշում (ռուսերեն)'
                  })
                }
              },
              {
                title: 'Գնման ընթացակարգի արձանագրություն',
                call: () => {
                  if(this.isGreaterThanMln()){
                    this.$modal.show('new-editor-modal', {
                      action: 'download',
                      fileName: 'procurement_procedure_protocol',
                      editorTitle: 'Գնման ընթացակարգի արձանագրություն'
                    })
                  } else {
                    this.$fire({
                      text: "Տվյալ փաստաթուղթը հասանելի է միայն 1մլն. ից բարձր նախահաշվային գնով ընթացակարգերի համար",
                      type: "info",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
              {
                title: 'Գնման ընթացակարգի արձանագրություն չկայացած',
                call: () => {
                  if(this.isGreaterThanMln()){
                    this.$modal.show('new-editor-modal', {
                      action: 'download',
                      fileName: 'procurement_procedure_protocol_declined',
                      editorTitle: 'Գնման ընթացակարգի արձանագրություն չկայացած'
                    })
                  } else {
                    this.$fire({
                      text: "Տվյալ փաստաթուղթը հասանելի է միայն 1մլն. ից բարձր նախահաշվային գնով ընթացակարգերի համար",
                      type: "info",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
              {
                title: 'Կնքված պայմանագրի մասին հայտարարություն',
                main_doc: true,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_signed_contract',
                    editorTitle: 'Կնքված պայմանագրի մասին հայտարարություն'
                  })
                }
              },
              {
                title: 'Կնքված պայմանագրի մասին հայտարարություն (ռուսերեն)',
                main_doc: true,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_signed_contract_ru',
                    editorTitle: 'Կնքված պայմանագրի մասին հայտարարություն (ռուսերեն)'
                  })
                }
              },
            ],
          },
          oneperson: {
            'prepare-invitation': [
              {
                title: 'Պայմանագրի նախագիծ',
                call: () => {
                  if(this.currentOrganized.confirm){
                    if (+this.currentOrganized.cpv_type === 3){
                      if(+this.currentOrganized.is_construction){
                        this.$modal.show('new-editor-modal', {
                          action: 'save',
                          fileName: 'contract_draft_work_construction',
                          editorTitle: 'Պայմանագրի նախագիծ'
                        })
                      } else {
                        this.$modal.show('new-editor-modal', {
                          action: 'save',
                          fileName: 'contract_draft_work',
                          editorTitle: 'Պայմանագրի նախագիծ'
                        })
                      }
                    } else if(+this.currentOrganized.cpv_type === 1){
                      this.$modal.show('new-editor-modal', {
                        action: 'save',
                        fileName: 'contract_draft_product',
                        editorTitle: 'Պայմանագրի նախագիծ'
                      })
                    } else {
                      this.$modal.show('new-editor-modal', {
                        action: 'save',
                        fileName: 'contract_draft_service',
                        editorTitle: 'Պայմանագրի նախագիծ'
                      })
                    }
                   
                  } else {
                    this.$fire({
                      title: "Զգուշացում",
                      text: "Խնդրում ենք հաստատել ընթացակարգը, փաստաթուղթը ստանալու համար",
                      type: "error",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
            ],
            'contract-preparation-declined': [
              {
                title: 'Գնման հայտ',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'purchase_request',
                    editorTitle: 'Գնման հայտ'
                  })
                }
              },
              {
                title: 'Հայտերի գնահատման նիստի արձանագրություն',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'bid_evaluation_session',
                    editorTitle: 'Հայտերի գնահատման նիստի արձանագրություն'
                  })
                }
              },
              {
                title: 'Հայտարարություն գնման ընթացակարգը չկայացած հայտարարելու մասին',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_procedure_buy_declined',
                    editorTitle: 'Հայտարարություն գնման ընթացակարգը չկայացած հայտարարելու մասին'
                  })
                }
              },
              {
                title: 'Գնման ընթացակարգի արձանագրություն չկայացած',
                call: () => {
                  if(this.isGreaterThanMln()){
                    this.$modal.show('new-editor-modal', {
                      action: 'download',
                      fileName: 'procurement_procedure_protocol_declined',
                      editorTitle: 'Գնման ընթացակարգի արձանագրություն չկայացած'
                    })
                  } else {
                    this.$fire({
                      text: "Տվյալ փաստաթուղթը հասանելի է միայն 1մլն. ից բարձր նախահաշվային գնով ընթացակարգերի համար",
                      type: "info",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
            ],
            'contract-preparation-held': [
              {
                title: 'Հրավեր (ծանուցում)',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'save',
                    fileName: 'invitation_notification',
                    editorTitle: 'Հրավեր (ծանուցում)'
                  })
                }
              },
              {
                title: 'Գնման հայտ',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'purchase_request',
                    editorTitle: 'Գնման հայտ'
                  })
                }
              },
              {
                title: 'Հայտերի գնահատման նիստի արձանագրություն',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'bid_evaluation_session',
                    editorTitle: 'Հայտերի գնահատման նիստի արձանագրություն'
                  })
                }
              },
              {
                title: 'Պայմանագիր կնքելու որոշման մասին հայտարարություն',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_conc',
                    editorTitle: 'Պայմանագիր կնքելու որոշման մասին հայտարարություն'
                  })
                }
              },
              {
                title: 'Պայմանագիր կնքելու որոշման մասին հայտարարություն (ռուսերեն)',
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_conc_ru',
                    editorTitle: 'Պայմանագիր կնքելու որոշման մասին հայտարարություն (ռուսերեն)'
                  })
                }
              },
              {
                title: 'Հայտարարություն չկայացած չափաբաժինների մասին',
                call: () => {
                  if(this.isHasCanceledLots()){
                    this.$modal.show('new-editor-modal', {
                      action: 'download',
                      fileName: 'announce_procedure_buy_declined',
                      editorTitle: 'Հայտարարություն չկայացած չափաբաժինների մասին'
                    })
                  } else {
                    this.$fire({
                      text: "Ընթացակարգում չկան չկայացած չափաբաժիններ",
                      type: "info",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
              {
                title: 'Հայտարարություն չկայացած չափաբաժինների մասին (ռուսերեն)',
                call: () => {
                  if(this.isHasCanceledLots()){
                    this.$modal.show('new-editor-modal', {
                      action: 'download',
                      fileName: 'announce_procedure_buy_declined_ru',
                      editorTitle: 'Հայտարարություն չկայացած չափաբաժինների մասին (ռուսերեն)'
                    })
                  } else {
                    this.$fire({
                      text: "Ընթացակարգում չկան չկայացած չափաբաժիններ",
                      type: "info",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
              {
                title: 'Գնման ընթացակարգի արձանագրություն',
                call: () => {
                  if(this.isGreaterThanMln()){
                    this.$modal.show('new-editor-modal', {
                      action: 'download',
                      fileName: 'procurement_procedure_protocol',
                      editorTitle: 'Գնման ընթացակարգի արձանագրություն'
                    })
                  } else {
                    this.$fire({
                      text: "Տվյալ փաստաթուղթը հասանելի է միայն 1մլն. ից բարձր նախահաշվային գնով ընթացակարգերի համար",
                      type: "info",
                      confirmButtonText: 'Լավ'
                    })
                  }
                }
              },
              {
                title: 'Կնքված պայմանագրի մասին հայտարարություն',
                main_doc: true,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_signed_contract',
                    editorTitle: 'Կնքված պայմանագրի մասին հայտարարություն'
                  })
                }
              },
              {
                title: 'Կնքված պայմանագրի մասին հայտարարություն (ռուսերեն)',
                main_doc: true,
                call: () => {
                  this.$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: 'announce_signed_contract_ru',
                    editorTitle: 'Կնքված պայմանագրի մասին հայտարարություն (ռուսերեն)'
                  })
                }
              },
            ],
          },
        },
      }
    },
    created() {
      window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
      window.removeEventListener("resize", this.myEventHandler);
    },
    mounted(){
      // window.Echo.private('testchannel')
      //     .listen('Test', (e) => {
      //         console.log('test successful ' + e)
      // })
      
      // this.$echo.private('App.Models.User.' + 292).listen('notification', (payload) => {
      //   alert(payload);
      // });

      // this.$echo.private('user.' + 292).listen('newNotification', (payload) => {
      //   alert(payload);
      // });
      
    },
    watch: {
      me(newValue) {
        this.listenForNotifications();
      },
      currentOrganized(newValue) {
        const action = this.$route.path.split('/')[1]
        const organizeType = this.$route.path.split('/')[2]
        const page = this.$route.path.split('/')[3]
        if(action === 'organizing' && organizeType === 'competitive' && page === 'application-evaluation'){
          this.correction = newValue.is_correction
          this.negotiations = newValue.is_negotiations
        }
      },
    },
    methods: {
      goToNotification(notification){
        console.log(notification.data.type)
        switch (notification.data.type) {
          case "tender_edited":
          case 'tender_created':
            this.$router.push(`/participant/tenders/?id=${notification.data.tender_id}`);
            break;
          case 'contract_order':
            this.$router.push(`/participant/contract-management/orders/active`);
            break;
          case 'contract_request':
            this.$router.push(`/participant/contract-management/requests`);
            break;
        
          default:
            break;
        }
        this.$client.post(`user/notifications/read/${notification.id}`).then(({data}) => {
          if(data.status){
            this.$store.dispatch('user/getMenuNotifications')
            this.$store.dispatch('user/getNotifications')
          }
        })
      },
      deleteNotifications(){
        this.$client.post(`user/notifications/delete-all`).then((value) => {
          this.$store.dispatch('user/getMenuNotifications')
          this.$store.dispatch('user/getNotifications')
        })
      },
      toOpeningTime(openingDateTime){
        const date1 = new Date(openingDateTime);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        if(diffDays <= 1){
          this.$moment(openingDateTime, 'YYYY-MM-DD hh:mm:ss').startOf('hour').fromNow()
          this.$moment.locale('hy-am');
          let openingText = this.$moment(openingDateTime, 'YYYY-MM-DD hh:mm:ss').startOf('minute').fromNow()
          if(openingText  === 'օր հետո'){
            openingText = '1 օր հետո';
          }
          return openingText;
        } else {
          return openingDateTime;
        }
      },
      getVal(varName) {
        return this[varName];
      },
      listenForNotifications() {



        // this.$echo.private('team.1').listen('NewBlogPost', (payload) => {
        //     console.log(payload);
        // });
        // var channel = this.$pusher.subscribe(`user-${this.me.id}`);
 
        // channel.bind('new-notification', (data) => {
        //   console.log('get new notification');
        // });
      },
      handleIsWithCorrection(){
        this.correction = !this.correction;
        this.$client.put(`organize/${this.$route.params.id}`, {is_correction: this.correction}).then(({ status, data }) => {
          // eslint-disable-next-line eqeqeq
          if(status == 200) {
            this.$store.commit('organize/setCurrentOrganized', data.data)
          }
        }).catch(e => {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Ինչ որ բան այն չէ',
            text: 'Կրկին փորձեք!'
          })
        })
      },
      handleIsWithNegotiations(){
        this.negotiations = !this.negotiations;
        this.$client.put(`organize/${this.$route.params.id}`, {is_negotiations: this.negotiations}).then(({ status, data }) => {
          if(!this.negotiations){
            const indexOfSameLastParticipant = this.currentPageActions.indexOf(this.currentPageActions.find((item) => item.title === "Անցում բանակցությունների"))
            if(indexOfSameLastParticipant !== -1){
              this.currentPageActions.splice(indexOfSameLastParticipant, 1);
            }
          }
          // eslint-disable-next-line eqeqeq
          if(status == 200) {
            this.$store.commit('organize/setCurrentOrganized', data.data)
          }
        }).catch(e => {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Ինչ որ բան այն չէ',
            text: 'Կրկին փորձեք!'
          })
        })
      },
      handleOpenSupportModal(){
        this.$alert(
            "", 
            "", 
            "info", 
            {
                html: `
                  <div style="text-align: justify; font-size:  16px">
                    iTender համակարգում պետական գնման գործընթացների ավտոմատացման համահեղինականներն են «Այ Տենդեր» և «Էյչ Էս Փարթներս» ՍՊ ընկերությունները։ Հարցերի և առաջարկությունների դեպքում դիմել «Էյչ Էս Փարթներս» ՍՊԸ-ի տնօրեն 
                    <b>Հայկ Ղազարյանին</b> <br>
                    <b>հեռ. 094 955 944 </b>
                  </div>
                `,
                confirmButtonText: 'Լավ',
                buttonsStyling: false,
                customClass: {
                  confirmButton: 'btn btn-primary btn-lg',
                },
            }
        ).then(r => {
          console.log(r.value);
        });
      },
      consoleLog(e){
        console.log(e)
      },
      comingSoon(){
        if(this.me.id === 8068 || this.me.id === 8433 || this.me.id === 302 || this.me.id === 8067){
          return false;
        } else {
          return true;
        }
      },
      disabledInvitation(){
        if(this.currentOrganized.contract_html_hy === ""){
          return true;
        } else {
          return false;
        }
      },
      disabledInvitationRu(){
        if(this.currentOrganized.contract_html_ru === ""){
          return true;
        } else {
          return false;
        }
      },
      checkMandatoryNegotiations(){
        // return this.isMandatoryNegotiations;
        return false;
      },
      checkIsNotMandatoryNegotiations(){
        // return !this.isMandatoryNegotiations;
        return false;
      },
      isGreaterThanMln() {
        var totalPrice = 0;
        this.currentOrganized.organize_rows.forEach((row) => {
          totalPrice += row.count * row.procurement_plan.details[0].unit_amount
        })
        if(totalPrice>1000000){
          return true;
        } else {
          return false;
        }
      },
      isHasCanceledLotsCompetitive() {
        var hasCanceledLot = false;
        this.organizedRows.forEach(row => {
          const hasWinner = Boolean(row.participantsList.find((participant) => participant.winner))
          if(!hasWinner){
            hasCanceledLot = true;
            return true;
          }
        });
        if(hasCanceledLot){
          return true
        } else {
          return false;
        }
      },
      isHasCanceledLots() {
        if(this.currentOrganized.winner_by_lots){
          if(this.currentOrganized.organize_rows.find((item) => item.winner_participant_id === 0 && item.winner_user_id === 0)){
            return true;
          }
        }
        return false;
      },
      backToPrepareInvitation() {
        this.$client.put(`organize/${this.$route.params.id}`, {publication: ''}).then(({ status, data }) => {
          // eslint-disable-next-line eqeqeq
          if(status == 200) {
            this.$store.commit('organize/setCurrentOrganized', data.data)
            this.$router.push('/organizing/competitive')
          }
        }).catch(e => {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Ինչ որ բան այն չէ',
            text: 'Կրկին փորձեք!'
          })
        })
      },
      backToApplicationEvaluation() {
        this.$client.put(`organize/${this.$route.params.id}`, {create_contract: 0}).then(({ status, data }) => {
          // eslint-disable-next-line eqeqeq
          if(status == 200) {
            this.$store.commit('organize/setCurrentOrganized', data.data)
            this.$router.push('/organizing/competitive')
          }
        }).catch(e => {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Ինչ որ բան այն չէ',
            text: 'Կրկին փորձեք!'
          })
        })
      },
      changeLocale(lngCode) {
        if (lngCode !== this.locale) {
          this.$store.dispatch('user/setLocale', lngCode)
          this.$i18n.locale = this.locale
        }
      },
    },
  }
</script>
<style>
.notification-badge{
  top: 0;
  right: 0;
  position: absolute;
  background: #006BE6;
  color: white;
  padding: 0 4px;
  border-radius: 4px;
  font-size: 11px;
  height: 16px;
}
.notification-blocks{
  max-height: 312px;
  margin: 10px;
  margin-left: 0;
  min-height: calc(100% - 44px);
}
.notification-item{
  padding: 8px 16px;
}
.notification-name{
  white-space: normal;
  color: #2D3036;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.notification-time{
  color: #6E7485;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
}
.notification-content span{
  white-space: normal;
  color: #40444D;
  font-weight: 400;
  font-size: 14px;
}
.delete-all-block{
  padding: 12px 20px;
  cursor: inherit;
}
.delete-all-block .no-notification{
  color: #6E7485;
  font-size: 14px;
}
.delete-all-block span{
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  cursor: pointer;
}
.dropdown-notification{
  padding: 0px !important;
  width: 336px !important;
  height: fit-content;
  max-height: 376px;
}
.nav-notification{
  margin: 0 23px 0 3px;
}
.notification-account{
 height: 100%;
}
.dropdown-menu.topbar-dropdown{
  top: 10px !important;
  background: rgba(255, 255, 255, 1) !important;
  /* box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1) !important; */
  box-shadow: 0px 4px 12px rgb(0 0 0 / 10%) !important;
  backdrop-filter: blur(8px) !important;
  border-radius: 0px 0px 12px 12px !important;
  border: 0 !important;
  padding: 8px 0px;
  width: max-content;
}
.dropdown-menu > *{
  color: #595E6B;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  display: block;
}
.dropdown-menu > *:hover{
  text-decoration: none;
  color: #40444D;
}
.badge{
  background: #006BE6;
  border-radius: 4px;
  font-size: 11px;
}
.nav-pills .nav-link.active{
  background: #006BE6 !important;
}
@media only screen and (max-width: 1200px) {
  .mob-menu-item{
    transform: rotate( 90deg);
  }
  .mob-menu{
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    height: 70px; 
    justify-content: center;
  }
}

@media only screen and (max-width: 440px) {
  .dropdown-notification{
    width: calc(100vw - 16px) !important;
    left: 0 !important;
    right: 0 !important;
    margin: auto;
  }
  .mob-hide{
    display: none !important;
  }
}

</style>