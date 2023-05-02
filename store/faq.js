import Vue from 'vue'

const state = {
    faq: [],
}

const getters = {
    faq: state => state.faq,
}

const actions = {
  get({ commit }) {

    // eslint-disable-next-line no-undef
    return $client.get('faq').then(response => {
      commit('setEnfo', response.data.data)    
    })
  }
}

const mutations = {
  setEnfo(state, faq) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'faq', _.clone(faq))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
