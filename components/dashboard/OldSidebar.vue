<template>
  <div class="leftbar-tab-menu mm-active active" v-if="me.package !== undefined">
    <create-plan-modal />
    <div class="mini-sidebar main-icon-menu in mm-show">
      <a class="logo logo-metrica d-block text-center">
            <span>
               <img src="~/assets/landing/images/favicon_1.ico" alt="logo-small" class="logo-sm">
            </span>
      </a>
      <nav class="nav" style="margin-top: 35px;">
        <a
          @click.prevent="goTo('/')"
          style="cursor: pointer"
          class="nav-link"
          data-toggle="tooltip-custom"
          data-placement="right"
          data-trigger="hover"
          data-original-title="Դուրս գալ աշխատանքային վահանակից">
          <div class="row p-4 w-100 align-items-center justify-content-center">
            <div class="col-2 row justify-content-center">
              <i class="fas fa-home"></i>
            </div>
            <div class="col nav-item-block">
              <h6 class="nav-item-text">Հիմնական էջ</h6>
            </div>
          </div>
        </a>
        <template v-if="userType === 'STATE'">
          <a :class="[_.startsWith($route.path, '/planning') && 'active-item']"
            @click.prevent="goTo('/planning/list')"
            style="cursor: pointer"
            class="nav-link"
            data-toggle="tooltip-custom"
            data-placement="right"
            data-trigger="hover"
            data-original-title="Պլանավորում">
            <div class="row p-4 w-100 align-items-center justify-content-left mob-position">
              <div class="col-2 row justify-content-center">
                <i class="fas fa-sitemap"></i>
              </div>
              <div class="col nav-item-block">
                <h6 class="nav-item-text">Պլանավորում</h6>
              </div>
            </div>
          </a>
          
          <a v-if="division.id !== '1'" :class="me.package === 'Էկոնոմ' ? _.startsWith($route.path, '/organizing/oneperson') : [_.startsWith($route.path, '/organizing') && 'active-item']"
            @click.prevent="goTo(me.package === 'Էկոնոմ' ? '/organizing/oneperson' : '/organizing')"
            style="cursor: pointer"
            class="nav-link"
            data-toggle="tooltip-custom"
            data-placement="right"
            data-trigger="hover"
            data-original-title="Կազմակերպում">
            <div class="row p-4 w-100 align-items-center justify-content-left mob-position">
              <div class="col-2 row justify-content-center">
                <i class="fas fa-border-all"></i>
              </div>
              <div class="col nav-item-block">
                <h6 class="nav-item-text">Կազմակերպում</h6>
              </div>
            </div>
          </a>

          <a :class="[_.startsWith($route.path, '/contractmanagement') && 'active-item']"
            @click.prevent="goTo('/contractmanagement')"
            v-show="me.package === 'Գոլդ'"
            style="cursor: pointer"
            class="nav-link"
            data-toggle="tooltip-custom"
            data-placement="right"
            data-trigger="hover"
            data-original-title="Պայմանագրի կառավարում">
            <div class="row p-4 w-100 align-items-center justify-content-left mob-position">
              <div class="col-2 row justify-content-center">
                <i class="dripicons-document"></i>
              </div>
              <div class="col nav-item-block">
                <h6 class="nav-item-text">Պայմանագրի կառավարում</h6>
              </div>
            </div>
          </a>
        </template>
        <template v-else>
          <a :class="[_.startsWith($route.path, '/dashboard') && 'active-item']"
            @click.prevent="goTo('/dashboard')"
            style="cursor: pointer"
            class="nav-link "
            data-toggle="tooltip-custom"
            data-placement="right"
            data-trigger="hover"
            data-original-title="Գլխավոր">
            <div class="row p-4 w-100 align-items-center justify-content-left mob-position">
              <div class="col-2 row justify-content-center">
                <i class="fas fa-desktop"></i>
              </div>
              <div class="col nav-item-block">
                <h6 class="nav-item-text">Գլխավոր</h6>
              </div>
            </div>
          </a>
          <a v-if="userType === 'USER'" :class="[_.startsWith($route.path, '/organizator') && 'active-item']"
            @click.prevent="goTo('/organizator')"
            style="cursor: pointer"
            class="nav-link"
            data-toggle="tooltip-custom"
            data-placement="right"
            data-trigger="hover"
            data-original-title="Կազմակերպիչ">
            <div class="row p-4 w-100 align-items-center justify-content-left">
              <div class="col-2 row justify-content-center">
                <i class="fas fa-user-tie" ></i>
              </div>
              <div class="col nav-item-block">
                <h6 class="nav-item-text">Կազմակերպիչ</h6>
              </div>
            </div>
          </a>

          <a v-if="userType === 'USER'" :class="[_.startsWith($route.path, '/participant') && 'active-item']"
            @click.prevent="goTo('/participant')"
            style="cursor: pointer"
            class="nav-link"
            data-toggle="tooltip-custom"
            data-placement="right"
            data-trigger="hover"
            data-original-title="Մասնակից">
            <div class="row p-4 w-100 align-items-center justify-content-left mob-position">
              <div class="col-2 row justify-content-center">
                <i class="fas fa-user-alt" ></i>
              </div>
              <div class="col nav-item-block">
                <h6 class="nav-item-text">Մասնակից</h6>
              </div>
            </div>
          </a>

          <!-- <a v-if="userType === 'USER'" :class="[_.startsWith($route.path, '/analysis') && 'active-item']"
            @click.prevent="goTo('/analysis')"
            style="cursor: pointer"
            class="nav-link"
            data-toggle="tooltip-custom"
            data-placement="right"
            data-trigger="hover"
            data-original-title="">
            <div class="row p-4 w-100 align-items-center justify-content-left">
              <div class="col-2 row justify-content-center">
                <i class="fas fa-chart-bar"></i>
              </div>
              <div class="col nav-item-block">
                <h6 class="nav-item-text">Վերլուծություն</h6>
              </div>
            </div>
          </a> -->

          <a :class="[_.startsWith($route.path, '/contract-management') && 'active-item']"
            @click.prevent="goTo('/contract-management')"
            style="cursor: pointer"
            class="nav-link"
            data-toggle="tooltip-custom"
            data-placement="right"
            data-trigger="hover"
            data-original-title="Պայմանագրի կառավարում">
            <div class="row p-4 w-100 align-items-center justify-content-left mob-position">
              <div class="col-2 row justify-content-center">
                <i class="dripicons-document"></i>
              </div>
              <div class="col nav-item-block">
                <h6 class="nav-item-text">Պայմանագրի կառավարում</h6>
              </div>
            </div>
          </a>
        </template>
      </nav><!--end nav-->

    </div><!--end main-icon-menu-->
    <div class="main-menu-inner active" :style="{width: innerMenuWidth}"><!-- LOGO -->
      <div class="topbar-left">
        <a class="logo">
            <span>
                <img style="height: 20px" src="~/assets/landing/images/logo_1.png" alt="logo-large" class="logo-lg logo-dark">
                <!-- <img src="~/assets/dashboard/assets/images/logo.png" alt="logo-large" class="logo-lg logo-light"> -->
            </span>
        </a>
      </div>
      
      <!--end logo-->
      <div class="slimScrollDiv mm-active active"
           style="position: relative; overflow: hidden; width: 300px; height: 937px;">
        <div class="menu-body slimscroll mm-show" style="overflow: hidden; width: 300px; height: 937px; z-index: 2000; position: relative;">
          <div id="main"
               class="main-icon-menu-pane"
               :class="{'mm-active active': _.startsWith($route.path, '/dashboard')}">
            <div class="title-box ">
              <h6 class="menu-title">Գլխավոր</h6>
            </div>
          </div>

          <div id="planning"
               class="main-icon-menu-pane"
               :class="{'mm-active active': _.startsWith($route.path, '/planning')}">
            <div class="title-box">
              <h6 class="menu-title">Պլանավորում</h6>
            </div>
            <ul class="mb-5 nav metismenu in mm-show">
              <li class="nav-item">
                <a class="nav-link"
                   style="cursor: pointer"
                   @click.prevent="[goTo('/planning/list'), setTrue()]"
                   :class="{'active': $route.path === '/planning/list'}">
                  <span class="w-100"> Գնումների Պլան</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"
                   style="cursor: pointer"
                   v-if="division.id === '2'"
                   @click.prevent="goTo('/planning/responsible-unit')"
                   :class="{'active': $route.path === '/planning/responsible-unit'}">
                    {{ division.childName }}
                </a>
              </li>
            </ul>
            <div v-if="_.startsWith($route.path, '/planning/list')" class="plan-actions">
              <button v-if="isRoot"
                      @click="$modal.show('create-plan-modal')"
                      class="btn btn-primary waves-effect waves-light">
                      Ստեղծել պլան
              </button>
            </div>
          </div>

          <div id="organizing"
               class="main-icon-menu-pane"
               :class="{'mm-active active': _.startsWith($route.path, '/organizing')}">
            <div class="title-box">
              <h6 class="menu-title">Կազմակերպում</h6>
            </div>
            <ul class="mb-5 nav metismenu in mm-show">
              <li class="nav-item" v-show="(me.package !== 'Էկոնոմ' && me.package !== 'Անվճար') && userType === 'STATE'">
                <a class="nav-link"
                   style="cursor: pointer"
                   @click.prevent="[setTrue(),goTo('/organizing/competitive')]"
                   :class="{'active': _.startsWith($route.path, '/organizing/competitive')}">
                  <span class="w-100">Պետական մրցակցային</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"
                   style="cursor: pointer"
                   @click.prevent="[setTrue(),goTo('/organizing/oneperson')]"
                   :class="{'active': _.startsWith($route.path, '/organizing/oneperson')}">
                  <span class="w-100">Պետական մեկ անձ</span>
                </a>
              </li>
            </ul>
          </div>

          <div id="contractmanagement"
               class="main-icon-menu-pane"
               :class="{'mm-active active': _.startsWith($route.path, '/contractmanagement')}">
            <div class="title-box">
              <h6 class="menu-title">Պայմանագրի կառավարում</h6>
            </div>
            <ul class="mb-5 nav metismenu in mm-show">
              <div class="nav-item">
                <div id="headingThree">
                  <h2 class="mb-0">
                    <div
                      @click.prevent="[goTo('/contractmanagement/contracts'),setTrue()]"
                      :class="[_.startsWith($route.path, '/contractmanagement/contracts') && 'active']"
                      class="shadow-none text-left btn nav-link"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">Պայմանագրեր</span>
                    </div>
                  </h2>
                </div>
              </div>
              <div class="nav-item">
                <div id="headingThree">
                  <h2 class="mb-0">
                    <div
                      @click.prevent="[goTo('/contractmanagement/purchasing-items'),setTrue()]"
                      :class="[_.startsWith($route.path, '/contractmanagement/purchasing-items') && 'active']"
                      class="shadow-none text-left btn nav-link"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">Գնման առարկաներ</span>
                    </div>
                  </h2>
                </div>
              </div>
              <div class="nav-item">
                <div id="headingOne">
                  <h2 class="mb-0">
                    <div class="shadow-none text-left btn nav-link" type="button" data-toggle="collapse" data-target="#collapseSuggesions" aria-expanded="true" aria-controls="collapseSuggesions">
                      <span class="w-100">Պատվերներ</span>
                      <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
                    </div>
                  </h2>
                </div>
                <div id="collapseSuggesions" class="collapse" :class="[_.startsWith($route.path, '/contractmanagement/orders') && 'show']" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <li
                      :class="[_.startsWith($route.path, '/contractmanagement/orders/active') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="[goTo('/contractmanagement/orders/active'),setTrue()]">Ընթացքի մեջ</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/contractmanagement/orders/finished') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="[goTo('/contractmanagement/orders/finished'),setTrue()]">Մատակարարված</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/contractmanagement/orders/canceled') && 'active']"
                      class="nav-link"
                      type="button"
                      >
                      <a @click.prevent="[goTo('/contractmanagement/orders/canceled'),setTrue()]">Չկատարված</a>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <div id="contract-management"
               class="main-icon-menu-pane"
               :class="{'mm-active active': _.startsWith($route.path, '/contract-management')}">
            <div class="title-box">
              <h6 class="menu-title">Պայմանագրի կառավարում</h6>
            </div>
            <ul class="mb-5 nav metismenu in mm-show">
              <div class="nav-item">
                <div id="headingOne">
                  <h2 class="mb-0">
                    <div class="shadow-none text-left btn nav-link" type="button" data-toggle="collapse" data-target="#collapseContracts" aria-expanded="true" aria-controls="collapseContracts">
                      <span class="w-100">Պայմանագրեր</span>
                      <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
                    </div>
                  </h2>
                </div>
                <div id="collapseContracts" class="collapse" :class="[_.startsWith($route.path, '/contract-management/contracts') && 'show']" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <li
                      :class="[_.startsWith($route.path, '/contract-management/contracts/provider') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="goTo('/contract-management/contracts/provider')">Մասնակից</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/contract-management/contracts/client') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="goTo('/contract-management/contracts/client')">Կառավարիչ</a>
                    </li>
                  </div>
                </div>
              </div>
              <div class="nav-item">
                <div id="headingOne">
                  <h2 class="mb-0">
                    <div class="shadow-none text-left btn nav-link" type="button" data-toggle="collapse" data-target="#collapseSuggesions" aria-expanded="true" aria-controls="collapseSuggesions">
                      <span class="w-100">Ստացված պատվերներ</span>
                      <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
                    </div>
                  </h2>
                </div>
                <div id="collapseSuggesions" class="collapse" :class="[_.startsWith($route.path, '/contract-management/orders') && 'show']" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <li
                      :class="[_.startsWith($route.path, '/contract-management/orders/active') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="goTo('/contract-management/orders/active')">Ընթացքի մեջ</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/contract-management/orders/finished') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="goTo('/contract-management/orders/finished')">Ավարտված</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/contract-management/orders/canceled') && 'active']"
                      class="nav-link"
                      type="button"
                      >
                      <a @click.prevent="goTo('/contract-management/orders/canceled')">Չկատարված</a>
                    </li>
                  </div>
                </div>
              </div>
              <div class="nav-item">
                <div id="headingOne">
                  <h2 class="mb-0">
                    <div class="shadow-none text-left btn nav-link" type="button" data-toggle="collapse" data-target="#collapseOrders" aria-expanded="true" aria-controls="collapseOrders">
                      <span class="w-100">Կատարված պատվերներ</span>
                      <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
                    </div>
                  </h2>
                </div>
                <div id="collapseOrders" class="collapse" :class="[_.startsWith($route.path, '/contract-management/my-orders') && 'show']" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <li
                      :class="[_.startsWith($route.path, '/contract-management/my-orders/active') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="goTo('/contract-management/my-orders/active')">Ընթացքի մեջ</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/contract-management/my-orders/finished') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="goTo('/contract-management/my-orders/finished')">Ավարտված</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/contract-management/my-orders/canceled') && 'active']"
                      class="nav-link"
                      type="button"
                      >
                      <a @click.prevent="goTo('/contract-management/my-orders/canceled')">Չկատարված</a>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <div id="organizator"
               class="main-icon-menu-pane"
               :class="{'mm-active active': _.startsWith($route.path, '/organizator')}">
            <div class="title-box">
              <h6 class="menu-title">Կազմակերպիչ /Գնորդ/</h6>
            </div>
            <div class="accordion" id="accordionExample">
              <div v-if="me.is_manager" class="nav-item">
                <div id="headingOne">
                  <h2 class="mb-0">
                    <div class="shadow-none text-left btn nav-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span class="w-100">Մրցույթներ</span>
                      <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
                    </div>
                  </h2>
                </div>
                <div id="collapseOne" class="collapse" :class="[_.startsWith($route.path, '/organizator/tenders') && 'show']" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <li
                      :class="[_.startsWith($route.path, '/organizator/tenders/list') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="goTo('/organizator/tenders/list')">Ցուցադրել մրցույթներ</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/organizator/tenders/add') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="goTo('/organizator/tenders/add')">Ավելացնել մրցույթ</a>
                    </li>
                  </div>
                </div>
              </div>
              <div class="nav-item">
                <div id="headingThree">
                  <h2 class="mb-0">
                    <div
                      @click.prevent="[goTo('/organizator/itender'),setTrue()]"
                      :class="[_.startsWith($route.path, '/organizator/itender') && 'active']"
                      class="shadow-none text-left btn nav-link"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <div >
                        <span class="w-100">
                          iTender Մրցույթներ
                        </span>
                        <span
                          class="p-1 badge badge-pill badge-primary" 
                        >
                          Beta
                        </span>
                      </div>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div id="participant"
               class="main-icon-menu-pane"
               :class="{'mm-active active': _.startsWith($route.path, '/participant')}">
            <div class="title-box">
              <h6 class="menu-title">Մասնակից /Վաճառող/</h6>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="nav-item">
                <div id="headingThree">
                  <h2 class="mb-0 active">
                    <div
                      @click.prevent="[goTo('/participant/tenders'), setTrue()]"
                      :class="[_.startsWith($route.path, '/participant/tenders') && 'active']"
                      class="shadow-none text-left btn nav-link"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">Մրցույթներ և հայտարարություններ</span>
                    </div>
                  </h2>
                </div>
              </div>
              <div class="nav-item">
                <div id="headingOne">
                  <h2 class="mb-0">
                    <div class="shadow-none text-left btn nav-link" type="button" data-toggle="collapse" data-target="#collapseSuggesions" aria-expanded="true" aria-controls="collapseSuggesions">
                      <span class="w-100">Առաջարկներ <span v-if="me.unseen_suggestions" class="badge badge-primary">{{me.unseen_suggestions}}</span></span>
                      <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
                    </div>
                  </h2>
                </div>
                <div id="collapseSuggesions" class="collapse" :class="[_.startsWith($route.path, '/participant/suggestions') && 'show']" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <li
                      :class="[_.startsWith($route.path, '/participant/suggestions/all') && 'active']"
                      class="nav-link pr-0"
                      type="button"
                    >
                      <div>
                        <a @click.prevent="[goTo('/participant/suggestions/all'),setTrue()]">Ստացված առաջարկներ
                          <span v-if="me.unseen_suggestions" class="badge badge-primary">{{me.unseen_suggestions}}</span>
                        </a>
                      </div>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/participant/suggestions/accepted') && 'active']"
                      class="nav-link"
                      type="button"
                    >
                      <a @click.prevent="[goTo('/participant/suggestions/accepted'),setTrue()]">Ներկայացված առաջարկներ</a>
                    </li>
                    <li
                      :class="[_.startsWith($route.path, '/participant/suggestions/signature') && 'active']"
                      class="nav-link"
                      type="button"
                      >
                      <a @click.prevent="[goTo('/participant/suggestions/signature'),setTrue()]">Սևագրեր</a>
                    </li>
                  </div>
                </div>
              </div>
              <!-- <div class="nav-item">
                <div id="headingThree">
                  <h2 class="mb-0">
                    <div
                      @click.prevent="goTo('/participant/requests')"
                      :class="[_.startsWith($route.path, '/participant/requests') && 'active']"
                      class="shadow-none text-left btn nav-link"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">Ստացված հարցումներ</span>
                    </div>
                  </h2>
                </div>
              </div> -->
              <div class="nav-item">
                <div id="headingThree">
                  <h2 class="mb-0">
                    <div
                      @click.prevent="[goTo('/participant/contract/requests'),setTrue()]"
                      :class="[_.startsWith($route.path, '/participant/contract/requests') && 'active']"
                      class="shadow-none text-left btn nav-link"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">Պայմանագրի առաջարկ</span>
                    </div>
                  </h2>
                </div>
              </div>
              <!-- <div class="nav-item">
                <div id="headingFour">
                  <h2 class="mb-0">
                    <div
                      @click.prevent="goTo('/participant/analysis')"
                      :class="[_.startsWith($route.path, '/participant/analysis') && 'active']"
                      class="shadow-none text-left btn nav-link"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">Վերլուծություն</span>
                    </div>
                  </h2>
                </div>
              </div> -->
              <div class="nav-item">
                <div id="headingFour">
                  <h2 class="mb-0">
                    <div
                      @click.prevent="[ goTo('/participant/favoriteTenders'), setTrue() ]"
                      :class="[_.startsWith($route.path, '/participant/favoriteTenders') && 'active']"
                      class="shadow-none text-left btn nav-link"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">Նախընտրած մրցույթներ</span>
                      <br>
                      <span class="menu-arrow"><i style="color: rgb(255, 165, 0);" class="mdi mdi-star"></i></span>
                      
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <!-- to be added later-->
         <div id="MetricaPages" class="main-icon-menu-pane">
           <div class="title-box"><h6 class="menu-title">Պայմանագրի կառավարում</h6></div>
         </div>
         <div id="MetricaHelp" class="main-icon-menu-pane">
           <div class="title-box"><h6 class="menu-title">Լայվ օգնություն</h6></div>
         </div>
        </div>
        <div class="slimScrollBar"
             style="background: rgba(162, 177, 208, 0.13); width: 7px; position: absolute; top: 0px; opacity: 1; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 869px;"></div>
        <div class="slimScrollRail"
             style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
      </div>
      <!--end menu-body-->
    </div>
    <!-- end main-menu-inner-->
  </div>
