import Vue from 'vue'

const state = {
    protest: [],
}

const getters = {
    protest: state => state.protest,
}

const actions = {
  get({ commit }) {

    // eslint-disable-next-line no-undef
    return $client.get('protest').then(response => {
      commit('setEnfo', response.data.data)    
    })
  }
}

const mutations = {
  setEnfo(state, protest) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'protest', _.clone(protest))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
