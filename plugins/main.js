import Vue from 'vue'
import VueNotifications from 'vue-notifications'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import i18n from './i18n'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { BButton } from 'bootstrap-vue'
import { ButtonPlugin } from 'bootstrap-vue'
import '~/assets/dashboard/assets/css/bootstrap.min.css'
import '~/assets/styles/new_styles.css'
import '~/assets/style.css'
import ICountUp from 'vue-countup-v2'
import _ from 'lodash'


Object.defineProperty(Vue.prototype, '_', { value: _ })
// import '~/assets/styles/main.scss'
// i18n.locale = store.getters["user/locale"];
Vue.component('ICountUp', ICountUp)
Vue.use(i18n)
Vue.use(Vuelidate)
Vue.use(ButtonPlugin)
Vue.component('b-button', BButton)
function showAlert ({ title, message }) {
  alert(`${title}
  
  ${message}`)
}
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueNotifications, {
  success: showAlert
})


