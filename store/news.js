import Vue from 'vue'

const state = {
    event: [],
    eventShow: [],
}

const getters = {
    event: state => state.event,
    eventShow: state => state.eventShow,
}

const actions = {
  get({ commit }, params) {
    // eslint-disable-next-line no-undef
    if (typeof window !== 'undefined') {
      return $client.get('event', { params }).then(response => {
        commit('setEvent', response.data.data)    
      })
    }
  },
  show({commit, rootGetters},id) {
    // eslint-disable-next-line no-undef
    return $client.get('event/'+id).then(response => {
      commit('setEventShow', response.data.data)    
    })
  }
}

const mutations = {
  setEvent(state, event) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'event', _.clone(event))
  },
  setEventShow(state, event) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'eventShow', _.clone(event))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
