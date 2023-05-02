import Cookie from 'cookie'
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import news from './news'
import cpv from './cpv'
import tender from './tender'
import procurement from './procurement'
import pricing from './pricing'
import info from './info'
import settings from './settings'
import organize from './organize'
import organizeOnePerson from './organizeOnePerson'
import organizeItender from './organizeItender'
import suggestions from './suggestions'
import categories from './categories'
import faq from './faq'
import protest from './protest'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// CLASSIC MODE
/*
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: ...,
    mutations: ...,
    actions: ...
}

export default createStore
*/

// MODULES MODE
export const state = () => ({
  device: {}
})

export const mutations = {
  setDevice(state, value){
    state.device = value
  }
}

// Special Nuxt method called once on app initialization (only in index)
export const actions = {
  nuxtServerInit ({ dispatch }, { req }) {
    const cookies = Cookie.parse(req.headers.cookie || '')
    const token = cookies['token'] || ''
    if (token) return dispatch('user/load', token)
  }
}

export default {
  modules: {
    auth,
    user,
    procurement,
    news,
    pricing,
    cpv,
    tender,
    info,
    settings,
    organize,
    organizeOnePerson,
    organizeItender,
    suggestions,
    categories,
    faq,
    protest
  },
  strict: debug
}