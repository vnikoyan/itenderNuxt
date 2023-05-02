import Vue from 'vue'

const state = {
  procurementPlans: [],
  currentPlan: {},
  history: null
}

const getters = {
  procurementPlans: state => state.procurementPlans,
  currentPlan: state => state.currentPlan,
  history: state => state.history
}

const actions = {
  getPlans({ dispatch, commit }, newCreatedId = null ) {
    // eslint-disable-next-line no-undef
    return $client.get('procurement').then(response => {
      commit('setProcurementPlans', response.data.data)
      let currentPlan = {} 
      if(newCreatedId) {
        currentPlan = response.data.data.find(plan => plan.id === newCreatedId)
      } else {
        currentPlan = response.data.data.find(plan => plan.year === new Date().getFullYear())
      }
      dispatch('setCurrentPlan', currentPlan)
    })
  },
  setCurrentPlan({ commit }, plan) {
    commit('setCurrentPlan', plan)
  }, 
  storeProcurements({ commit }, payload) {
    // const procurementsObj = {}
    // payload.procurementArr.forEach((procurement) => {
    //   const compareKey = [
    //       procurement.cpv_id,
    //       procurement.is_condition,
    //       procurement.specifications_id,
    //   ].join('_')
    //   if (procurementsObj[compareKey]) {
    //     const sameClassifierIndex = procurementsObj[compareKey].plan_details
    //       .findIndex(detailObj => detailObj.classifier_id === procurement.classifier_id)
    //     const sameFinancialClassifierIndex = procurementsObj[compareKey].plan_details
    //       .findIndex(detailObj => detailObj.financial_classifier_id === procurement.financial_classifier_id)
    //     if (sameClassifierIndex < 0 || sameFinancialClassifierIndex < 0) {
    //       procurementsObj[compareKey].plan_details.push({
    //         count: procurement.count,
    //         unit_amount: procurement.unit_amount,
    //         type: procurement.type,
    //         classifier_id: procurement.classifier_id || 1,
    //         unit: procurement.unit,
    //         financial_classifier_id: procurement.financial_classifier_id,
    //         budget_type: procurement.budgetType,
    //       })
    //     }
    //   } else {
    //     procurementsObj[compareKey] = {
    //       cpv_id: procurement.cpv_id,
    //       cpv_drop: procurement.code,
    //       cpv_type: procurement.cpv_type,
    //       specifications_id: procurement.specifications_id,
    //       user_id: procurement.user_id,
    //       date: procurement.date,
    //       is_condition: procurement.is_condition,
    //       plan_details: [{
    //         count: procurement.count,
    //         unit_amount: procurement.unit_amount,
    //         type: procurement.type,
    //         classifier_id: procurement.classifier_id || 1,
    //         unit: procurement.unit,
    //         financial_classifier_id: procurement.financial_classifier_id,
    //         budget_type: procurement.budgetType,
    //       }],
    //     }
    //   }
    // })

    // eslint-disable-next-line no-undef
    return $client.post('procurement-plan', {
      procurement_id: payload.procurementId,
      procurement: payload.procurementArr,
    })
  },
  update({ dispatch, commit }, payload) {
    // const data = {
    //   cpv_id: procurement.cpv_id,
    //   cpv_drop: procurement.cpv_drop,
    //   cpv_type: procurement.cpv.type,
    //   unit: procurement.unit,
    //   specifications_id: procurement.specifications_id,
    //   count: procurement.count,
    //   unit_amount: procurement.unit_amount,
    //   type: procurement.type,
    //   classifier_id: 1,
    //   user_id: procurement.user_id,
    //   date: procurement.date,
    //   is_condition: procurement.is_condition,
    // }
    // eslint-disable-next-line no-undef
    return $client.put('procurement-plan/' + payload.rowId, payload.data)
  },
  updateDetails({ commit }, payload) {
    // eslint-disable-next-line no-undef
    return $client.put(`procurement-plan/editDetails/${payload.detailsId}`, payload.data)
  },
  approveRow({ dispatch, commit }, rowId) {
    return dispatch('setRowStatus', {rowId, status: 1})
  },
  restoreRow({ dispatch, commit }, rowId) {
    return dispatch('setRowStatus', {rowId, status: 2})
  },
  deleteRow({ dispatch, commit }, rowId) {
    return dispatch('setRowStatus', {rowId, status: 3})
  },
  setRowStatus({ commit }, payload) {
    // eslint-disable-next-line no-undef
    return $client.put('procurement-plan/status/' + payload.rowId, { status: payload.status }).then(response => {
      return response
    })
  },
  store({ dispatch, commit }, procurement) {
    // eslint-disable-next-line no-undef
    return $client.post('procurement', procurement).then(response => {
      dispatch('getPlans', response.data.data.id)
      return response
    })
  },
  delete({ dispatch, commit }, procurementId) {
    return $client.delete(`procurement/${procurementId}`).then(response => {
      dispatch('getPlans')
      return response
    })
  },
  procurementHistory({ commit }, rowId) {
    // eslint-disable-next-line no-undef
    return $client.get(`procurement-plan/histories/${rowId}`).then(response => {
      commit('setHistory', response.data.data)
      return response
    })
  },
  detailsHistory({ commit }, detailsId) {
    // eslint-disable-next-line no-undef
    return $client.get(`procurement-plan/histories-details/${detailsId}`).then(response => {
      return response
    })
  }
}

const mutations = {
  setProcurementPlans(state, procurements) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'procurementPlans', _.clone(procurements))
  },
  setCurrentPlan(state, plan) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'currentPlan', _.clone(plan))
  },
  setHistory(state, history) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'history', _.clone(history))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
