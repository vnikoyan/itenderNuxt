import Vue from 'vue'

const state = {
  units: [],
  financialClassifiers: [],
  classifiers: [],
  innerMenuIsClosed: (typeof window !== 'undefined') ? JSON.parse(localStorage.getItem('innerMenuIsClosed')) !== null ?
    JSON.parse(localStorage.getItem('innerMenuIsClosed')) : false : false
}

const getters = {
  units: state => state.units,
  financialClassifiers: state => state.financialClassifiers,
  classifiers: state => state.classifiers,
  innerMenuIsClosed: state => state.innerMenuIsClosed
}

const actions = {
  getUnits({ commit }) {
    // eslint-disable-next-line no-undef
    return $client.get('units').then(response => {
      commit('setUnits', response.data.data)
    })
  },
  getClassifier({ commit }, cpvId) {
    // eslint-disable-next-line no-undef
    return $client.get(`classifier${cpvId}`)
  },
  getFinancialClassifiers({ commit }) {
    // eslint-disable-next-line no-undef
    return $client.get('financialClassifier').then(response => {
      commit('setFinancialClassifiers', response.data.data)
      return response
    })
  },
  getClassifiers({ commit }) {
    // eslint-disable-next-line no-undef
    return $client.get('classifier').then((response) => {
        commit('setClassifiers', response.data.data)
        return response
    })
  },
  closeInnerMenu({ commit, getters }) {
    const innerMenuStatus = true
    commit('setInnerMenuStatus', innerMenuStatus)
    localStorage.setItem('innerMenuIsClosed', JSON.stringify(innerMenuStatus))
  },
  toggleInnerMenu({ commit, getters }) {
    const innerMenuStatus = !getters.innerMenuIsClosed
    commit('setInnerMenuStatus', innerMenuStatus)
    localStorage.setItem('innerMenuIsClosed', JSON.stringify(innerMenuStatus))
  }
}

const mutations = {
  setUnits(state, units) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'units', _.clone(units))
  },
  setFinancialClassifiers(state, financialClassifiers) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'financialClassifiers', _.clone(financialClassifiers))
  },
  setClassifiers(state, classifiers) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'classifiers', _.clone(classifiers))
  },
  setInnerMenuStatus(state, status) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'innerMenuIsClosed', _.clone(status))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
