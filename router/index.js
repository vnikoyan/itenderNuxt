import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPrivate from '../pages/private/dashboard/home'
import store from '../store'
import $ from 'jquery'

Vue.use(VueRouter)

// checks if user wants to stay logged in after closing browser
window.onbeforeunload = function (event) {
  // if (!store.getters.rememberMe) {
  //   store.dispatch('logout')
  // }
}

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/dashboard')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const ifAuthenticatedPrivate = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    if (store.getters.userType === "USER") {
      if (+store.getters.firstLogin === 1 && to.path !== '/category') {
        next('/category')
        return
      } else {
        next()
        return
      }
    } else{
      next('/organizing')
      return
    }
  }
  next('/login')
}

const ifAuthenticatedState = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    if (store.getters.userType === "STATE") {
      next()
      return
    }
    next('/dashboard')
  }
  next('/login')
}

const ifHasPackage = (to, from, next) => {
  if (store.getters.userPackage === 'Էկոնոմ') {
    next('/organizing/oneperson')
  } else if (store.getters.userPackage === 'Անվճար') {
    next('/')
  } else {
    next()
  }

  // if (store.getters.isAuthenticated) {
  //   if (store.getters.userType === "STATE" && store.getters.userPackage !== 'Էկոնոմ') {
  //     return
  //   }
  //   console.log('here')
  //   // next('/dashboard')
  // }
  // next('/login')
}


