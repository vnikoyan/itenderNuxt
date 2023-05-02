import Vue from 'vue'
// import router from '../router'

const state = {
  organizedProcurements: [],
  currentOrganized: {},
  organizedRows: [],
  allOrganizes: [],
  allData: {}
}

const getters = {
  organizedProcurements: (state) => state.organizedProcurements,
  currentOrganized: (state) => state.currentOrganized,
  organizedRows: (state) => state.organizedRows,
  allOrganizes: (state) => state.allOrganizes,
  allData: (state) => state.allData,
}

const actions = {
  create({ dispatch, rootGetters}, data) {
    return $client.post('suggestions', data)
  },
  update({ commit }, {id, data}) {
    // eslint-disable-next-line no-undef
    return $client.put(`suggestions/${id}`, data).then(({data}) => {
      return data.status
    })
  },
  cancel({ commit }, {id}) {
    // eslint-disable-next-line no-undef
    return $client.post(`suggestions/cancel/${id}`).then(({data}) => {
      return data.status
    })
  },
  getAll({ commit }) {
    // eslint-disable-next-line no-undef
    return $client.get('organize/oneperson/get').then(response => {
      commit('setAllOrganizes', response.data) 
    })
  },
  getCurrent({ commit }, organizeId) {
    // eslint-disable-next-line no-undef
    return $client.get(`organize/oneperson/${organizeId}`).then(response => {
      commit('setCurrentOrganized', response.data.data)
      return response
    }).catch(e => {
      if(e.status === 404) {
        router.push('/organizing')
      }
    })
  },
  getRows({ commit }, payload) {
    // eslint-disable-next-line no-undef
    return $client.get(`organize-row/getByOrganize/${payload.organizeId}`, {
      params: {
        page: payload.page || 1
      }
    }).then(response => {
      // console.log('start', response.data.data)
      // var rows = [];
      // response.data.data.forEach((lot) => {
      //   $client.get(`participant-row/getWinnerByOrganizeRowId/${lot.id}`).then(response => {
      //     const results = response.data;
      //     console.log(results)
      //     if(results.length){
      //       const comparisonResultObj = {participants: results, winners: results.filter(item => item.winner)}
      //       const currentLot = {...comparisonResultObj, ...lot}
      //       rows.push(currentLot)
      //     } 
      //   })
      // });
      // console.log('end', rows)
      commit('setOrganizedRows', response.data.data)
      return response
    })
  },
  getAllByUser({ commit }) {
    // eslint-disable-next-line no-undef
    return $client.get('organize/oneperson/getByUser').then(response => {
      commit('setOrganizedProcurements', response.data.data)
      return response
    })
  },
  async getAllData({ commit }, organizeId) {
    // eslint-disable-next-line no-undef
    const response = await $client.get(`organize/oneperson/getAllData/${organizeId}`)
    return new Promise((resolve => {
      resolve(response.data)
    }))
  }
}

const mutations = {
  setCurrentOrganized(state, organizedProcurement) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'currentOrganized', _.clone(organizedProcurement))
  },
  setOrganizedRows(state, rows) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'organizedRows', _.clone(rows))
  },
  setOrganizedProcurements(state, procurements) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'organizedProcurements', _.clone(procurements))
  },
  setAllOrganizes(state, organizes) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'allOrganizes', _.clone(organizes))
  },
  setOrganizedAllData(state, allData) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'allData', _.clone(allData))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
