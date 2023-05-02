<template>
  <modal 
    class="suggestion-modal"
    name="suggestion-modal"
    @closed="$emit('updateComparisonData')"
    @before-close="beforeClose"
    @before-open="beforeOpen"
    transition="fade"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    width="90%"
    height="90%"
  >
    <div id="modal-header" class="action-modal">
      <div class="w-75 d-flex">
          <p>Գնային առաջարկ</p>
      </div>
      <button type="button"
              class="close position-absolute"
              style="right: 1.25rem; top: 25%"
              @click="$modal.hide('suggestion-modal')"
              aria-label="Close"
      >
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.64102L14.859 0L8.49997 6.359L2.14102 4.62582e-05L0.5 1.64107L6.85895 8.00002L0.500034 14.3589L2.14105 16L8.49997 9.64104L14.8589 16L16.5 14.359L10.141 8.00002L16.5 1.64102Z" fill="#ABAEB8"/>
          </svg>
      </button>
    </div>
    <div id="modal-body">
      <div class="row m-0 p-0">
        <div class="col-12 p-0">
          <div v-if="isMobile" id="accordion" class="mb-3" >
            <div class="card shadow-none">
              <div id="headingOne">
                <h5 class="mb-0">
                  <button
                    ref="openInvitationCollapse"
                    class="btn bg-light-grey w-100 d-flex justify-content-between padding-l-20 shadow-none collapse-header-button collapsed"
                    data-toggle="collapse"
                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                  >
                    {{organize.code}}
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3111 14.7931L19.7305 9.2069L18.0746 7.5L12.6552 13.0862L7.38638 7.5L5.73047 9.2069L10.9993 14.7931L12.6552 16.5L14.3111 14.7931Z" fill="#006BE6"/>
                    </svg>
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
                <div class="card">
                  <div class="card-body mobile-table-row-body">
                    <div class="mobile-table-row">
                      <label class="cell-name">Պատվիրատու`</label>
                      <p>{{customer_name}}</p>
                      <label class="cell-name">Վերջնաժամկետ`</label>
                      <p>{{organize.finish_date}}</p>
                      <label class="cell-name">Հաղթողին որոշելու կարգ`</label>
                      <p>{{organize.winner_by_lots ? 'Ըստ չափաբաժինների' : 'Ըստ ընդհանուր գնի' }}</p>
                      <template v-if="organize.type === 'itender'">
                          <label class="cell-name">Գործընթացի կարգ`</label>
                          <p>{{organize.itender_type === 'survey' ? 'Հարցում (շուկայի ուսումնասիրություն)' : 'Տենդեր'}}</p>
                          <label class="cell-name">Մրցույթի տեսակ`</label>
                          <p>{{purchaseTypesForItenderLongNames[organize.organize_rows[0].type]}}</p>
                          <label class="cell-name">Կատարման վերջնաժամկետ`</label>
                          <p>{{organize.implementation_deadline}}</p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table v-else class="table details-table-mobile table-border-radius first-table">
            <thead>
                <tr>
                  <th>Ընթացակարգի ծածկագիր</th>
                  <th>Պատվիրատու</th>
                  <th>Վերջնաժամկետ</th>
                  <th>Հաղթողին որոշելու կարգ</th>
                  <template v-if="organize.type === 'itender'">
                    <th>Գործընթացի տեսակը</th>
                    <th>Մրցույթի տեսակ</th>
                    <th>Կատարման վերջնաժամկետ</th>
                  </template>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{{organize.code}}</td>
                  <td>{{customer_name}}</td>
                  <td>{{organize.finish_date}}</td>
                  <td>{{organize.winner_by_lots ? 'Ըստ չափաբաժինների' : 'Ըստ ընդհանուր գնի' }}</td>
                  <template v-if="organize.type === 'itender'">
                    <td>{{organize.itender_type === 'survey' ? 'Հարցում (շուկայի ուսումնասիրություն)' : 'Տենդեր'}}</td>
                    <td>{{purchaseTypesForItenderLongNames[organize.organize_rows[0].type]}}</td>
                    <td>{{organize.implementation_deadline}}</td>
                  </template>
                </tr>
            </tbody>
          </table>
        </div>
        <div v-if="isItender" class="col-12 p-0">
          <template v-if="isMobile">
            <table style="table-layout: fixed;" class="table details-table-mobile table-border-radius">
              <thead>
                <tr>
                  <th style="background: #EDEFF2;" class="text-center" colspan="2">Մատակարարում</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <th style="border-top-left-radius: 10px;">Հասցե</th>
                    <td class="text-left">{{organize.shipping_address}}</td>
                  </tr>
                  <tr>
                    <th>Պատվերը ստանալուց</th>
                    <td class="text-left">{{organize.purchase_schedule}} աշխատանքային օրվա ընթացքում</td>
                  </tr>
                  <tr>
                    <th style="border-bottom-left-radius: 10px;">Առաքում</th>
                    <td class="text-left">{{getDeliveryType(organize.delivery_type)}}</td>
                  </tr>
              </tbody>
            </table>
          </template>
          <template v-else>
            <table style="table-layout: fixed;" class="table details-table-mobile table-border-radius second-table">
              <thead>
                  <tr>
                    <th style="background: #EDEFF2;" class="text-center" colspan="3">Մատակարարում</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Հասցե՝ {{organize.shipping_address}}</td>
                    <td>Պատվերը ստանալուց՝ {{organize.purchase_schedule}} աշխատանքային օրվա ընթացքում</td>
                    <td>{{getDeliveryType(organize.delivery_type)}}</td>
                  </tr>
              </tbody>
            </table>
          </template>
        </div>
        <div v-if="isItender && organize.payment_schedule_text !== ''" class="col-12 p-0">
          <table class="table details-table-mobile table-border-radius third-table">
            <thead>
                <tr>
                  <th class="text-center">Վճարում</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{{organize.payment_schedule_text}}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12 my-2 p-0">
          <span style="font-size: 13px;" v-if="organize.other_requirements !== '' || organize.additional_file !== ''" class="mr-3 text-justify w-md-75 d-inline-block">
            Այլ պահանջներ՝ <span class="text-secondary font-weight-bold">{{organize.other_requirements}}</span>
          </span>
          <a v-if="organize && organize.additional_file && organize.additional_file !== ''" :href="organize.additional_file" download target="blank" class="btn btn-light my-2 text-primary">
            <svg class=" mr-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.91797 19.1429C4.91797 20.0357 5.63225 20.75 6.52511 20.75H18.9358C19.8287 20.75 20.543 20.0357 20.543 19.1429V4.85714C20.543 3.96429 19.8287 3.25 18.9358 3.25H6.52511C5.63225 3.25 4.91797 3.96429 4.91797 4.85714V19.1429ZM19.1144 19.3214H6.34654V4.67857H19.1144V19.3214ZM8.75728 7.08943H16.793V8.518H8.75728V7.08943ZM16.793 15.482H8.75728V16.9106H16.793V15.482ZM8.75728 11.2857H16.793V12.7143H8.75728V11.2857Z" fill="#006BE6"/>
            </svg>
            <span>Կցված փաստաթղթեր</span>
          </a>
          <br/>
          <div class="d-flex align-items-center">
            <label class="btn m-0" :class="[uploadFileLoading && 'disabled', additionalFile ? 'btn-light' : 'btn-primary']">
              <svg class="mr-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.2305 12.9251L19.2305 11.0749H13.6555V5.5H11.8053V11.0749H6.23047V12.9251H11.8053V18.5H13.6555L13.6555 12.9251H19.2305Z" fill="#F0F7FF"/>
              </svg>
              <span>Կցել փաստաթղթեր</span>
              <input @change="handleUploadFile" type="file" hidden>
              <span v-if="uploadFileLoading" class="ml-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </label>
            <div v-if="additionalFile" class="multiselect__tag" style="margin-left: 12px">
              <span>
                <a :href="additionalFile" download target="_blank" class="text-decoration-none text-secondary">
                  {{additionalFile.split('/')[additionalFile.split('/').length - 1]}}
                </a>
              </span>
              <span class="multiselect__tag-icon">
                <div @click="deleteAdditionalFile" :class="isResponded && 'disabled'" class="position-relative w-100 h-100">
                  <svg data-v-e720bbc8="" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-e720bbc8="" fill-rule="evenodd" clip-rule="evenodd" d="M9.45436 8.32453L8.32616 9.45273L5.00095 6.12752L1.67557 9.45291L0.547363 8.32471L3.87275 4.99932L0.547987 1.67456L1.67619 0.546356L5.00095 3.87112L8.32554 0.546533L9.45374 1.67474L6.12915 4.99932L9.45436 8.32453Z" fill="#595E6B"></path>
                  </svg>
                </div>
              </span>
            </div>
          </div>
          <br/>
        </div>
      </div>

      <v-client-table class="suggestion-table" :columns="columns" v-model="data" :options="options">
        <div slot="id" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row}">
          {{ row.view_id }}
        </div>
        <div slot="product" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row}">
          {{ row.cpv_name }}
        </div>
        <div slot="cpv" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row}">
          {{ row.cpv_code }}
        </div>
        <div slot="unit" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row}">
          {{ row.cpv_unit }}
        </div>
        <div slot="specifications" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row}">
           <template v-if="row.specifications">
            <div v-if="row.specifications.length <= 75">{{ row.specifications }}</div>
            <div v-else>
              {{ row.specifications.substring(0, 75) + '...'}}
              <span @click.stop="()=>$modal.show('row-specification-modal', {...row})" class="text-primary" style="cursor: pointer">
                  տեսնել ավելին
              </span>
            </div>
           </template>
        </div>
        <div slot="specification" class="d-flex justify-content-start align-items-center h-100 p-0" slot-scope="{index}">
          <template v-if="organize.winner_by_lots || index !== data.length">
            <div class="row p-0 w-100 m-0 justify-content-center">
                <textarea
                  v-model.number="data[index-1].specification"
                  class="form-control w-100 m-0 br-8"
                />
            </div>
          </template>
        </div>
        <div slot="priceUnit" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row, index}">
          <template v-if="organize.winner_by_lots || index !== data.length">
            {{ row.unit_amount}} դր.
          </template>
        </div>
         <div slot="priceAll" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row, index}">
          <template v-if="organize.winner_by_lots || index !== data.length">
            {{ row.unit_amount * row.count }} դր.
          </template>
        </div>
        <div slot="price" class="d-flex justify-content-start align-items-center h-100 p-0" slot-scope="{row, index}">
          <template v-if="organize.winner_by_lots || index !== data.length">
            <div class="row p-0 w-100 m-0 justify-content-center">
              <input 
                v-model.number="data[index-1].value"
                @input="calculateByTotal(index-1)"
                v-positive-only.none-zero
                type="text"
                min="1"
                :class="{'border-primary': focusedLotFields.row === index && _.includes(focusedLotFields.activeFields, '1')}"
                class="col-12 form-control w-100 m-0"
              >
              <span v-if="data[index-1].overall > row.unit_amount * row.count"
                    class="text-danger mb-0" style="font-size: 0.6rem">
                    գերազանցում է նախահաշվային գինը
              </span>
            </div>
          </template>
          <template v-else>
            {{ getTotalPrice() }}
          </template>
        </div>
        <div slot="vat" class="d-flex justify-content-start align-items-center h-100" slot-scope="{index}">
          <template v-if="organize.winner_by_lots || index !== data.length">
            <div class="row px-2">
              <div class="col-12">
                <input
                  v-model="data[index-1].is_with_vat"
                  :true-value="1"
                  :false-value="0"
                  :data-index="index-1"
                  @change="handleVatSelect(data[index-1].is_with_vat, index-1)"
                  type="checkbox"
                >
                  <span>{{data[index-1].vat}}</span>
              </div>
            </div>
          </template>
          <template v-else>
            {{ getTotalVat() }}
          </template>
        </div>
        <div slot="total" class="d-flex justify-content-start align-items-center h-100" slot-scope="{index}">
          <template v-if="organize.winner_by_lots || index !== data.length">
            <div class="d-flex flex-row-reverse justify-content-between align-items-center">
              {{data[index-1].overall}}
            </div>
          </template>
          <template v-else>
            {{ getTotalTotalPrice() }}
          </template>
        </div>
      </v-client-table>
    </div>
    <div id="modal-footer">
      <div v-tooltip="isResponded?'Դուք արդեն ներկայացրել եք առաջարկ տվյալ ընթացակարգի համար':''" class="d-inline" >
        <button :disabled="isResponded" @click="save" type="button" class="btn btn-light mr-3 br-8">
          <span>Պահպանել սևագիրը</span>
        </button>
      </div>
      <div v-tooltip="isResponded?'Դուք արդեն ներկայացրել եք առաջարկ տվյալ ընթացակարգի համար':''" class="d-inline" >
        <button :disabled="isResponded" @click="send" type="button" class="btn btn-primary br-8">
          <span>Ներկայացնել առաջարկը</span>
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import isMobile from '@/mixins/isMobileView'
import purchaseTypesForItenderLongNames from '@/mixins/purchaseTypes'

