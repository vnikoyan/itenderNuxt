const routes = [
    {
      path: '/',
      component: '@/pages/index.vue'
    },
    {
        path: '/EEEE',
        component: '@/pages/about.vue'
    },
    {
      path: '/about',
      component: '@/pages/about.vue'
    },
    {
      path: '*',
      component: '@/pages/404.vue'
    }
  ]
  
  export default routes