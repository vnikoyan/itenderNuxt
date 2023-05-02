<template>
  <div
    v-if="me.package !== undefined" class="sidebar-custom" :class="menuProps && 'sidebar-custom-open'" :style="menuProps ? 'width: 250px;' : 'width: 72px;'">
    <div @click="openCloseMenu" class="d-flex" :class="menuProps ? 'justify-content-end' : 'justify-content-start'">
      <div class="closeOpenMenu-btn">
        <svg width="10" height="14" viewBox="0 0 10 14" :style="menuProps ? 'transform: rotate(180deg); transition: all 0.5s linear' : 'transform: rotate(0deg); transition: all 0.5s linear'">
          <path d="M7.7931 5.41935L2.2069 -2.98443e-07L0.5 1.65591L6.08621 7.07527L0.500002 12.3441L2.2069 14L7.7931 8.73118L9.5 7.07527L7.7931 5.41935Z" fill="#006BE6"/>
        </svg>
      </div>
    </div>
    <nav class="nav-distance">
      <template v-if="userType === 'STATE'">
        <div class="nav-items-distance" :class="[_.startsWith($route.path, '/planning') && 'active-item']">
          <template v-if="menuProps">
            <div type="button" data-toggle="collapse" data-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
              <a 
                style="cursor: pointer"
                data-toggle="tooltip-custom"
                id="organizator"
                data-placement="right"
                data-trigger="hover"
                data-original-title="Պլանավորում">
                <div class="d-flex align-items-center justify-content-start nav-items-block">
                  <div class="sidebar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 640 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" fill="#6E7485"/></svg>
                  </div>
                  <h6 class="nav-item-content">Պլանավորում</h6>
                </div>
              </a>
            </div>
            <div class="collapse pl-2" :class="[_.startsWith($route.path, '/planning') && 'show']"  id="collapse_1">
              <div class="accordion" id="accordionExample">
                <div class="sidebar-collapse-link">
                  <h2>
                    <div
                      @click.prevent="[goTo('/planning/list')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/planning/list') && 'active']"
                      class="nav-item-content nav-item-content-distance mb-2"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Գնումների Պլան
                      </span>
                    </div>
                  </h2>
                </div>
                <div v-if="division.id === '2'" class="sidebar-collapse-link">
                  <h2>
                    <div
                      @click.prevent="[goTo('/planning/responsible-unit')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/planning/responsible-unit') && 'active']"
                      class="nav-item-content nav-item-content-distance mb-2"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        {{ division.childName }}
                      </span>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="dropright">
              <div type="button" data-toggle="dropdown" data-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
                <a style="cursor: pointer"
                  data-toggle="tooltip-custom"
                  data-placement="right"
                  id="participant"
                  data-trigger="hover"
                  data-original-title="Մասնակից"
                >
                  <div class="d-flex align-items-center justify-content-center nav-items-block">
                    <div class="sidebar-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 640 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" fill="#6E7485"/></svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click.prevent="[goTo('/planning/list')]; handleCloseMenu()">Գնումների Պլան</a>
                <a class="dropdown-item" v-if="division.id === '2'" @click.prevent="goTo('/planning/responsible-unit'); handleCloseMenu()">
                  {{ division.childName }}
                </a>
              </div>
            </div>
          </template>
        </div>
        <div class="nav-items-distance" :class="[_.startsWith($route.path, '/organizing') && 'active-item']">
          <template v-if="menuProps">
            <div type="button" data-toggle="collapse" data-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
              <a 
                style="cursor: pointer"
                data-toggle="tooltip-custom"
                id="organizator"
                data-placement="right"
                data-trigger="hover"
                data-original-title="Կազմակերպում">
                <div class="d-flex align-items-center justify-content-start nav-items-block">
                  <div class="sidebar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512"><path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z" fill="#6E7485"/></svg>
                  </div>
                  <h6 class="nav-item-content">Կազմակերպում</h6>
                </div>
              </a>
            </div>
            <div class="collapse pl-2" :class="[_.startsWith($route.path, '/organizing') && 'show']"  id="collapse_2">
              <div class="accordion" id="accordionExample">
                <div class="sidebar-collapse-link">
                  <h2>
                    <div
                      @click.prevent="[goTo('/organizing/competitive')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/organizing/competitive') && 'active']"
                      class="nav-item-content nav-item-content-distance mb-2"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Պետական մրցակցային
                      </span>
                    </div>
                  </h2>
                </div>
                <div class="sidebar-collapse-link">
                  <h2>
                    <div
                      @click.prevent="[goTo('/organizing/oneperson')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/organizing/oneperson') && 'active']"
                      class="nav-item-content nav-item-content-distance mb-2"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Պետական մեկ անձ
                      </span>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="dropright">
              <div type="button" data-toggle="dropdown" data-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                <a style="cursor: pointer"
                  data-toggle="tooltip-custom"
                  data-placement="right"
                  id="participant"
                  data-trigger="hover"
                  data-original-title="Մասնակից"
                >
                  <div class="d-flex align-items-center justify-content-center nav-items-block">
                    <div class="sidebar-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512"><path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z" fill="#6E7485"/></svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click.prevent="[goTo('/organizing/competitive')]; handleCloseMenu()">Պետական մրցակցային</a>
                <a class="dropdown-item" @click.prevent="[goTo('/organizing/oneperson')]; handleCloseMenu()">Պետական մեկ անձ</a>
              </div>
            </div>
          </template>
        </div>
        <div class="nav-items-distance" :class="[_.startsWith($route.path, '/contractmanagement') && 'active-item']">
          <template v-if="menuProps">
            <div type="button" data-toggle="collapse" data-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
              <a 
                style="cursor: pointer"
                data-toggle="tooltip-custom"
                id="organizator"
                data-placement="right"
                data-trigger="hover"
                data-original-title="Պայմանագրի կառավարում">
                <div class="d-flex align-items-center justify-content-start nav-items-block">
                  <div class="sidebar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" fill="#6E7485"/></svg>
                  </div>
                  <h6 class="nav-item-content">Պայմանագրի կառավարում</h6>
                </div>
              </a>
            </div>
            <div class="collapse pl-2" :class="[_.startsWith($route.path, '/contractmanagement') && 'show']"  id="collapse_3">
              <div class="accordion" id="accordionExample">
                <div class="sidebar-collapse-link">
                  <h2>
                    <div
                      @click.prevent="[goTo('/contractmanagement/contracts')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/contractmanagement/contracts') && 'active']"
                      class="nav-item-content nav-item-content-distance mb-2"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Պայմանագրեր
                      </span>
                    </div>
                  </h2>
                </div>
                <div class="sidebar-collapse-link">
                  <h2>
                    <div
                      @click.prevent="[goTo('/contractmanagement/orders/active')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/contractmanagement/orders') && 'active']"
                      class="nav-item-content nav-item-content-distance mb-2"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Պատվերներ
                      </span>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="dropright">
              <div type="button" data-toggle="dropdown" data-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                <a style="cursor: pointer"
                  data-toggle="tooltip-custom"
                  data-placement="right"
                  id="participant"
                  data-trigger="hover"
                  data-original-title="Մասնակից"
                >
                  <div class="d-flex align-items-center justify-content-center nav-items-block">
                    <div class="sidebar-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" fill="#6E7485"/></svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click.prevent="[goTo('/contractmanagement/contracts')]; handleCloseMenu()">Պայմանագրեր</a>
                <a class="dropdown-item" @click.prevent="[goTo('/contractmanagement/orders/active')]; handleCloseMenu()">Պատվերներ</a>
              </div>
            </div>
          </template>
        </div>
        <a
          @click.prevent="() => {if(userPackage === 'Գոլդ'){goTo('/analysis');handleCloseMenu()}}"
          style="cursor: pointer"
          data-toggle="tooltip-custom"
          v-tooltip="userPackage !== 'Գոլդ' && 'Տվյալ հնարավորությունից օգտվելու համար անհրաժեշտ է ունենալ գոլդ փաթեթ'"
          class="nav-items-distance"
          :class="[_.startsWith($route.path, '/analysis') && 'active-item', userPackage !== 'Գոլդ' && 'disabled-nav-item']"
          data-placement="right"
          data-trigger="hover"
          data-original-title="Դուրս գալ աշխատանքային վահանակից">
          <div class="d-flex align-items-center nav-items-block" :class="menuProps ? 'justify-content-start' : 'justify-content-center'">
            <div class="sidebar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.25H19C19.96 3.25 20.75 4.04 20.75 5V19C20.75 19.96 19.96 20.75 19 20.75H5C4.04 20.75 3.25 19.96 3.25 19V5C3.25 4.04 4.04 3.25 5 3.25ZM4.75 19.2L19.2 19.25L19.25 4.8L4.75 4.75V19.2ZM7.20996 10.21H8.75996V16.75H7.20996V10.21ZM16.7902 13.24H15.2402V16.75H16.7902V13.24ZM11.2202 7.25H12.7702V16.75H11.2202V7.25Z" fill="#6E7485"/>
              </svg>
            </div>
            <h6 class="nav-item-content" :class="menuProps ? 'd-block' : 'd-none'">
              Վիճակագրություն
              <span  class="p-1 badge badge-primary">
                Beta
              </span>
            </h6>
          </div>
        </a>
      </template>
      <template v-else>
        <a
          @click.prevent="goTo('/dashboard'); handleCloseMenu()"
          style="cursor: pointer"
          data-toggle="tooltip-custom"
          class="nav-items-distance"
          :class="[_.startsWith($route.path, '/dashboard') && 'active-item']"
          data-placement="right"
          data-trigger="hover"
          data-original-title="Դուրս գալ աշխատանքային վահանակից">
          <div class="d-flex align-items-center nav-items-block" :class="menuProps ? 'justify-content-start' : 'justify-content-center'">
            <div class="sidebar-icon">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11293 0H5.7493C6.56748 0 7.29476 0.727274 7.38567 1.63637V5.27274C7.38567 6.18183 6.65839 6.9091 5.7493 6.9091H2.11293C1.20384 6.9091 0.476562 6.18183 0.476562 5.27274V1.63637C0.476562 0.727274 1.20384 0 2.11293 0ZM1.8402 5.45456H5.93112V1.36364H1.8402V5.45456ZM11.2042 0H14.8406C15.6588 0 16.3861 0.727274 16.477 1.63637V5.27274C16.477 6.18183 15.7497 6.9091 14.8406 6.9091H11.2042C10.2951 6.9091 9.56787 6.18183 9.56787 5.27274V1.63637C9.56787 0.727274 10.2951 0 11.2042 0ZM10.9315 5.45456H15.0224V1.36364H10.9315V5.45456ZM5.7493 9.09089H2.11293C1.20384 9.09089 0.476562 9.81816 0.476562 10.7273V14.3636C0.476562 15.2727 1.20384 16 2.11293 16H5.7493C6.65839 16 7.38567 15.2727 7.38567 14.3636V10.7273C7.29476 9.81816 6.56748 9.09089 5.7493 9.09089ZM5.93112 14.5454H1.8402V10.4545H5.93112V14.5454ZM11.2042 9.09094H14.8406C15.6588 9.09094 16.3861 9.81822 16.477 10.7273V14.3637C16.477 15.2728 15.7497 16 14.8406 16H11.2042C10.2951 16 9.56787 15.2728 9.56787 14.3637V10.7273C9.56787 9.81822 10.2951 9.09094 11.2042 9.09094ZM10.9315 14.5455H15.0224V10.4546H10.9315V14.5455Z" fill="#6E7485"/>
              </svg>
            </div>
            <h6 class="nav-item-content" :class="menuProps ? 'd-block' : 'd-none'">Գլխավոր</h6>
          </div>
        </a>
        <div class="nav-items-distance" :class="[_.startsWith($route.path, '/organizator') && 'active-item']">
          <template v-if="menuProps">
            <div type="button" data-toggle="collapse" data-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
              <a 
                style="cursor: pointer"
                data-toggle="tooltip-custom"
                id="organizator"
                data-placement="right"
                data-trigger="hover"
                data-original-title="Կազմակերպիչ">
                <div class="d-flex align-items-center justify-content-start nav-items-block">
                  <div class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00029 0.00290021C11.5845 0.00290021 13.7072 2.12564 13.7072 4.70984C13.7072 7.29405 11.5845 9.41679 9.00029 9.41679C6.41608 9.41679 4.29334 7.29405 4.29334 4.61755C4.29334 2.03335 6.41608 -0.0893928 9.00029 0.00290021ZM12.3228 4.70984C12.3228 2.86398 10.8461 1.3873 9.00029 1.3873C7.24672 1.3873 5.67774 2.86398 5.67774 4.70984C5.67774 6.5557 7.15443 8.03239 9.00029 8.03239C10.8461 8.03239 12.3228 6.5557 12.3228 4.70984ZM6.2314 10.8934H11.8613C14.7224 10.8934 17.0297 13.2931 17.0297 16.1541V18H0.970703V16.1541C0.970703 13.2008 3.37032 10.8934 6.2314 10.8934ZM2.44739 16.5233H15.553H15.7376V16.1541C15.7376 14.0314 13.984 12.3701 11.9536 12.3701H9.83083V14.862H8.35414V12.3701H6.2314C4.10867 12.3701 2.44739 14.1237 2.44739 16.1541V16.5233Z" fill="#6E7485"/>
                    </svg>
                  </div>
                  <h6 class="nav-item-content">Կազմակերպիչ</h6>
                </div>
              </a>
            </div>
            <div class="collapse pl-2" :class="[_.startsWith($route.path, '/organizator') && 'show']"  id="collapse_4">
              <div class="accordion" id="accordionExample">
                <div class="sidebar-collapse-link">
                  <h2>
                    <div
                      @click.prevent="[goTo('/organizator/itender')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/organizator/itender') && 'active']"
                      class="nav-item-content nav-item-content-distance mb-2"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        iTender մրցույթ
                      </span>
                    </div>
                  </h2>
                </div>
                <template v-if="me.is_manager">
                  <div class="sidebar-collapse-link">
                    <h2>
                      <div
                        @click.prevent="[goTo('/organizator/tenders/list')]; handleCloseMenu()"
                        :class="[_.startsWith($route.path, '/organizator/tenders') && 'active']"
                        class="nav-item-content nav-item-content-distance mb-2"
                        type="button" data-toggle="collapse"
                        data-target="#collapseTree"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        <span class="w-100">
                          Մրցույթներ
                        </span>
                      </div>
                    </h2>
                  </div>
                </template>
                <div class="sidebar-collapse-link">
                  <h2 class="mb-0">
                    <div
                      v-tooltip="userPackage !== 'Գոլդ' && 'Տվյալ հնարավորությունից օգտվելու համար անհրաժեշտ է ունենալ գոլդ փաթեթ'"
                      @click.prevent="goldPackagePage('/organizator/contract-management/contracts')"
                      :class="[_.startsWith($route.path, '/organizator/contract-management') && 'active', userPackage !== 'Գոլդ' && 'disabled-menu-item']"
                      class="nav-item-content nav-item-content-distance"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Պայմանագրերի կառավարում
                      </span>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="dropright">
              <div type="button" data-toggle="dropdown" data-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                <a style="cursor: pointer"
                  data-toggle="tooltip-custom"
                  data-placement="right"
                  id="participant"
                  data-trigger="hover"
                  data-original-title="Մասնակից"
                >
                  <div class="d-flex align-items-center justify-content-center nav-items-block">
                    <div class="sidebar-icon">
                      <svg width="18" height="18" viewBox="0 0 18 18">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00029 0.00290021C11.5845 0.00290021 13.7072 2.12564 13.7072 4.70984C13.7072 7.29405 11.5845 9.41679 9.00029 9.41679C6.41608 9.41679 4.29334 7.29405 4.29334 4.61755C4.29334 2.03335 6.41608 -0.0893928 9.00029 0.00290021ZM12.3228 4.70984C12.3228 2.86398 10.8461 1.3873 9.00029 1.3873C7.24672 1.3873 5.67774 2.86398 5.67774 4.70984C5.67774 6.5557 7.15443 8.03239 9.00029 8.03239C10.8461 8.03239 12.3228 6.5557 12.3228 4.70984ZM6.2314 10.8934H11.8613C14.7224 10.8934 17.0297 13.2931 17.0297 16.1541V18H0.970703V16.1541C0.970703 13.2008 3.37032 10.8934 6.2314 10.8934ZM2.44739 16.5233H15.553H15.7376V16.1541C15.7376 14.0314 13.984 12.3701 11.9536 12.3701H9.83083V14.862H8.35414V12.3701H6.2314C4.10867 12.3701 2.44739 14.1237 2.44739 16.1541V16.5233Z" fill="#6E7485"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click.prevent="[goTo('/organizator/itender')]; handleCloseMenu()">iTender մրցույթ</a>
                <a v-if="me.is_manager" class="dropdown-item" @click.prevent="[goTo('/organizator/tenders/list')]; handleCloseMenu()">Մրցույթներ</a>
                <a v-tooltip="userPackage !== 'Գոլդ' && 'Տվյալ հնարավորությունից օգտվելու համար անհրաժեշտ է ունենալ գոլդ փաթեթ'" class="dropdown-item" @click.prevent="goldPackagePage('/organizator/contract-management/contracts')">
                  Պայմանագրերի կառավարում
                </a>
              </div>
            </div>
          </template>
        </div>
        <div class="nav-items-distance" :class="[_.startsWith($route.path, '/participant') && 'active-item']">
          <template v-if="menuProps">
            <div type="button" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
              <a style="cursor: pointer"
                data-toggle="tooltip-custom"
                data-placement="right"
                id="participant"
                data-trigger="hover"
                data-original-title="Մասնակից">
                <div class="d-flex align-items-center justify-content-start nav-items-block">
                  <div class="sidebar-icon">
                    <svg width="24" height="18" viewBox="0 0 24 18">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1565 9.48915C18.7978 9.48915 20.8522 7.33698 20.8522 4.79349C20.8522 2.15218 18.7978 0 16.1565 0C13.5152 0 11.363 2.15218 11.363 4.69566C11.363 7.33698 13.5152 9.48915 16.1565 9.48915ZM16.1565 1.4674C17.9174 1.4674 19.3848 2.93479 19.3848 4.69566C19.3848 6.45654 17.9174 7.92393 16.1565 7.92393C14.2978 7.92393 12.8304 6.45654 12.8304 4.69566C12.8304 2.93479 14.2978 1.4674 16.1565 1.4674ZM18.7001 10.9565H13.6131C13.0262 10.9565 12.5371 11.0543 12.0479 11.1522C11.5588 11.3478 11.0697 11.5435 10.6784 11.8369C9.99357 12.3261 9.40661 12.913 9.01531 13.6956H5.39573C3.34138 13.6956 1.58051 14.8696 0.700069 16.5326C0.504417 17.0217 0.308764 17.5109 0.210938 18H1.67833C1.77616 17.413 2.06964 16.9239 2.36312 16.5326C3.0479 15.75 4.12399 15.163 5.29791 15.163H8.33052C8.2327 15.4565 8.2327 15.75 8.2327 16.1413V18H23.7871V16.1413C23.8849 13.3043 21.5371 10.9565 18.7001 10.9565ZM22.4175 16.6304H9.89575V16.2391V15.6522C9.89575 15.2221 10.2553 14.6237 10.4827 14.2826C10.5316 14.2337 10.5561 14.1848 10.5805 14.1359C10.605 14.0869 10.6294 14.038 10.6784 13.9891C10.9718 13.5978 11.2653 13.3043 11.6566 13.1087C12.0479 12.8152 12.5371 12.6196 13.0262 12.5217C13.2218 12.4239 13.5153 12.4239 13.711 12.4239H18.7979C20.8523 12.4239 22.5153 14.0869 22.5153 16.1413V16.6304H22.4175ZM10.6898 7.79349C10.6898 10.337 8.63549 12.4892 5.99417 12.4892C3.35286 12.4892 1.20068 10.337 1.20068 7.69566C1.20068 5.15218 3.35286 3 5.99417 3C8.63549 3 10.6898 5.15218 10.6898 7.79349ZM9.22244 7.69566C9.22244 5.93479 7.75505 4.46739 5.99417 4.46739C4.13547 4.46739 2.66808 5.93479 2.66808 7.69566C2.66808 9.45654 4.13547 10.9239 5.99417 10.9239C7.75505 10.9239 9.22244 9.45654 9.22244 7.69566Z" fill="#6E7485"/>
                    </svg>
                  </div>
                  <div class="title-box">
                    <h6 class="nav-item-content">Մասնակից</h6>
                  </div>
                  <svg v-if="menuNotifications.unseen_contract_requests || menuNotifications.unseen_suggestions || menuNotifications.unseen_tenders || menuNotifications.active_orders" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="3" fill="#006BE6"/>
                  </svg>
                </div>
              </a>
            </div>
            <div class="collapse pl-2" :class="[_.startsWith($route.path, '/participant') && 'show']" id="collapse_5">
              <div class="accordion" id="accordionExample">
                <div class="sidebar-collapse-link">
                  <h2 class="mb-0 active">
                    <div
                      @click.prevent="[goTo('/participant/tenders')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/participant/tenders') && 'active']"
                      class="nav-item-content nav-item-content-distance"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Տենդերներ
                        <span v-if="menuNotifications.unseen_tenders" class="p-1 badge badge-primary">
                          {{menuNotifications.unseen_tenders}}
                        </span>
                      </span>
                    </div>
                  </h2>
                </div>
                <div class="sidebar-collapse-link">
                  <h2 class="mb-0 active">
                    <div
                      @click.prevent="[goTo('/participant/suggestions/all')]; handleCloseMenu()"
                      :class="[_.startsWith($route.path, '/participant/suggestions/all') && 'active']"
                      class="nav-item-content nav-item-content-distance"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Առաջարկներ
                        <span v-if="menuNotifications.unseen_suggestions" class="p-1 badge badge-primary">
                          {{menuNotifications.unseen_suggestions}}
                        </span>
                      </span>
                    </div>
                  </h2>
                </div>
                <div class="sidebar-collapse-link">
                  <h2 class="mb-0">
                    <div
                      v-tooltip="userPackage !== 'Գոլդ' && 'Տվյալ հնարավորությունից օգտվելու համար անհրաժեշտ է ունենալ գոլդ փաթեթ'" 
                      @click.prevent="goldPackagePage('/participant/contract-management/requests')"
                      :class="[_.startsWith($route.path, '/participant/contract-management') && 'active', userPackage !== 'Գոլդ' && 'disabled-menu-item']"
                      class="nav-item-content nav-item-content-distance"
                      type="button" data-toggle="collapse"
                      data-target="#collapseTree"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span class="w-100">
                        Պայմանագրերի կառավարում
                        <span v-if="menuNotifications.unseen_contract_requests || menuNotifications.active_orders" class="p-1 badge badge-primary">
                          {{menuNotifications.unseen_contract_requests + menuNotifications.active_orders}}
                        </span>
                      </span>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="dropright">
              <div type="button" data-toggle="dropdown" data-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                <a style="cursor: pointer"
                  data-toggle="tooltip-custom"
                  data-placement="right"
                  id="participant"
                  data-trigger="hover"
                  data-original-title="Մասնակից"
                >
                  <div class="d-flex align-items-center justify-content-center nav-items-block">
                    <div class="sidebar-icon">
                      <svg width="24" height="18" viewBox="0 0 24 18">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1565 9.48915C18.7978 9.48915 20.8522 7.33698 20.8522 4.79349C20.8522 2.15218 18.7978 0 16.1565 0C13.5152 0 11.363 2.15218 11.363 4.69566C11.363 7.33698 13.5152 9.48915 16.1565 9.48915ZM16.1565 1.4674C17.9174 1.4674 19.3848 2.93479 19.3848 4.69566C19.3848 6.45654 17.9174 7.92393 16.1565 7.92393C14.2978 7.92393 12.8304 6.45654 12.8304 4.69566C12.8304 2.93479 14.2978 1.4674 16.1565 1.4674ZM18.7001 10.9565H13.6131C13.0262 10.9565 12.5371 11.0543 12.0479 11.1522C11.5588 11.3478 11.0697 11.5435 10.6784 11.8369C9.99357 12.3261 9.40661 12.913 9.01531 13.6956H5.39573C3.34138 13.6956 1.58051 14.8696 0.700069 16.5326C0.504417 17.0217 0.308764 17.5109 0.210938 18H1.67833C1.77616 17.413 2.06964 16.9239 2.36312 16.5326C3.0479 15.75 4.12399 15.163 5.29791 15.163H8.33052C8.2327 15.4565 8.2327 15.75 8.2327 16.1413V18H23.7871V16.1413C23.8849 13.3043 21.5371 10.9565 18.7001 10.9565ZM22.4175 16.6304H9.89575V16.2391V15.6522C9.89575 15.2221 10.2553 14.6237 10.4827 14.2826C10.5316 14.2337 10.5561 14.1848 10.5805 14.1359C10.605 14.0869 10.6294 14.038 10.6784 13.9891C10.9718 13.5978 11.2653 13.3043 11.6566 13.1087C12.0479 12.8152 12.5371 12.6196 13.0262 12.5217C13.2218 12.4239 13.5153 12.4239 13.711 12.4239H18.7979C20.8523 12.4239 22.5153 14.0869 22.5153 16.1413V16.6304H22.4175ZM10.6898 7.79349C10.6898 10.337 8.63549 12.4892 5.99417 12.4892C3.35286 12.4892 1.20068 10.337 1.20068 7.69566C1.20068 5.15218 3.35286 3 5.99417 3C8.63549 3 10.6898 5.15218 10.6898 7.79349ZM9.22244 7.69566C9.22244 5.93479 7.75505 4.46739 5.99417 4.46739C4.13547 4.46739 2.66808 5.93479 2.66808 7.69566C2.66808 9.45654 4.13547 10.9239 5.99417 10.9239C7.75505 10.9239 9.22244 9.45654 9.22244 7.69566Z" fill="#6E7485"/>
                      </svg>
                      <svg class="sidebar-dot" v-if="menuNotifications.unseen_contract_requests || menuNotifications.unseen_suggestions || menuNotifications.unseen_tenders || menuNotifications.active_orders" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="3" fill="#006BE6"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click.prevent="[goTo('/participant/tenders')]; handleCloseMenu()">
                  Տենդերներ
                  <span v-if="menuNotifications.unseen_tenders" class="p-1 badge badge-primary">
                    {{menuNotifications.unseen_tenders}}
                  </span>
                </a>
                <a class="dropdown-item" @click.prevent="[goTo('/participant/suggestions/all')]; handleCloseMenu()">
                  Առաջարկներ
                  <span v-if="menuNotifications.unseen_suggestions" class="p-1 badge badge-primary">
                    {{menuNotifications.unseen_suggestions}}
                  </span>
                </a>
                <a class="dropdown-item" v-tooltip="userPackage !== 'Գոլդ' && 'Տվյալ հնարավորությունից օգտվելու համար անհրաժեշտ է ունենալ գոլդ փաթեթ'" @click.prevent="goldPackagePage('/participant/contract-management/requests')">
                  Պայմանագրերի կառավարում
                  <span v-if="menuNotifications.unseen_contract_requests || menuNotifications.active_orders" class="p-1 badge badge-primary">
                    {{menuNotifications.unseen_contract_requests + menuNotifications.active_orders}}
                  </span>
                </a>
              </div>
            </div>
          </template>
        </div>
        <a
          @click.prevent="() => {if(userPackage === 'Գոլդ'){goTo('/analysis');handleCloseMenu()}}"
          style="cursor: pointer"
          data-toggle="tooltip-custom"
          v-tooltip="userPackage !== 'Գոլդ' && 'Տվյալ հնարավորությունից օգտվելու համար անհրաժեշտ է ունենալ գոլդ փաթեթ'"
          class="nav-items-distance"
          :class="[_.startsWith($route.path, '/analysis') && 'active-item', userPackage !== 'Գոլդ' && 'disabled-nav-item']"
          data-placement="right"
          data-trigger="hover"
          data-original-title="Դուրս գալ աշխատանքային վահանակից">
          <div class="d-flex align-items-center nav-items-block" :class="menuProps ? 'justify-content-start' : 'justify-content-center'">
            <div class="sidebar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.25H19C19.96 3.25 20.75 4.04 20.75 5V19C20.75 19.96 19.96 20.75 19 20.75H5C4.04 20.75 3.25 19.96 3.25 19V5C3.25 4.04 4.04 3.25 5 3.25ZM4.75 19.2L19.2 19.25L19.25 4.8L4.75 4.75V19.2ZM7.20996 10.21H8.75996V16.75H7.20996V10.21ZM16.7902 13.24H15.2402V16.75H16.7902V13.24ZM11.2202 7.25H12.7702V16.75H11.2202V7.25Z" fill="#6E7485"/>
              </svg>
            </div>
            <h6 class="nav-item-content" :class="menuProps ? 'd-block' : 'd-none'">
              Վիճակագրություն
              <span  class="p-1 badge badge-primary">
                Beta
              </span>
            </h6>
          </div>
        </a>
      </template>
    </nav>
  </div>