export default {
  name: 'SuggestionModal',
  mixins: [isMobile, purchaseTypesForItenderLongNames],
  data () {
    return {
      isSetEqual: false,
      isSuccess: true,
      isNewSuggestion: true,
      isResponded: false,
      isNewParticipant: true,
      uploadFileLoading: false,
      isItender: false,
      uploadedFileName: '',
      additionalFile: '',
      organize_type: '',
      customer_name: '',
      lotsWithError: [],
      participant: {},
      columns: ['index_number', 'product', 'cpv', 'count', 'unit', 'specifications', 'priceUnit', 'priceAll', 'price', 'vat', 'total'],
      organize: {},
      data: [],
      attachedLotsForParticipant: [],
      focusedLotFields: {},
      lotsWithVatLength: 0,
      sugesstion: {},
      options: {
        sortable: [],
        perPage: 1000,
        perPageValues: [],
        columnsDropdown: false,
        filterByColumn: false,
        skin: 'table table-striped table-border-radius',
        dateFormat: "YYYY-mm-dd",
        headings: {
          index_number: 'Չ/Հ',
          product: 'Գնման առարկա',
          cpv: 'CPV կոդ',
          count: 'Քանակ',
          unit: 'Չափման միավոր',
          specification: 'Ներկայացվող տեխնիկական բնութագիր',
          specifications: 'Տեխնիկական բնութագիր',
          price: 'Արժեք',
          priceUnit: 'Նախահաշվային միավոր գին',
          priceAll: 'Նախահաշվային ընդհանուր գին',
          vat: 'ԱԱՀ',
          total: 'Ընդամենը'
        },
        filterable: []
      },
    }
  },
  computed: {
    me() {
      return this.$store.getters['user/me']
    },
  },
  methods: {
    consoleLog(data){
      console.log(data)
    },
    handleUploadFile(event){
      const file = event.target.files[0]
      if(file.size < 100000000){
        this.uploadFileLoading = true;
        const uploadedFile = file;
        const formData = new FormData();
        formData.append('file', uploadedFile);
        this.$client.post(`suggestions/uploadAdditionalFile/${this.currSuggestionId}`, formData).then(({data}) => {
          this.additionalFile = data.additional_file
          if(data){
            this.uploadFileLoading = false;
            this.$notify({
              group: 'foo',
              type: 'success',
              text: 'Հաջողությամբ հաստատված է'
            })
          }
        })
        this.uploadedFileName = file.name;
      } else {
        this.$notify({
          group: 'foo',
          type: 'error',
          text: 'Ընտրված ֆայլի առավելագույն ծավալը պետք է լինի 10ՄԲ'
        })
      }
    },
    getDeliveryType(type){
      switch (type) {
        case 'without_delivery':
          return 'Առանց առաքման';
        case 'by_participant_resources_participant':
          return 'Առաքումով՝ մասնակցի կողմից, մասնակցի միջոցներով';
        case 'by_participant_resources_organizer':
          return 'Առաքումով՝ մասնակցի կողմից, կազմակերպիչի միջոցներով';
        case 'by_organizer_resources_participant':
          return 'Առաքումով՝ կազմակերպիչի կողմից, մասնակցի միջոցներով';
        default:
          break;
      } 
    },
    deleteAdditionalFile(){
      this.$client.post(`suggestions/deleteAdditionalFile/${this.currSuggestionId}`).then(({data}) => {
        this.additionalFile = data.additional_file
        if(data){
          this.$notify({
            group: 'foo',
            type: 'success',
            text: 'Հաջողությամբ ջնջված է'
          })
        }
      })
    },
    async send(){
      var isValid = true;
      var isValidAllFields = true;
      if(!this.organize.winner_by_lots){
        this.data.forEach((lot, index) => {
          if(index !== this.data.length-1){
            if(!lot.overall || !lot.specification){
              isValid = false
            }
          }
        })
      }
      const changedRows = this.data.filter((item) => item.overall);
      if(changedRows.length === 0){
        isValid = false
      } else {
        changedRows.forEach((lot, index) => {
          if(!lot.overall || !lot.specification){
            isValidAllFields = false
          }
        })
      }
      if(isValid){
        if(isValidAllFields){
          await this.checkEqualPrice('send');
        } else {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Անհրաժեշտ է լրացնել «Ներկայացվող տեխնիկական բնութագիր» դաշտը',
            text: 'Կրկին փորձեք!',
          })
        }
      } else {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Անհրաժեշտ է ներակայցնել գնային առաջարկ բոլոր չափաբաժինների համար',
          text: 'Կրկին փորձեք!',
        })
      }
    },
    async save(){
      await this.checkEqualPrice('save');
    },
    async createSuggestion(action){
      if(action === 'send'){
        if(this.isNewSuggestion){
          const requestData = {
            organize_id: this.organize.id,
            client_id: this.organize.customer_id,
            provider_id: this.me.id,
            is_signature: 0,
            is_itender:  this.organize_type === 'itender',
            responded: 1,
          };
          await this.$client.post('suggestions/create', requestData).then(async({data}) => {
          }).catch(e => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ինչ որ բան այն չէ',
              text: 'Կրկին փորձեք!'
            })
          })
        } else {
          await this.$store.dispatch('suggestions/update', {id: this.currSuggestionId, data: { is_signature: 0, responded: 1 }}).then(async (response) => {
          }).catch(e => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ինչ որ բան այն չէ',
              text: 'Կրկին փորձեք!'
            })
          })
        }
      } else {
        if(this.isNewSuggestion){
          const requestData = {
            organize_id: this.organize.id,
            client_id: this.organize.customer_id,
            provider_id: this.me.id,
            is_signature: 1,
            is_itender:  this.organize_type === 'itender',
            responded: 0,
          };
          await this.$client.post('suggestions/create', requestData).then(async({data}) => {
          }).catch(e => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ինչ որ բան այն չէ',
              text: 'Կրկին փորձեք!'
            })
          })
        } else {
          await this.$store.dispatch('suggestions/update', {id: this.currSuggestionId, data: { is_signature: 1 }}).then(async (response) => {
          }).catch(e => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Ինչ որ բան այն չէ',
              text: 'Կրկին փորձեք!'
            })
          })
        }
      }
    },
    async checkEqualPrice(action){
      this.lotsWithError = [];
      this.isSetEqual = false;
      const changedRows = this.data.filter((item) => item.overall).length
      await this.data.filter((item) => item.overall).forEach(async(row, index) => {
        if(this.organize.winner_by_lots){
          this.$client.post(`participant-row/checkEqualPrice/${row.id}`, {price: row.overall}).then(async({data}) => {
            if(data.status){
              this.lotsWithError.push(row)
              this.isSetEqual = true
            }
            if(index === changedRows-1){
              await this.showErrors(action)
            }
          })
        } else {
          this.$client.post(`participant-row/checkEqualPrice/${row.id}`, {total_price: this.getTotalTotalPrice()}).then(async({data}) => {
            if(data.status){
              row.error = true
              this.isSetEqual = true
            }
            if(index === changedRows-1){
              await this.showErrors(action)
            }
          })
        }
      })
    },
    async updatePrices(){
        const lots = []
        this.data.forEach((row) => {
          if(row.overall){
            const requestObj = {
              participant_id: this.me.id,
              is_satisfactory: 1,
              organize_row_id: row.id,
              overall: row.overall, 
              total_price: row.value, 
              specification: row.specification,
              vat: row.vat,
              total: !this.organize.winner_by_lots ? this.getTotalTotalPrice() : 0 
            }
            lots.push(requestObj)
          }
        })
        const participantGroupRequestData = Object.assign({
          organize_id: this.organize.id,
          is_cooperation: false,
          is_agency_agreement: false,
          user_id: this.me.id,
        }, {
          lots: lots,
          participant: [
            {
              is_physical_person: Boolean(this.me.organisation[0].id_card_number),
              id_card_number: this.me.organisation[0].id_card_number,
              is_docs_satisfactory: true,
              price_offer_exists: true,
              tin: this.me.organisation[0].tin,
              date_of_submission: this.currentDate(),
              email: this.me.email,
              phone: this.me.organisation[0].phone,
              first_name: {
                hy: this.me.organisation[0].translations.name.hy,
                ru: this.me.organisation[0].translations.name.ru
              },
              last_name: {
                hy: '',
                ru: ''
              },
              middle_name: {
                hy: '',
                ru: ''
              },
              address: {
                hy: `${this.me.organisation[0].translations.region.hy || ''} ${this.me.organisation[0].translations.city.hy || ''}  ${this.me.organisation[0].translations.address.hy || ''}`,
                ru: `${this.me.organisation[0].translations.region.ru || ''} ${this.me.organisation[0].translations.city.ru || ''}  ${this.me.organisation[0].translations.address.ru || ''}`,
              },
              name: {
                hy: `${this.me.organisation[0].translations.company_type.hy ? `«${this.me.organisation[0].translations.name.hy}» ${this.me.organisation[0].translations.company_type.hy}` : this.me.organisation[0].translations.name.hy}`,
                ru: `${this.me.organisation[0].translations.company_type.ru ? `«${this.me.organisation[0].translations.name.ru}» ${this.me.organisation[0].translations.company_type.ru}` : this.me.organisation[0].translations.name.hy}`,
              },
            }
          ],
        })
      const requestMethod = this.isNewParticipant ? 'post' : 'put'
      const url = this.isNewParticipant ? 'participant-group' : `participant-group/${this.participant.id}`
      this.$client[requestMethod](url, participantGroupRequestData).then(async({data}) => {
        // const groupId = this.participant.id ? this.participant.id : data
        // this.$client.post(`participant-group/addPersonalInfo/${groupId}`, {
        //   bank: this.me.organisation[0].translations.bank_name.hy,
        //   account_number:  this.me.organisation[0].bank_account, 
        //   director: this.me.organisation[0].translations.director_name.hy
        // })
      }).catch(e => {
        this.isSaving = false
      })
    },
    async showErrors(action){
      if(this.isSetEqual){
        this.$notify({
          group: 'foo',
          type: 'error',
          title: `Առկա է գնային առաջարկի կրկնություն ${this.lotsWithError.length 
            ? `${this.lotsWithError.map(lot => ` ${lot.view_id}${lot.view_id === 1?'-ին':'-րդ'}`)} ${this.lotsWithError.length > 1?'չափաբաժինների':'չափաբաժնի'} համար` : ''}`,
          text: 'Խնդրում ենք փոխել ներկայացվող գինը և կրկին փորձել',
          duration: -1,
        })
      } else if(this.isSuccess){
        this.$notify({
          group: 'foo',
          type: 'success',
          text: 'Հաջողությամբ պահպանված է'
        })
        await this.createSuggestion(action)
        await this.updatePrices()
        this.$modal.hide('suggestion-modal')
      } else {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Ինչ որ բան այն չէ',
          text: 'Կրկին փորձեք!'
        })
      }
    },
    currentDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
      return yyyy + '-' + mm + '-' + dd;
    },
    calculateByTotal(index) {
      const lot = this.data[index]
      lot.vat = lot.is_with_vat && lot.value ? Number((lot.value * 0.2).toFixed(2)) : 0
      lot.overall = lot.value ? lot.value + lot.vat : 0
      this.$set(this.data, index, lot)
    },
    calculateByVat(index) {
      const lot = this.data[index]
      lot.overall = lot.is_with_vat ? lot.value + lot.vat : lot.value
      this.$set(this.data, index, lot)
    },
    handleVatSelect(selected, index) {
      // const nextVal = !event.target.value
      selected ? this.lotsWithVatLength++ : this.lotsWithVatLength--
      this.calculateByTotal(index)
    },
    getTotalPrice(){
      var totalValue = 0
      this.data.forEach((lot, index) => {
        if(index !== this.data.length-1){
          totalValue = totalValue + lot.value
        }
      })
      return isNaN(totalValue) ? 0 : totalValue
    },
    getTotalVat(){
      var totalVat = 0
      this.data.forEach((lot, index) => {
        if(index !== this.data.length-1){
          totalVat = totalVat + lot.vat
        }
      })
      return isNaN(totalVat) ? 0 : totalVat
    },
    getTotalTotalPrice(){
      var totalOverall = 0
      this.data.forEach((lot, index) => {
        if(index !== this.data.length-1){
          totalOverall = totalOverall + lot.overall
        }
      })
      return isNaN(totalOverall) ? 0 : totalOverall
    },
    beforeClose(){
      this.isNewSuggestion = true;
      this.isResponded = false;
      // this.resetComponent()
      if(!this.organize.winner_by_lots){
        this.data.pop()
      }
    },
    beforeOpen({params}) {
      this.resetComponent = params.resetComponent
      this.organize = params.organize
      this.organize_type = params.organize_type
      this.customer_name = params.customer_name
      this.isItender = params.organize.type === 'itender'
      this.$client.get(`suggestions/getByOrganizeId/${this.organize.id}`).then(({data}) => {
        if(data){
          if(data.participant){
            this.participant = data.participant
            this.isNewParticipant = false;
          }
          this.isNewSuggestion = false;
          this.currSuggestionId = data.id;
          this.isResponded = Boolean(data.responded);
        }
      })
      this.cleanData = this.organize.organize_rows
      this.data = this.organize.organize_rows
      if(!this.organize.winner_by_lots){
        if(this.data[this.data.length-1].is_total !== true){
          this.data.push({
            cpv_name: 'Ընդամենը',
            is_total: true
          })
        }
      }
      this.data.forEach((lot) => {
        if(lot.offers){
          const currUserOffer = lot.offers.find(item => item.participant_id ===  this.me.id);
          if(currUserOffer){
            lot.value = currUserOffer.value
            lot.overall = currUserOffer.cost
            lot.specification = currUserOffer.specification
            lot.vat = currUserOffer.vat
            lot.is_with_vat = currUserOffer.vat ? 1 : 0
          }
        }
      })
      this.columns = ['id', 'product', 'cpv', 'count', 'unit', 'specifications', 'priceUnit', 'priceAll', 'specification', 'price', 'vat', 'total'];
    },
    handleLotInputsFocus(event, details) {
      // eslint-disable-next-line eqeqeq
      if(event.target.value == 0) {
        event.target.select()
      }
      this.focusedLotFields = details
    },
  }
}
</script>
<style>
.suggestion-table td{
  padding: 5px 2px;
}
</style>
<style scoped>
  .multiselect__tag{
    margin: 0;
    background: #F7F7F7;
    border-radius: 12px !important;
  }
  .first-table td{
    font-size: 13px;
    line-height: 18px;
    color: #40444D;
  }
  .first-table th{
    font-size: 13px;
    line-height: 18px;
    color: #595E6B;
  }
  .second-table th{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #595E6B;
  }
  .second-table td{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #2D3036;
  }
  .third-table th{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #595E6B;
  }
  .third-table td{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #40444D;
  }
  @media (max-width: 768px) {
    .margin-top-mobile{
      margin-top: 10px;
    }
    .mobile-confirm-btn-block{
      margin-top: 20px;
    }
    .confirm-btn-block{
      margin-left: 0;
    }
    .suggestion-modal #modal-footer .btn{
      width: 100%;
      padding-right: 28px;
    }
    .suggestion-modal #modal-footer .btn:first-child{
      margin-bottom: 18px;
    }
    .suggestion-modal #modal-body{
      height: calc(100% - 56px - 168px) !important;
    }
    .suggestion-modal /deep/ .vm--modal {
      width: auto !important;
      height: 95vh !important;
      top: 0 !important;
      bottom: 0 !important;
      right: 0 !important;
      left: 0 !important;
      margin: 30px 8px;
      position: absolute;
    }
  }
  .searchItem:hover {
    background-color: #006BE6;
    color: #fff;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .2s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