const routes = [
  {
    path: '/login',
    name: [ 'Մուտք' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/login'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/forgot/password/:passwordToken',
    name: [ 'Տենդերների կայք' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/Home'),
  },
  {
    path: '/signup',
    name: [ 'Գրանցում համակարգում' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/signup/signupChoice'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/signup/:type',
    name: [ 'Գրանցում համակարգում' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/signup'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/user/account',
    name: [ 'Տենդերների կայք' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/Home'),
  },
  {
    path: '/user/account/activate/:token',
    name: [ 'Տենդերների կայք' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/Home'),
  },
  {
    path: '/user/unsubscribe/:useremail',
    name: [ 'Տենդերների կայք' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/Home'),
  },
  {
    path: '/',
    name: [ 'Տենդերների կայք' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/Home'),
  },
  {
    path: '/tender',
    name: [ 'Այս պահի ակտիվ տենդերները' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/Tenders')
  },
  {
    path: '/packages',
    name: [ 'Packages' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/details/index')
  },
  {
    path: '/packages/:type',
    name: [ 'Տենդերների բաժանորդագրում և փաթեթներ' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/details/index')
  },
  {
    path: '/new/:id',
    name: [  ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/News')
  },
  {
    path: '/info',
    name: [ 'Info' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/Info')
  },
  {
    path: '/regulation',
    name: [ 'Տենդեր կազմակերպելու և մասնակցության կանոնակարգ' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/regulation')
  },
  {
    path: '/help',
    name: [ 'Տենդեր օգնություն' ],
    meta: { layout: () => import('../layouts/landing/main') },
    component: () => import('../pages/landing/Help')
  },
  {
    path: '/user',
    name: [ 'Պրոֆիլ' ],
    meta: { layout: () => import('../layouts/dashboard/main'), },
    component: () => import('../pages/state/dashboard/user'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/settings',
    name: [ 'Անձնական տվյալներ' ],
    meta: { layout: () => import('../layouts/dashboard/main'), },
    component: () => import('../pages/private/dashboard/settings'),
    beforeEnter: ifAuthenticated
  },
  // {
  //   path: '/dashboard',
  //   name: [ 'Գլխավոր' ],
  //   component:  () => import('../pages/state/organizing'),
  //   meta: { layout: () => import('../layouts/dashboard/main') },
  //   beforeEnter: ifAuthenticatedState
  // },
  {
    path: '/dashboard',
    name: [ 'Գլխավոր' ],
    component: DashboardPrivate,
    meta: { layout: () => import('../layouts/dashboard/main') },
    beforeEnter: ifAuthenticatedPrivate
  },
  // -------- State User ------------
  {
    path: '/planning',
    component: () => import('../pages/state/planning/index'),
    beforeEnter: ifAuthenticatedState,
    children: [
      {
        path: '',
        redirect: 'list'
      },
      {
        path: 'list',
        name: [ 'Գնումների պլան' ],
        meta: { layout: () => import('../layouts/dashboard/main'), },
        component: () => import('../pages/state/planning/list')
      },
      {
        path: 'responsible-unit',
        name: [ 'Պատասխանատու ստորաբաժանում' ],
        meta: { layout: () => import('../layouts/dashboard/main'), },
        component: () => import('../pages/state/planning/responsible_unit')
      },
      {
        path: '*', redirect: 'list'
      },
    ]
  },
  {
    path: '/organizing',
    component: () => import('../pages/state/organizing'),
    beforeEnter: ifAuthenticatedState,
    children: [
      {
        path: 'competitive',
        name: [ 'Կազմակերպում', 'Պետական մրցակցային' ],
        component: () => import('../pages/state/organizing'),
        beforeEnter: ifHasPackage,
        children: [
          {
            path: 'prepare-invitation/:id',
            name: [ 'Կազմակերպում', 'Պետական մրցակցային', 'Հրավերի պատրաստում' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/state/organizing/competitive/prepare-invitation'),
          },
          {
            path: 'application-evaluation/:id',
            name: [ 'Կազմակերպում', 'Պետական մրցակցային', 'Հայտերի գնահատում' ],
            meta: { layout: () => import('../layouts/dashboard/main') },
            component: () => import('../pages/state/organizing/competitive/application-evaluation'),
          },
          {
            path: 'contract-preparation/:id',
            name: [ 'Կազմակերպում', 'Պետական մրցակցային', 'Պայմանագրի պատրաստում' ],
            meta: { layout: () => import('../layouts/dashboard/main') },
            component: () => import('../pages/state/organizing/competitive/contract-preparation'),
          },
          {
            path: '',
            name: [ 'Կազմակերպում', 'Պետական մրցակցային' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/state/organizing/competitive'),
          },
        ]
      },
      {
        path: 'oneperson',
        name: [ 'Կազմակերպում', 'Պետական մեկ անձ' ],
        component: () => import('../pages/state/organizing'),
        children: [
          {
            path: 'prepare-invitation/:id',
            name: [ 'Կազմակերպում', 'Պետական մեկ անձ', 'Հայտարարությունների պատրաստում' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/state/organizing/onePerson/prepare-invitation'),
          },
          {
            path: 'contract-preparation/:id',
            name: [ 'Կազմակերպում', 'Պետական մեկ անձ', 'Պայմանագրի պատրաստում' ],
            meta: { layout: () => import('../layouts/dashboard/main') },
            component: () => import('../pages/state/organizing/onePerson/contract-preparation'),
          },
          {
            path: '',
            name: [ 'Կազմակերպում', 'Պետական մեկ անձ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/state/organizing/onePerson'),
          },
        ]
      },
      {
        path: '', redirect: 'competitive'
      },
      {
        path: '*', redirect: 'competitive'
      },
    ],
  },
  {
    path: '/contractmanagement',
    component: () => import('../pages/state/planning/index'),
    beforeEnter: ifAuthenticatedState,
    children: [
      {
        path: '',
        redirect: 'contracts'
      },
      {
        path: 'contracts',
        name: [ 'Պայմանագրի կառավարում', 'Պայմանագրեր' ],
        meta: { layout: () => import('../layouts/dashboard/main'), },
        component: () => import('../pages/state/contractManagement/contracts'),
      },
      {
        path: 'contracts/:id',
        name: [ 'Պայմանագրի կառավարում', 'Պայմանագրեր' ],
        meta: { layout: () => import('../layouts/dashboard/main'), },
        component: () => import('../pages/state/contractManagement/contracts'),
      },
      {
        path: 'suppliers',
        name: [ 'Պայմանագրի կառավարում', 'Մատակարարներ' ],
        meta: { layout: () => import('../layouts/dashboard/main'), },
        component: () => import('../pages/state/contractManagement/suppliers'),
      },
      {
        path: 'purchasing-items',
        name: [ 'Պայմանագրի կառավարում', 'Գնման առարկաներ' ],
        meta: { layout: () => import('../layouts/dashboard/main'), },
        component: () => import('../pages/state/contractManagement/purchasing-items'),
      },
      {
        path: 'orders',
        component: () => import('../pages/state/planning/index'),
        children: [
          {
            path: '',
            redirect: 'all'
          },
          {
            path: 'active',
            name: [ 'Պատվերներ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/state/contractManagement/orders/active')
          },
          {
            path: 'finished',
            name: [ 'Պատվերներ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/state/contractManagement/orders/finished')
          },
          {
            path: 'canceled',
            name: [ 'Պատվերներ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/state/contractManagement/orders/canceled')
          }
        ],
      },
    ],
  },
  // -------- Private User ------------
  {
    path: '/guide/:guideId',
    name: [ 'Ուղեցույց' ],
    meta: { layout: () => import('../layouts/dashboard/main') },
    component: () => import('../pages/private/guide'),
    beforeEnter: ifAuthenticatedPrivate
  },
  {
    path: '/category',
    name: [ 'Ընտրեք Կատեգորիա' ],
    meta: { layout: () => import('../layouts/dashboard/main') },
    component: () => import('../pages/private/category'),
    beforeEnter: ifAuthenticatedPrivate
  },
  {
    path: '/organizator',
    component: () => import('../pages/state/planning/index'),
    beforeEnter: ifAuthenticatedPrivate,
    children: [
      {
        path: '',
        redirect: 'itender'
      },
      {
        path: 'tenders',
        component: () => import('../pages/state/planning/index'),
        children: [
          {
            path: '',
            redirect: 'list'
          },
          {
            path: 'list',
            name: [ 'Մրցույթ', 'Մրցույթներ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/organizator/tenders')
          },
          {
            path: 'add',
            name: [ 'Մրցույթ', 'Ավելացնել մրցույթ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/organizator/addTender')
          },
          {
            path: 'edit/:tenderId',
            name: [ 'Մրցույթ', 'Խմբագրել մրցույթներ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/organizator/addTender')
          }
        ],
      },
      {
        path: 'itender',
        component: () => import('../pages/state/planning/index'),
        children: [
          {
            path: 'prepare-invitation/:id',
            name: [ 'Կազմակերպում', 'iTender մրցույթ', 'Հայտարարությունների պատրաստում' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/organizator/itender/prepare-invitation'),
          },
          {
            path: 'contract-preparation/:id',
            name: [ 'Կազմակերպում', 'iTender մրցույթ', 'Պայմանագրի պատրաստում' ],
            meta: { layout: () => import('../layouts/dashboard/main') },
            component: () => import('../pages/private/organizator/itender/contract-preparation'),
          },
          {
            path: '',
            name: [ 'Կազմակերպում', 'iTender մրցույթ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/organizator/itender')
          },
        ],
      },
      {
        path: 'contract-management',
        component: () => import('../pages/state/planning/index'),
        children: [
          {
            path: '',
            redirect: 'contracts'
          },
          {
            path: 'contracts',
            name: [ 'Պայմանագրի կառավարում', 'Պայմանագրեր' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/contractManagement/contracts/client'),
          },
          {
            path: 'contracts/:id',
            name: [ 'Պայմանագրի կառավարում', 'Պայմանագրեր' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/contractManagement/contracts/client'),
          },
          {
            path: 'orders',
            component: () => import('../pages/state/planning/index'),
            children: [
              {
                path: '',
                redirect: 'all'
              },
              {
                path: 'active',
                name: [ 'Պատվերներ', 'Ընթացքի մեջ' ],
                meta: { layout: () => import('../layouts/dashboard/main'), },
                component: () => import('../pages/private/contractManagement/myOrders/active')
              },
              {
                path: 'finished',
                name: [ 'Պատվերներ', 'Ավարտված' ],
                meta: { layout: () => import('../layouts/dashboard/main'), },
                component: () => import('../pages/private/contractManagement/myOrders/finished')
              },
              {
                path: 'canceled',
                name: [ 'Պատվերներ', 'Չկատարված' ],
                meta: { layout: () => import('../layouts/dashboard/main'), },
                component: () => import('../pages/private/contractManagement/myOrders/canceled')
              }
            ],
          },
        ],
      },
      {
        path: '*', redirect: 'tenders'
      },
    ]
  },
  {
    path: '/analysis',
    name: [ 'Վիճակագրություն' ],
    meta: { layout: () => import('../layouts/dashboard/main'), },
    component: () => import('../pages/private/analysis'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/participant',
    component: () => import('../pages/state/planning/index'),
    beforeEnter: ifAuthenticatedPrivate,
    children: [
      {
        path: '',
        redirect: 'tenders'
      },
      {
        path: 'tenders',
        name: [ 'Տենդերներ' ],
        meta: { layout: () => import('../layouts/dashboard/main'), },
        component: () => import('../pages/private/participant/tenders')
      },
      {
        path: 'suggestions',
        component: () => import('../pages/state/planning/index'),
        children: [
          {
            path: '',
            redirect: 'all'
          },
          {
            path: 'all',
            name: [ 'Առաջարկներ', 'Ստացված առաջարկներ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/participant/suggestions/all')
          },
          {
            path: 'accepted',
            name: [ 'Առաջարկներ', 'Ներկայացված առաջարկներ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/participant/suggestions/accepted')
          },
          {
            path: 'signature',
            name: [ 'Առաջարկներ', 'Սևագրեր' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/participant/suggestions/signature')
          }
        ],
      },
      {
        path: 'requests',
        name: [ 'Ստացված հարցումներ' ],
        meta: { layout: () => import('../layouts/dashboard/main'), },
        component: () => import('../pages/private/participant/requests')
      },
      {
        path: 'contract-management',
        component: () => import('../pages/state/planning/index'),
        children: [
          {
            path: '',
            redirect: 'contracts'
          },
          {
            path: 'requests',
            name: [ 'Պայմանագիր', 'Պայմանագրի առաջարկ' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/participant/contract/requests')
          },
          {
            path: 'contracts',
            name: [ 'Պայմանագրի կառավարում', 'Պայմանագրեր' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/contractManagement/contracts/provider'),
          },
          {
            path: 'contracts/:id',
            name: [ 'Պայմանագրի կառավարում', 'Պայմանագրեր' ],
            meta: { layout: () => import('../layouts/dashboard/main'), },
            component: () => import('../pages/private/contractManagement/contracts/provider'),
          },
          {
            path: 'orders',
            component: () => import('../pages/state/planning/index'),
            children: [
              {
                path: '',
                redirect: 'all'
              },
              {
                path: 'active',
                name: [ 'Պատվերներ', 'Ընթացքի մեջ' ],
                meta: { layout: () => import('../layouts/dashboard/main'), },
                component: () => import('../pages/private/contractManagement/orders/active')
              },
              {
                path: 'finished',
                name: [ 'Պատվերներ', 'Ավարտված' ],
                meta: { layout: () => import('../layouts/dashboard/main'), },
                component: () => import('../pages/private/contractManagement/orders/finished')
              },
              {
                path: 'canceled',
                name: [ 'Պատվերներ', 'Չկատարված' ],
                meta: { layout: () => import('../layouts/dashboard/main'), },
                component: () => import('../pages/private/contractManagement/orders/canceled')
              }
            ],
          },
        ],
      },
      {
        path: '*', redirect: 'tenders'
      },
    ]
  },
  // ----------------------------------
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
       return $('html,body').stop().animate({scrollTop: $(to.hash).offset().top }, 1000);
    } else {
       return $('html,body').stop().animate({scrollTop: 0 }, 500);
    }
 }
})

// const DEFAULT_TITLE = 'iTender';
// router.afterEach((to, from) => {
//     // Use next tick to handle router history correctly
//     // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
//     Vue.nextTick(() => {
//         document.title = to.name.length ? `${to.name[to.name.length - 1]} | itender.am` : DEFAULT_TITLE;
//     });
// });

export default router
