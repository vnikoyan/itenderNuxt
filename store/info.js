import Vue from 'vue'

const state = {
    info: [],
}

const getters = {
    info: state => state.info,
}

const actions = {
  get({ commit }) {

    // eslint-disable-next-line no-undef
    return $client.get('info').then(response => {
      commit('setEnfo', response.data.data)    
    })
  }
}

const mutations = {
  setEnfo(state, info) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'info', _.clone(info))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
