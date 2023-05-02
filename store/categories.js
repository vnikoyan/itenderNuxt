import Vue from 'vue'
// import axios from 'axios'

const state = {
  cpvTypedObj: {},
  cpvSpecifications: {},
}

const getters = {
  cpvsByType: state => (type) => state.cpvTypedObj[type],
  cpvSpecifications: state => state.cpvSpecifications,
}

const actions = {
  async getByType({ commit, getters }, type) {
    let cpvs = getters.cpvsByType(type)
    if(!cpvs) {
      // eslint-disable-next-line no-undef
      const response = await $client.get(`categories/${type}`)
      cpvs = response.data.data
    }
    commit('setCpvsByType', {type, cpvs })
    return new Promise((resolve, reject) => {
      resolve(cpvs)
    })
  },
  search({ commit }, searchQuery) {
    // eslint-disable-next-line no-undef
    return $client.get('categories/search', { params: {q: searchQuery} })
  },
  getById({ commit, rootGetters }, payload) {
    // eslint-disable-next-line no-undef
    return $client.get(`categories/get_by_id/${payload.id}`).then(({ data }) => {
      // commit('fillChildren', {cpv: data.data, type: payload.type})
      return data.data
    })
  },
}

const mutations = {
  setCpvsByType(state, payload) {
    // eslint-disable-next-line no-undef
    const cpvTypedObj = _.cloneDeep(state.cpvTypedObj)
    cpvTypedObj[payload.type] = payload.cpvs
    Vue.set(state, 'cpvTypedObj', cpvTypedObj)
  },
  fillChildren(state, payload) {
    // eslint-disable-next-line no-undef
    const cpvTypedObj = _.cloneDeep(state.cpvTypedObj)
    const found = cpvTypedObj[payload.type].find(cpv => cpv.id === payload.cpv.id)
    found.children = payload.cpv.children
    Vue.set(state, 'cpvTypedObj', cpvTypedObj)
  },
  setCpvSpecifications(state, specs) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'cpvSpecifications', _.clone(specs))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
