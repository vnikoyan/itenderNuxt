<template>
    <div id="tenders">
        <header class="position-relative mob-image-block">
            <img src="~/assets/landing/images/tenders-page.jpg" alt="image" class="w-100 tenders-header-image-pos">
            <img src="~/assets/landing/images/sliderLayout.png" alt="layout" class="w-100 layout">
        </header>
        <section>
            <div>
                <div class="tenders-container">
                    <div class="block-container">
                      <div class="tenders-block">
                          <h1 class="text-center main-title h4">Տենդերներ</h1>
                          <p class="text-center main-content-styles" v-if="!isAuthenticated">Բոլորը տեսնելու համար պետք է գրանցվեք համակարգում</p>
                      </div>
                      <client-only>
                      <v-server-table ref="tableData" :url="tableDataUrl" :columns="columns" :options="options" @loaded="onLoaded" class="tenders-desktop">
                          <div class="text-left" slot="organizator" slot-scope="{row}">
                              <span class="organizator-styles">{{row.organizator}}</span>
                          </div>
                          <div class="text-left" slot="title" slot-scope="{row}">
                              <span class="main-styles">{{row.title}}</span>
                          </div>
                          <div class="text-left" slot="opening_finish_date" slot-scope="{row}">
                              <span class="date-styles">{{$moment(new Date(row.opening_date.replace(/-/g, "/"))).format('DD-MM-YYYY')}} - <br/><span class="text-primary font-weight-bold">{{$moment(new Date(row.finish_date.replace(/-/g, "/"))).format('DD-MM-YYYY HH:mm')}}</span></span>
                          </div>
                          <div slot="application" slot-scope="{row}" class="d-flex justify-content-start align-items-center h-100">
                              <template v-if="isAuthenticated">
                                  <template v-if="row.is_competition">
                                      <template v-if="row.kind === 'competitive'" >
                                          <template v-if="me.package === 'Գոլդ' || me.package === 'Պրեմիում'">
                                              <template v-if="!isNotNewProcedure(row)">
                                              </template>
                                          </template>
                                          <template v-else>
                                          </template>
                                      </template>
                                      <template v-if="isAuthenticated || !row.is_closed">
                                          <template v-if="row.kind !== 'one_person'" >
                                              <template v-if="me.package !== 'Անվճար' || !row.is_closed" >
                                                  <button type="button" class="ml-2 button_H32_type2" data-toggle="modal" data-animation="bounce">
                                                      <a download target="_blank" :href="row.invitation_link" class="d-flex justify-content-start align-items-center">
                                                          <svg class="mr-2" width="12" height="12" viewBox="0 0 12 12">
                                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43581 6.74516V0.5H6.4935V6.74516L8.46786 4.75807L9.2435 5.53871L6.70504 8.02258L5.9294 8.80323L5.22427 8.02258L2.68581 5.53871L3.46145 4.75807L5.43581 6.74516ZM10.3718 10.3645V8.87419H11.5V10.2226C11.5 10.9323 10.9359 11.5 10.2308 11.5H1.76923C1.0641 11.5 0.5 10.9323 0.5 10.2226V8.87419H1.62821V10.3645H10.3718Z" fill="#006BE6"/>
                                                          </svg>  
                                                          <span>Բեռնել</span>
                                                      </a>
                                                  </button>
                                              </template>
                                              <template v-else>
                                                  <div v-tooltip="'Մրցույթի հրավերը բեռնելու համար թարմացրեք ձեր փաթեթի տեսակը'">
                                                      <button disabled type="button" class="d-flex justify-content-start align-items-center button_H32_type2" data-toggle="modal" data-animation="bounce">
                                                      <svg class="mr-2" width="12" height="12" viewBox="0 0 12 12">
                                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43581 6.74516V0.5H6.4935V6.74516L8.46786 4.75807L9.2435 5.53871L6.70504 8.02258L5.9294 8.80323L5.22427 8.02258L2.68581 5.53871L3.46145 4.75807L5.43581 6.74516ZM10.3718 10.3645V8.87419H11.5V10.2226C11.5 10.9323 10.9359 11.5 10.2308 11.5H1.76923C1.0641 11.5 0.5 10.9323 0.5 10.2226V8.87419H1.62821V10.3645H10.3718Z" fill="#006BE6"/>
                                                      </svg>  Բեռնել
                                                      </button>
                                                  </div>
                                              </template>
                                          </template>
                                          <button v-else-if="row.organize.contract !== ''" type="button" @click.stop="$modal.show('contract-draft-modal', row)" class="button_H32 ml-2" data-toggle="modal" data-animation="bounce">
                                              Տեսնել
                                          </button>
                                          <div class="ml-1 row align-items-center" v-if="row.guaranteed">
                                              <div class="col text-primary">
                                                  <i style="font-size: 24px" class="fas fa-shield-alt"></i>
                                              </div>
                                          </div>
                                      </template>
                                  </template>
                              </template>
                              <template v-else>
                                <button v-if="row.is_from_manager" type="button" class="ml-2 button_H32_type2" data-toggle="modal" data-animation="bounce">
                                    <a download target="_blank" :href="row.invitation_link" class="d-flex justify-content-start align-items-center">
                                        <svg class="mr-2" width="12" height="12" viewBox="0 0 12 12">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43581 6.74516V0.5H6.4935V6.74516L8.46786 4.75807L9.2435 5.53871L6.70504 8.02258L5.9294 8.80323L5.22427 8.02258L2.68581 5.53871L3.46145 4.75807L5.43581 6.74516ZM10.3718 10.3645V8.87419H11.5V10.2226C11.5 10.9323 10.9359 11.5 10.2308 11.5H1.76923C1.0641 11.5 0.5 10.9323 0.5 10.2226V8.87419H1.62821V10.3645H10.3718Z" fill="#006BE6"/>
                                        </svg>  
                                        <span>Բեռնել</span>
                                    </a>
                                </button>
                                <button v-else type="button" @click.stop="downloadInvitationModal"  class="btn btn-light button_H32_type2" data-toggle="modal" data-animation="bounce">
                                    <svg width="12" height="12" viewBox="0 0 12 12">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43581 6.74516V0.5H6.4935V6.74516L8.46786 4.75807L9.2435 5.53871L6.70504 8.02258L5.9294 8.80323L5.22427 8.02258L2.68581 5.53871L3.46145 4.75807L5.43581 6.74516ZM10.3718 10.3645V8.87419H11.5V10.2226C11.5 10.9323 10.9359 11.5 10.2308 11.5H1.76923C1.0641 11.5 0.5 10.9323 0.5 10.2226V8.87419H1.62821V10.3645H10.3718Z" fill="#006BE6"/>
                                    </svg>  Բեռնել
                                </button>
                            </template>
                          </div>
                      </v-server-table>
                      </client-only>
                      <div class="tenders-mobile">
                          <div class="tenders-cards" v-for="(item,index) in tableData" :key="index">
                              <p class="tenders-cards-organizator h1">{{item.organizator}}</p>
                              <p class="tenders-cards-title h2">{{item.title}}</p>
                              <p class="tenders-cards-date">{{$moment(new Date(item.opening_date.replace(/-/g, "/"))).format('DD-MM-YYYY')}} - <span class="text-primary font-weight-bold">{{$moment(new Date(item.finish_date.replace(/-/g, "/"))).format('DD-MM-YYYY HH:mm')}}</span></p>
                              <div class="d-flex flex-column tenders-cards-footer">
                                  <div class="d-flex">
                                      <template v-if="isAuthenticated">
                                          <template v-if="me.package === 'Գոլդ'">
                                                  <div>
                                                        {{item.price}}
                                                  </div>
                                                  <div v-if="item.price_file">
                                                      <a download target="_blank" :href="item.price_file">
                                                          <button type="button" class="button_H32 mb-2" data-toggle="modal" data-animation="bounce">
                                                              <i class="fa fa-download" />
                                                          </button>
                                                      </a>
                                                  </div>
                                          </template>
                                          <template v-else>
                                              <span class="mb-2" v-tooltip="'Նախահաշվային գինը հասանելի է միայն Գոլդ փաթեթ ունեցող օգտատերերին'">
                                                  <i style="font-size: 24px"  class="fas fa-eye-slash"></i>
                                              </span>
                                          </template>
                                      </template>
                                      <template v-else >
                                          <span class="mb-2">Մուտք գործեք համակարգ ինֆորմացիան ստանալու համար</span> 
                                      </template>
                                  </div>
                                  <div class="d-flex">
                                      <div>
                                          <template v-if="isAuthenticated">
                                              <template v-if="item.is_competition">
                                                  <template v-if="item.kind === 'competitive'" >
                                                      <template v-if="me.package === 'Գոլդ' || me.package === 'Պրեմիում'">
                                                          <template v-if="!isNotNewProcedure(item)">
                                                              <button type="button" @click.stop="() => {$modal.show('application-modal', {...item, addToFavorite});}" class=" mr-3 button_H32" data-toggle="modal" data-animation="bounce">
                                                                    Պատրաստել
                                                              </button>
                                                          </template>
                                                      </template>
                                                      <template v-else>
                                                          <div v-tooltip="'Մրցույթի հայտ պատրաստելու գործիքը հասանելի է միայն Գոլդ կամ Պրեմիում փաթեթ ունեցող օգտատերերին'">
                                                          <button disabled type="button" class="mr-3 btn button_H32" data-toggle="modal" data-animation="bounce">
                                                                Պատրաստել
                                                          </button>
                                                          </div>
                                                      </template>
                                                  </template>
                                                  <button v-if="item.kind === 'one_person'" type="button" @click.stop="() => {$modal.show('suggestion-modal', {...item, resetComponent})}" class="button_H32" data-toggle="modal" data-animation="bounce">
                                                        Գնային առաջարկ 
                                                  </button>
                                              </template>
                                          </template>
                                          <button v-else class="button_H32  mr-3" type="button" @click.stop="openApplicationModal" data-toggle="modal" data-animation="bounce">
                                                Պատրաստել
                                          </button>
                                      </div>
                                      <div class="d-flex">
                                          <template v-if="isAuthenticated || !item.is_closed">
                                              <template v-if="item.kind !== 'one_person'">
                                                  <template v-if="me.package !== 'Անվճար' || !item.is_closed" >
                                                      <button type="button" class="button_H32_type2" data-toggle="modal" data-animation="bounce">
                                                          <a  download target="_blank" :href="item.invitation_link" class="d-flex justify-content-start align-items-center">
                                                          <svg class="mr-2" width="12" height="12" viewBox="0 0 12 12">
                                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43581 6.74516V0.5H6.4935V6.74516L8.46786 4.75807L9.2435 5.53871L6.70504 8.02258L5.9294 8.80323L5.22427 8.02258L2.68581 5.53871L3.46145 4.75807L5.43581 6.74516ZM10.3718 10.3645V8.87419H11.5V10.2226C11.5 10.9323 10.9359 11.5 10.2308 11.5H1.76923C1.0641 11.5 0.5 10.9323 0.5 10.2226V8.87419H1.62821V10.3645H10.3718Z" fill="#006BE6"/>
                                                          </svg>  Բեռնել
                                                          </a>
                                                      </button>
                                                  </template>
                                                  <template v-else>
                                                      <div v-tooltip="'Մրցույթի հրավերը բեռնելու համար թարմացրեք ձեր փաթեթի տեսակը'">
                                                          <button disabled type="button" class="button_H32_type2" data-toggle="modal" data-animation="bounce">
                                                          <svg class="mr-2" width="12" height="12" viewBox="0 0 12 12">
                                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43581 6.74516V0.5H6.4935V6.74516L8.46786 4.75807L9.2435 5.53871L6.70504 8.02258L5.9294 8.80323L5.22427 8.02258L2.68581 5.53871L3.46145 4.75807L5.43581 6.74516ZM10.3718 10.3645V8.87419H11.5V10.2226C11.5 10.9323 10.9359 11.5 10.2308 11.5H1.76923C1.0641 11.5 0.5 10.9323 0.5 10.2226V8.87419H1.62821V10.3645H10.3718Z" fill="#006BE6"/>
                                                          </svg>  Բեռնել
                                                          </button>
                                                      </div>
                                                  </template>
                                              </template>
                                              <button v-else-if="item.organize.contract !== ''" type="button" @click.stop="$modal.show('contract-draft-modal', item)" class="button_H32" data-toggle="modal" data-animation="bounce">
                                                    Տեսնել
                                              </button>
                                              <div class="ml-1 row align-items-center" v-if="item.guaranteed">
                                                  <div class="col text-primary">
                                                      <i style="font-size: 32px" class="fas fa-shield-alt"></i>
                                                  </div>
                                              </div>
                                          </template>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
                <div class="vtb-block-distance desktop">
                    <div class="d-flex justify-content-center">
                        <VtbBanner />
                    </div>
                </div>
                <div class="vtb-block-distance mobile block-container">
                    <div class="d-flex justify-content-center">
                        <VtbBanner />
                    </div>
                </div>
            </div>
        </section>
        <!-- <application-modal from="tenders" /> -->
        <!-- <suggestion-modal /> -->
    </div>
  </template>
  
  <script>
  import ApplicationModal from '~/components/modals/ApplicationModal.vue'
  import SuggestionModal from '~/components/modals/SuggestionModal.vue';
  import VtbBanner from '~/components/dashboard/banner'
  export default {
    data() {
        return {
            tableData: null,
            columns: [
                'organizator',
                // 'password',
                'title',
                'opening_finish_date',
                // 'price',
                'application',
            ],
            tableDataUrl: `${process.env.VUE_APP_API_URL}tender/landing`,
            options:{
                rowClassCallback: function(row) {
                    if(!row.is_closed){
                        return 'bg-light'
                    } else if(!row.is_closed){
                        return 'bg-light'
                    }
                },
                headings: {
                    organizator: 'Պատվիրատու',
                    // password: 'Ծածկագիր',
                    title: 'Անվանում',
                    opening_finish_date: 'Սկիզբ/ավարտ',
                    region: 'Տարածաշրջան',
                    type: 'Տիպ',
                    // price: 'Նախահաշվային գին',
                    application: 'Մրցույթի հայտ և հրավեր',
                },
                columnsDropdown: false,
                filterable: false,
                sortable: [],
                pagination: { show: false },
                requestFunction(data) {
                    return this.$client.get(this.url, {params: data})
                    .catch(function (e) {this.dispatch('error', e)})
                },
                texts: {
                    count:
                    'Ցուցադրված է {from}֊ից {to}֊ը ընդհանուր {count} տողից|{count} տող|',
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
                skin: 'table table-hover'
            }
        }
    },
    computed: {
        locale() {
            return this.$store.getters['user/locale']
        },
        me() {
            return this.$store.getters['user/me']
        },
        isAuthenticated() {
          return this.$store.getters['auth/isAuthenticated']
        },
    },
    name: 'TenderComponent',
    components: {SuggestionModal, ApplicationModal, VtbBanner},
    methods:{
        onLoaded(){
            this.tableData = this.$refs.tableData.data
        },
        isNotNewProcedure(row){
            switch (row.procedure.id) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return true
            default:
                return false
            }
        },
        addToFavorite(tenderStateId){
            const currTender = this.$refs.table.data.find(tender => tender.id === tenderStateId)
            if(!currTender.is_favorite){
                currTender.is_favorite = true;
                this.$client.post('/tender/favorite', {tender_state_id: tenderStateId})
            }
        },
        downloadInvitationModal(){
            this.$fire({
                text: "Խնդրում ենք մուտք գործել համակարգ հրավերը բեռնելու համար",
                type: "warning",
                confirmButtonText: 'Մուտք գործել',
            }).then((result) => {
                if (result.value) {
                    this.$router.push(`/login`);
                } else {
                }
            })
        },
        openApplicationModal(){
            this.$fire({
                text: "Խնդրում ենք մուտք գործել համակարգ հայտ պատրաստելու համար",
                type: "warning",
                confirmButtonText: 'Մուտք գործել',
            }).then((result) => {
                if (result.value) {
                    this.$router.push(`/login`);
                } else {
                }
            })
        },
        consoleLog(data){
            console.log(data)
        },
    },
    metaInfo: {
        title: 'Այս պահին ակտիվ տենդերները',
        link: [
            {rel: 'canonical', href: 'https://www.itender.am/tender'}
        ],
        meta: [
            { name: 'description', content: 'Այս պահին հասանելի պետական և մասնավոր տենդերները։ Պատրաստեք պետական գնումների մրցույթի հայտ մեզ մոտ։' }
        ]
    },
    jsonld: {
        "@context": "https://schema.org",
        "@type": "Table",
        "about": "list of tenders"
    },
  }
  </script>
  <style scoped>
    .tenders-block{
        padding-top: 50px;
        padding-bottom: 40px;
    }
    .tenders-block h4:first-child{
        padding-bottom: 15px;
    }
    .date-styles{
        color: #595E6B;
        font-size: 14px;
        line-height: 20px;
        white-space: pre;
    }
    .main-styles{
        color: #595E6B;
        font-size: 16px;
        line-height: 24px;
    }
    .organizator-styles{
        color: #2D3036;
        font-size: 16px;
        line-height: 24px;
    }
    .table thead th {
        text-align: left !important;
    }
    .vtb-block-distance{
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .tenders-mobile{
        display: none;
    }
  
    .tenders-cards-organizator{
        color: #2D3036;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
    }
    .tenders-cards-title{
        color: #595E6B;
        font-size: 16px;
        line-height: 24px;
        margin: 8px 0;
        padding: 0;
    }
    .tenders-cards-date{
        color: #595E6B;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0;
    }
    .tenders-cards{
        padding: 15px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        border: 1px solid #EDEFF2;
        background: #FFFFFF;
        margin-bottom: 8px;
    }
    .tenders-cards:last-child{
        margin-bottom: 0;
    }
  
    @media only screen and (max-width: 1200px) {
        .tenders-desktop{
            display: none;
        }
        .tenders-mobile{
            display: block;
        }
        .tenders-container{
            background: #F7F7F7;
            padding-bottom: 40px;
        }
        .tenders-cards-footer{
            margin-top: 20px;
        }
    }
    @media only screen and (max-width: 500px) {
        /* .vtb-block-distance{ */
            /* margin-top: 80px; */
            /* margin-bottom: 136px; */
        /* } */
        .tenders-block{
            padding-top: 40px;
            padding-bottom: 30px;
        }
        .tenders-header-image-pos{
            left: -640px !important;
        }
    }
    @media only screen and (max-width: 380px) {
        .mob-vtb{
            width: 100%;
        }
    }
  </style>
  <style>
    #tenders .VueTables{
        border: 1px solid #EDEFF2;
        border-radius: 16px;
        background-color: #FFFFFF;
        padding: 20px;
    }
    .table-responsive{
        overflow: hidden;
    }
    #tenders .VueTables__row td,th{
        border: 0 !important;
    }
    #tenders .VueTables__row.bg-light{
        background-color: white !important;
    }
    #tenders .table-hover tbody tr:hover{
        background-color: #F7F7F7;
    }
    #tenders .table-hover tbody tr:hover .organizator-styles{
        color: #0065D9;
    }
    #tenders .VueTables__table tr th{
        font-size: 14px;
        line-height: 20px;
        color: #6E7485;
        align-items: left;
    }
    #tenders .VueTables__table tr th div{
        justify-content: start !important;
    }
    #tenders .page-item.active .page-link{
        background-color: #006be6;
    }
    #tenders .VueTables__row td{
        padding-left: 0 !important;
    }
    #tenders .row span{
        margin-left: 0;
    }
    #tenders .row span:first-child{
        margin-left: 5px;
    }
    #tenders .VueTables__table th{
        padding: 10px 0 !important;
    }
  </style>
  