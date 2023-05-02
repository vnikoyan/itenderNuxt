import Vue from 'vue'

const state = {
    pricing: [],
}

const getters = {
    pricing: state => state.pricing,
}

const actions = {
  get({ commit }) {
    // eslint-disable-next-line no-undef
    return $client.get('package').then(response => {
      commit('setpricing', response.data.data)    
    })
  }
}

const mutations = {
  setpricing(state, pricing) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'pricing', _.clone(pricing))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