</template>

<script>
import CreatePlanModal from '../../views/state/planning/partials/CreatePlanModal'
export default {
  components: { CreatePlanModal },
  props: ['innerMenuWidth'],
  computed: {
    innerMenuIsClosed() {
      return this.$store.getters['settings/innerMenuIsClosed']
    },
    me() {
      return this.$store.getters['user/me']
    },
    isRoot() {
      return this.$store.getters['user/isRoot']
    },
    userType() {
      return this.$store.getters.userType
    },
    division() {
      return this.$store.getters['user/division']
    },
  },
  methods: {
    async setTrue(){
      if(window.innerWidth <= 1200){
        this.checkWidth = true
      }else{
        this.checkWidth = false
      }
      if(this.checkWidth){
        await this.$store.dispatch('settings/toggleInnerMenu')
      }
    },
    consoleLog(data){
      console.log(data)
    },
    goTo(path) {
      if(this.$route.path !== path) {
        this.$router.push({ path })
      }
    },
    myEventHandler(e) {
      if(e.target.innerWidth <= 1200){
        this.checkWidth = true
      }else{
        this.checkWidth = false
      }
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  mounted(){
    if(window.innerWidth <= 1200){
      this.checkWidth = false
    }else{
      this.checkWidth = true
    }
  },
  data(){
    return{
      checkWidth : false
    }
  }
}
</script>
<style scoped>
  .badge {
    top: -7px;
    position: relative;
  }
  .leftbar-tab-menu .main-icon-menu .nav-link{
    color: white !important;
  }
  .leftbar-tab-menu .main-icon-menu .nav-link i{
    font-size: 22px;
    color: #becae6;
    /* background-color: #565656;
    color: transparent;
    -webkit-background-clip: text;
      -moz-background-clip: text;
            background-clip: text; */
  }
  .btn{
    display: flex;
    align-items: center;
  }
  /*.main-menu-inner{*/
  /*  width: 250px;*/
  /*}*/
  .card-body{
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .card-body li{
    margin-bottom: 5px;
    display: block;
  }
  .leftbar-tab-menu .main-icon-menu .nav-link.active:before{
    left: 52px;
  }
  .active .active-item i, .active .active-item h6, .mini-sidebar .nav-link:hover i, .mini-sidebar .nav-link:hover h6{
    color: white !important;
  }
  .nav-link{
    width: 100% !important;
  }
  .nav-item-block{
    display: none;
  }
  .nav-item-text{
    color: #becae6;
    margin-left: 10px;
    font-weight: 600;
  }
  .mini-sidebar:hover .nav-link.active:before{
    display: none;
  }
  .mini-sidebar:hover{
    z-index: 1000000;
    width: 180px;
  }
  .mini-sidebar:hover .nav-item-block {
    display: block;
  }
  .mini-sidebar{
    box-shadow: 0 7px 14px 0 rgb(80 110 228 / 50%);
    z-index: 1002;
  }
  @media only screen and (max-width: 1200px) {
    .main-menu-inner .topbar-left{
      display: none;
    }
    .main-menu-inner{
      width: 100% !important;
      height: fit-content;
      top: 70px;
    }
  }
  @media only screen and (max-width: 1025px) {
    .mini-sidebar:hover{
      width: 70px;
    }
    .nav-item-text{
      display: none;
      position: absolute;
    }
    .mob-position{
      display: flex;
      justify-content: center !important;
    }
    .leftbar-tab-menu .main-icon-menu .nav-link {
      width: 40px !important;
    }
  }
</style>