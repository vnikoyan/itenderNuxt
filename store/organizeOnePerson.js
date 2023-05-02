import Vue from 'vue'
// import router from '../router'

const state = {
  organizedProcurements: [],
  currentOrganized: {},
  organizedRows: [],
  allOrganizes: [],
  allData: {},
  percents: {}
}

const getters = {
  organizedProcurements: (state) => state.organizedProcurements,
  currentOrganized: (state) => state.currentOrganized,
  organizedRows: (state) => state.organizedRows,
  allOrganizes: (state) => state.allOrganizes,
  allData: (state) => state.allData,
  lotPercents: (state) => state.percents,
}

const actions = {
  storeLotPercents( { commit }, data){
    commit('setLotPercents', data)
  },
  create({ dispatch, rootGetters}, type) {
    return $client.post('organize/oneperson', {
      is_one_person: true,
      procurement_id: rootGetters['procurement/currentPlan'] ? rootGetters['procurement/currentPlan'].id : 0,
      cpv_type: type
    })
  },
  update({ dispatch, commit }, {id, data}) {
    return $client.put(`organize/oneperson/${id}`, data).then(({data}) => {
      commit('setCurrentOrganized', data.data)
      return true
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
    return $client.get(`organize/oneperson/${organizeId}`).then(({data}) => {
      if(!data.data.winner_by_lots && data.data.winners.length){
        data.data.winners[0].won_lots = [...data.data.organize_rows]
      }
      data.data.winners.forEach((winner) => {
        winner.won_lots = Object.values(winner.won_lots)
      })
      commit('setCurrentOrganized', data.data)
      return data
    }).catch(e => {
      console.log(e)
      // if(e.status === 404) {
      //   router.push('/organizing')
      // }
    })
  },
  getRows({ commit }, payload) {
    return $client.get(`organize-row/getByOrganize/${payload.organizeId}`).then(response => {
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
    return $client.get('organize/oneperson/getByUser').then(response => {
      commit('setOrganizedProcurements', response.data.data)
      return response
    })
  },
  async getAllData({ commit }, organizeId) {
    const response = await $client.get(`organize/oneperson/getAllData/${organizeId}`)
    return new Promise((resolve => {
      resolve(response.data)
    }))
  }
}

const mutations = {
  setLotPercents(state, lotPercents) {
    Vue.set(state, 'percents', _.clone(lotPercents))
  },
  setCurrentOrganized(state, organizedProcurement) {
    Vue.set(state, 'currentOrganized', _.clone(organizedProcurement))
  },
  setOrganizedRows(state, rows) {
    Vue.set(state, 'organizedRows', _.clone(rows))
  },
  setOrganizedProcurements(state, procurements) {
    Vue.set(state, 'organizedProcurements', _.clone(procurements))
  },
  setAllOrganizes(state, organizes) {
    Vue.set(state, 'allOrganizes', _.clone(organizes))
  },
  setOrganizedAllData(state, allData) {
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
