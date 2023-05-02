import Vue from 'vue'
// import router from '../router'

const state = {
  organizedProcurements: [],
  currentOrganized: {},
  organizedRows: [],
  allOrganizes: [],
  allData: {},
  percents: {},
  organizeLoading: false,
}

const getters = {
  organizedProcurements: (state) => state.organizedProcurements,
  currentOrganized: (state) => state.currentOrganized,
  organizedRows: (state) => state.organizedRows,
  allOrganizes: (state) => state.allOrganizes,
  allData: (state) => state.allData,
  lotPercents: (state) => state.percents,
  organizeLoading: (state) => state.organizeLoading,
}

const actions = {
  storeLotPercents( { commit }, data){
    commit('setLotPercents', data)
  },
  create({ dispatch, rootGetters}, type) {
    return $client.post('organize/itender', {
      is_itender: true,
      procurement_id: rootGetters['procurement/currentPlan'] ? rootGetters['procurement/currentPlan'].id : 0,
      cpv_type: type
    })
  },
  update({ dispatch, commit }, {id, data}) {
    return $client.put(`organize/itender/${id}`, data).then(({data}) => {
      commit('setCurrentOrganized', data.data)
      return true
    })
  },
  getAll({ commit }) {
    // eslint-disable-next-line no-undef
    return $client.get('organize/itender/get').then(response => {
      commit('setAllOrganizes', response.data) 
    })
  },
  getCurrent({ commit }, organizeId) {
    // eslint-disable-next-line no-undef
    commit('setLoading', true)

    return $client.get(`organize/itender/${organizeId}`).then(({data}) => {
      // if(!data.data.winner_by_lots && data.data.winners.length){
      //   data.data.winners[0].won_lots = [...data.data.organize_rows]
      // }
      data.data.winners.forEach((winner) => {
        winner.won_lots = Object.values(winner.won_lots)
      })
      commit('setCurrentOrganized', data.data)
      commit('setLoading', false)
      return data
    }).catch(e => {
      console.log(e)
      commit('setLoading', false)

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
      response.data.data.forEach(element => {
        element.participantsList = element.participantsList.sort((a, b) => a.current_price_vat - b.current_price_vat).sort((a, b) => b.winner - a.winner);
        element.winners = element.participantsList.filter(item => item.winner);
        element.participants = element.participants.sort((a, b) => b.winner - a.winner);
        element.satisfactory_participants = element.participants.filter((item) => item.is_satisfactory);
        element.participants = element.participants.sort((a, b) => a.value - b.value)
      });
      commit('setOrganizedRows', response.data.data)
      return response
    })
  },
  getAllByUser({ commit }) {
    return $client.get('organize/itender/getByUser').then(response => {
      commit('setOrganizedProcurements', response.data.data)
      return response
    })
  },
  async getAllData({ commit }, organizeId) {
    const response = await $client.get(`organize/itender/getAllData/${organizeId}`)
    return new Promise((resolve => {
      resolve(response.data)
    }))
  }
}

const mutations = {
  setLotPercents(state, lotPercents) {
    Vue.set(state, 'percents', _.clone(lotPercents))
  },
  setLoading(state, organizeLoading) {
    Vue.set(state, 'organizeLoading', _.clone(organizeLoading))
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
