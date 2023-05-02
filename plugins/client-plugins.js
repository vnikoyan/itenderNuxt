import Vue from 'vue';
import { Carousel, Slide } from 'vue-carousel';
import VueFloatLabel from 'vue-float-label'
import VueResizeText from 'vue-resize-text';
import client from '~/services/httpClient'
import Progress from "easy-circular-progress";
import Swal from "sweetalert2";
import VueSimpleAlert from "vue-simple-alert";
import VModal from 'vue-js-modal'
import 'vue-date-pick/dist/vueDatePick.css';
import axios from 'axios'
window.axios = axios

import { ServerTable, ClientTable } from 'vue-tables-2';

import MyPagination from '~/components/tenders/table/MyPagination'
import VtGenericFilter from '~/components/tenders/table/VtGenericFilter'
import VtPerPageSelector from '~/components/tenders/table/VtPerPageSelector'
import MySortControl from '~/components/tenders/table/MySortControl'
import MyDataTable from '~/components/tenders/table/MyDataTable'
import MyTable from '~/components/tenders/table/MyTable'
import MyTableBody from '~/components/tenders/table/MyTableBody'
import MyColumnsDropdown from '~/components/tenders/table/MyColumnsDropdown'
import MyTableHeading from '~/components/tenders/table/MyTableHeading'
import MyTableRow from '~/components/tenders/table/MyTableRow'
import MyTableHead from '~/components/tenders/table/MyTableHead'
import moment from 'moment'
import VueMoment from 'vue-moment'

import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(BootstrapVue,IconsPlugin);
Vue.prototype.moment = moment
Vue.use(VueMoment, { moment })

Vue.use(ClientTable, {
  texts: {
    count: 'Ցուցադրված է {from}֊ից {to}֊ը ընդհանուր {count} տողից|{count} տող|',
    first: 'Առաջին',
    last: 'Վերջին',
    filter: '',
    filterPlaceholder: 'Փնտրել',
    limit: '',
    page: 'Page:',
    noResults: 'Համընկնում չի գտնվել',
    noRequest: 'խնդրում ենք ընտրել առնվազն մեկ ֆիլտեր տվյալները ներբեռնելու համար',
    filterBy: 'փնտրել ըստ {column}',
    loading: 'Բեռնվում է...',
    defaultOption: 'ընտրել {column}',
    columns: 'Ընտրել դաշտերը',
  },
}, false, 'bootstrap4', {
  tableBody: MyTableBody,
  tableRow: MyTableRow,
  table: MyTable,
  dataTable: MyDataTable,
  tableHead: MyTableHead,
  pagination: MyPagination,
  genericFilter: VtGenericFilter,
  perPageSelector: VtPerPageSelector,
  sortControl: MySortControl,
  tableHeading: MyTableHeading,
  columnsDropdown: MyColumnsDropdown
})
Vue.use(ServerTable, {
  texts: {
    count: 'Ցուցադրված է {from}֊ից {to}֊ը ընդհանուր {count} տողից|{count} տող|',
    first: 'Առաջին',
    last: 'Վերջին',
    filter: '',
    filterPlaceholder: 'Փնտրել',
    limit: '',
    page: 'Page:',
    noResults: 'Համընկնում չի գտնվել',
    noRequest: 'խնդրում ենք ընտրել առնվազն մեկ ֆիլտեր տվյալները ներբեռնելու համար',
    filterBy: 'փնտրել ըստ {column}',
    loading: 'Բեռնվում է...',
    defaultOption: 'ընտրել {column}',
    columns: 'Ընտրել դաշտերը',
  },
}, false, 'bootstrap4', {
  tableBody: MyTableBody,
  table: MyTable,
  tableRow: MyTableRow,
  dataTable: MyDataTable,
  tableHead: MyTableHead,
  pagination: MyPagination,
  genericFilter: VtGenericFilter,
  perPageSelector: VtPerPageSelector,
  sortControl: MySortControl,
  tableHeading: MyTableHeading,
  columnsDropdown: MyColumnsDropdown
})

Vue.use(VueSimpleAlert, {
    reverseButtons: true,
    showCloseButton: true,
    buttonsStyling: false,
    customClass: {
      popup: 'card',
      cancelButton: 'btn mx-1 btn-secondary',
      confirmButton: 'btn mx-1 btn-primary',
    },
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: ''
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: ''
    }
});
Vue.use(VModal, {adaptive: true, scrollable: true})

Vue.prototype.$fire = function(options) {
var mixedOptions = Object.assign(Object.assign({}, VueSimpleAlert.globalOptions), options);
mixedOptions.icon = mixedOptions.type
return Swal.fire(mixedOptions);
};
Vue.prototype.$client = client.client
Vue.prototype.$cancelSource = client.cancelSource
window.$client = client.client
Vue.component('carousel', Carousel)
Vue.component('slide', Slide)
Vue.component('Progress', Progress)
Vue.use(Progress);
Vue.use(VueResizeText)
Vue.use(VueFloatLabel)
// Vue.use(Slide)
// Vue.use(Carousel);