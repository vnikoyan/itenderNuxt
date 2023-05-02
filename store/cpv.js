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
      const response = await $client.get(`cpv/${type}`)
      cpvs = response.data.data
    }
    commit('setCpvsByType', {type, cpvs })
    return new Promise((resolve, reject) => {
      resolve(cpvs)
    })
  },
  search({ commit }, searchQuery) {
    // eslint-disable-next-line no-undef
    return $client.get('cpv/search', { params: {q: searchQuery} })
  },
  getById({ commit, rootGetters }, payload) {
    // eslint-disable-next-line no-undef
    return $client.get(`cpv/get_by_id/${payload.id}`).then(({ data }) => {
      // commit('fillChildren', {cpv: data.data, type: payload.type})
      return data.data
    })
  },
  getSpecifications({ commit }, cpvIds) {
    // eslint-disable-next-line no-undef
    return $client.post('cpv/getCpvByIds', {ids: cpvIds}).then(response => {
      return response.data.data.map(cpv => {
        // return {
        //   cpv_id: cpv.id,
        //   code: cpv.code,
        //   name: cpv.name,
        //   cpv_drop: 1,
        //   cpv_type: Number(cpv.type),
        //   unit: cpv.unit,
        //   specifications: cpv.specifications,
        //   specifications_id: null,
        //   count: 1,
        //   unit_amount: 1,
        //   count_from_outside: 0,
        //   type: 1,
        //   classifier_cpv: cpv.classifier_cpv,
        //   financial_classifier_id: null,
        //   classifier_id: null,
        //   user_id: null,
        //   date: new Date().toJSON().slice(0, 10),
        //   is_condition: 0,
        // }
        return {
          cpv_id: cpv.id,
          code: cpv.code,
          name: cpv.name,
          cpv_drop: 1,
          cpv_type: Number(cpv.type),
          user_id: null,
          is_condition: 0,
          unit: cpv.unit,
          specifications: cpv.specifications,
          specifications_id: null,
          plan_details: [{
            count: 1,
            date: new Date().toJSON().slice(0, 10),
            unit_amount: 1,
            out_count: 0,
            type: 1,
            classifier_cpv: cpv.classifier_cpv,
            financial_classifier: null,
            classifier: null,
            financial_classifier_id: null,
            classifier_id: null,
          }],
        }
      })
    })
  },
  createSpecification({ commit }, payload) {
    // eslint-disable-next-line no-undef
    return $client.post(`cpv/specifications/${payload.cpvId}`, payload.spec)
    .then(response => {
      return response
    })
  },
  getSpecification({ commit }, cpvId) {
    // eslint-disable-next-line no-undef
    return $client.get(`cpv/specifications/${cpvId}`).then(response => {
      return response
    })
  }
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
