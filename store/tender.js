import Vue from 'vue'
// import router from '../router'

const state = {
    organizedProcurements: [],
    currentOrganized: {},
    organizedRows: [],
    allOrganizes: [],
    allData: {},
    percents: {},
    terms: [],
    isMandatoryNegotiations: false,
}

const getters = {
    organizedProcurements: (state) => state.organizedProcurements,
    currentOrganized: (state) => state.currentOrganized,
    organizedRows: (state) => state.organizedRows,
    allOrganizes: (state) => state.allOrganizes,
    allData: (state) => state.allData,
    lotPercents: (state) => state.percents,
    agreeWithTerms: (state) => state.terms,
    isMandatoryNegotiations: (state) => state.isMandatoryNegotiations,
}

const actions = {
    storeTerms({ commit }, data) {
        commit('setVarToTerms', data)
    },
    storeLotPercents({ commit }, data) {
        commit('setLotPercents', data)
    },
    storeIsMandatoryNegotiations({ commit }, data) {
        commit('setIsMandatoryNegotiations', data)
    },
    create({ dispatch, rootGetters }, data) {
        // eslint-disable-next-line no-undef
        return $client.post('organize', {
            is_one_person: false,
            procurement_id: rootGetters['procurement/currentPlan'] ? rootGetters['procurement/currentPlan'].id : 0,
            cpv_type: data.type,
            rights_responsibilities_fulfillment: data.rights
        })
    },
    getAll({ commit }) {
        // eslint-disable-next-line no-undef
        return $client.get('organize/get').then(response => {
            console.log(response.data);
            commit('setAllOrganizes', response.data)
        })
    },
    getCurrent({ commit }, organizeId) {
        // eslint-disable-next-line no-undef
        return $client.get(`organize/${organizeId}`).then(response => {
            commit('setCurrentOrganized', response.data.data)
            return response
        }).catch(e => {
            if (e.status === 404) {
                router.push('/organizing')
            }
        })
    },
    getRows({ commit }, payload) {
        // eslint-disable-next-line no-undef
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
        // eslint-disable-next-line no-undef
        return $client.get('organize/getByUser').then(response => {
            commit('setOrganizedProcurements', response.data.data)
            return response
        })
    },
    async getAllData({ commit }, organizeId) {
        // eslint-disable-next-line no-undef
        const response = await $client.get(`organize/getAllData/${organizeId}`)
        return new Promise((resolve => {
            resolve(response.data)
        }))
    }
}

const mutations = {
    setVarToTerms(state, agreeWithTerms) {
        // eslint-disable-next-line no-undef
        Vue.set(state, 'terms', _.clone(agreeWithTerms))
    },
    setLotPercents(state, lotPercents) {
        // eslint-disable-next-line no-undef
        Vue.set(state, 'percents', _.clone(lotPercents))
    },
    setIsMandatoryNegotiations(state, isMandatoryNegotiations) {
        // eslint-disable-next-line no-undef
        Vue.set(state, 'isMandatoryNegotiations', _.clone(isMandatoryNegotiations))
    },
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