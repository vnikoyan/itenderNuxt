import Vue from 'vue'
// import router from '../router'

const state = {
  accessToken: (typeof window !== 'undefined') ? localStorage.getItem('accessToken') : '',
  rememberMe: (typeof window !== 'undefined') ? JSON.parse(localStorage.getItem('rememberMe')) : false,
  authErrors: null,
  firstLogin: (typeof window !== 'undefined') ? localStorage.getItem('firstLogin') : '',
  userType: (typeof window !== 'undefined') ? localStorage.getItem('userType') : '',
  userPackage: (typeof window !== 'undefined') ? localStorage.getItem('userPackage') : '',
}

const getters = {
  isAuthenticated: state => !!state.accessToken,
  accessToken: state => state.accessToken,
  rememberMe: state => state.rememberMe,
  authErrors: state => state.authErrors,
  authMessage: state => state.authMessage,
  firstLogin: state => state.firstLogin,
  userType: state => state.userType,
  userPackage: state => state.userPackage
}

const actions = {
  auth ({ dispatch, commit }, payload) {
  // eslint-disable-next-line no-undef
  return $client.post(`auth/${payload.url}`, payload.fields)
    .then(({ status, data: { data } }) => {
      console.log("DATA", data)
      commit('setAuthErrors', null)
      if (status) {
        if(data.message){
          commit('setAuthMessage', data.message)
        } else {
          dispatch('rememberMe', payload.rememberMe)
          dispatch('firstLogin', data.first_login)
          dispatch('userType', data.type)
          dispatch('userPackage', data.package)
          dispatch('setToken', data.token)
        }
        return data
      }
    }).catch(error => {
      commit('setAuthErrors', error.data.message)
      dispatch('removeToken')
      return error.data
    })
  },
  logout ({ dispatch }) {
    return new Promise((resolve) => {
      dispatch('removeToken')
      dispatch('rememberMe', false)
      localStorage.removeItem('me')
      // eslint-disable-next-line no-undef
      delete $client.defaults.headers.common.Authorization
      // router.push('/')
      resolve()
    })
  },
  rememberMe ({ commit }, shouldRememberMe) {
    commit('setRememberMe', shouldRememberMe)
    localStorage.setItem('rememberMe', shouldRememberMe)
  },
  setToken ({ commit }, accessToken) {
    commit('setAccessToken', accessToken)
    localStorage.setItem('accessToken', accessToken)
  },
  firstLogin ({ commit }, firstLogin) {
    commit('setFirstLogin', firstLogin)
    localStorage.setItem('firstLogin', firstLogin)
  },
  userType ({ commit }, userType) {
    commit('setUserType', userType)
    localStorage.setItem('userType', userType)
  },
  userPackage ({ commit }, userPackage) {
    commit('setUserPackage', userPackage)
    localStorage.setItem('userPackage', userPackage)
  },
  removeToken ({ commit }) {
    commit('setAccessToken', '')
    localStorage.removeItem('accessToken')
  },
  removeAuthErrors ({ commit }) {
    console.log('a')
    commit('setAuthErrors', '')
  }
}

const mutations = {
  setAccessToken (state, accessToken) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'accessToken', _.clone(accessToken))
  },
  setFirstLogin (state, firstLogin) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'firstLogin', _.clone(firstLogin))
  },
  setUserType (state, userType) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'userType', _.clone(userType))
  },
  setUserPackage (state, userPackage) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'userPackage', _.clone(userPackage))
  },
  setRememberMe (state, shouldRememberMe) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'rememberMe', _.clone(shouldRememberMe))
  },
  setAuthErrors (state, errors) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'authErrors', _.clone(errors))
  },
  setAuthMessage (state, errors) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'authMessage', _.clone(errors))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
