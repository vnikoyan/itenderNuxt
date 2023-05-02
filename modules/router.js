import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const AboutUs = () => import('~/pages/about-us').then(m => m.default || m)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/about-us',
        name: 'about_us',
        component: AboutUs,
        alias: [
          '/qui-sommes-nous',
          '/quienes-somos'
        ]
      }
    ]
  })
}