</template>

<script>
import isMobile from '@/mixins/isMobileView'
import $ from 'jquery'

export default {
  components: {  },
  mixins: [isMobile],
  props: ['innerMenuWidth'],
  computed: {
    innerMenuIsClosed() {
      return this.$store.getters['settings/innerMenuIsClosed']
    },
    menuNotifications() {
      return this.$store.getters["user/menuNotifications"];
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
    userPackage() {
      return this.$store.getters.userPackage
    },
  },
  mounted(){
    this.menuProps = !this.innerMenuIsClosed;
  },
  watch: {
    innerMenuIsClosed() {
      this.menuProps = !this.innerMenuIsClosed;
    },
  },
  methods: {
    consoleLog(data){
      console.log(data)
    },
    handleCloseMenu(){
      if(this.isMobile){
        this.$store.dispatch('settings/toggleInnerMenu')
      }
    },
    goldPackagePage(route){
      if(this.userPackage !== 'Գոլդ'){
        this.$notify({
          group: 'foo',
          type: 'info',
          text: 'Այս հնարավորությունից օգտվելու համար անհրաժեշտ է ունենալ Գոլդ փաթեթ'
        })
      } else {
        this.goTo(route)
        this.handleCloseMenu()
      }
    },
    goTo(path) {
      if(this.$route.path !== path) {
        this.$router.push({ path })
      }
    },
    openCloseMenu(){
      document.getElementsByClassName('accordion')
      $('.accordion').removeAttr("style")
      // for(var elements = document.getElementsByClassName('accordion'), i = 0, l = elements.length; l > i; i++) {
      //   console.log(elements)
      //   elements[0].style = "";
      //   elements[1].style = "";
      //   elements[2].style = "";
      //   elements[0].removeAttribute('style');
      //   elements[1].removeAttribute('style');
      //   elements[2].removeAttribute('style');
      // }
      this.$store.dispatch('settings/toggleInnerMenu')
      this.menuProps = !this.menuProps
      $('.accordion').removeAttr("style")
    }
  },
  data(){
    return{
      menuProps: false,
    }
  }
}
</script>
<style scoped>
.dropdown-menu{
  margin: 0;
  background: rgba(255, 255, 255, 1) !important;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1) !important;
  clip-path: inset(-12px -12px -12px 0);
  backdrop-filter: blur(8px) !important;
  border-radius: 0 12px 12px 0 !important;
  border: 0 !important;
  padding: 20px !important;
}
.dropdown-menu{
  padding: 10px 0 !important;
}
</style>