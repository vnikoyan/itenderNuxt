<template>
  <div class="tender-rows-block row w-100 m-0">
    <div class="tender-rows-header row w-100 m-0 justify-content-between align-items-center">
      <div class="col-auto p-0">
        <div class="d-flex p-0 align-items-center">
            <input
              @click="selectAllFields"
              v-model="selectItem"
              id="select-all-checkbox"
              class="col-auto p-0"
              style="margin-right: 15px"
              type="checkbox"
            />
            <div class="col-auto p-0">
              <label for="select-all-checkbox" style="margin: 0; font-size: 13px;">
                {{!isMobile ? 'Նշել ամբողջը' : ''}}
              </label>
            </div>
        </div>
      </div>
      <div class="col-auto p-0">
        <div class="row m-0 align-items-center float-right">
          <div class="col-auto p-0" style="margin-right: 25px">
            <svg v-tooltip="'Հեռացնել ընտրված չափաբաժինները'" @click="deleteElements"  width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.34033 0H11.6103V1.5H5.34033V0ZM0.730469 3.29004H16.2305V4.79004H14.7305V15.59C14.7278 16.0534 14.5426 16.497 14.215 16.8246C13.8874 17.1522 13.4438 17.3374 12.9805 17.34H3.98047C3.51634 17.34 3.07122 17.1557 2.74303 16.8275C2.41484 16.4993 2.23047 16.0542 2.23047 15.59V4.79004H0.730469V3.29004ZM3.73047 15.79L13.1805 15.84L13.2205 4.79004H3.73047V15.79Z" fill="#E02232"/>
            </svg>
          </div>
          <div class="col-auto p-0">
            <button 
              type="button"
              @click="$modal.show('add-cpv-modal', handleAddRows)"
              class="btn btn-light"
            >
              <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 12.9251L18.5 11.0749H12.925V5.5H11.0749V11.0749H5.5V12.9251H11.0749V18.5H12.925L12.925 12.9251H18.5Z" fill="#006BE6"/>
              </svg>
              <span>Գնման Առարկա</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="tender-rows-body w-100">
      <div :key="key"  class="w-100 little-scroll"
           style="margin-top: 14px; height: 550px; overflow-y: auto"
      >
        <div v-for="(lot, index) in lots"
             :key="index"
             class="cpv-list-item">
          <div class="d-flex justify-content-between py-2 align-items-center">
            <div class="col-auto p-0">
              <input type="checkbox" @click.stop="(event) => handleSelectItem(event, lot)" :checked="selectItem" name="selectedLot">
            </div>
            <div class="col-10 p-0 pr-1">
              <span class="name-cpv"><span class="node-code">{{ +index + 1 }} | {{ lot.code }}{{ lot.drop && '/' }}{{ lot.drop }}</span> - {{ lot.name }}</span>
            </div>
            <div class="col-auto p-0">
              <svg v-tooltip="'Հեռացնել'"  @click.stop="$emit('deleteLot', {lotId: lot.id, nextLotIndex: index + 1})"  width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.34033 0H11.6103V1.5H5.34033V0ZM0.730469 3.29004H16.2305V4.79004H14.7305V15.59C14.7278 16.0534 14.5426 16.497 14.215 16.8246C13.8874 17.1522 13.4438 17.3374 12.9805 17.34H3.98047C3.51634 17.34 3.07122 17.1557 2.74303 16.8275C2.41484 16.4993 2.23047 16.0542 2.23047 15.59V4.79004H0.730469V3.29004ZM3.73047 15.79L13.1805 15.84L13.2205 4.79004H3.73047V15.79Z" fill="#E02232"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import isMobile from '@/mixins/isMobileView'
  export default {
    name: 'LotList',
    mixins: [isMobile],
    props: ['lots', 'addLots', 'deleteLots'],
    data() {
      return this.getModalInitialState()
    },
    directives: {
      indeterminate: function(el, binding) {
        el.indeterminate = Boolean(binding.value)
      }
    },
    mounted() {},
    methods: {
      deleteElements(){
        this.$modal.show('delete-modal', {
          msg: 'Հեռացնե՞լ ընտրված գնման առարկաները',
          callback: async () => {
            this.$emit('deleteLots', this.selectedItems)
            this.$modal.hide('delete-modal')
            this.selectedItems = [];
            this.selectItem = false;
            this.key = this.key + 1;
          }
        })
      },
      selectAllFields(){
        this.selectedItems = []
        this.selectItem = !this.selectItem
        if(this.selectItem){
          Object.assign(this.selectedItems, this.lots)
        } else {
          this.selectedItems = []
        }
      },
      getModalInitialState(){
        return {
          selectAll: false,
          selectItem: false,
          selectedItems: [],
          key: 0
        }
      },
      handleSelectItem(event, selectedItem){
        if(event.target.checked){
          this.selectedItems.push(selectedItem)
        } else {
          const selectedItemIndex = this.selectedItems.indexOf(selectedItem)
          this.selectedItems.splice(selectedItemIndex, 1)
        }
      },
      consoleLog(e){
        console.log(e)
      },
      changeType(value){
        if(this.lots.length){
          this.$fire({
            showCancelButton: true,
            title: "Զգուշացում",
            text: "Սույն գործողությունը կջնջի արդեն իսկ մուքագրած չափաբաժինները",
            type: "warning",
            confirmButtonText: 'Շարունակել',
            cancelButtonText: 'Ետ',
          }).then(async(result) => {
            if (result.value) {
              this.fromOutside = value;
              await this.lots.forEach(async(lot) => {
                await this.$client.delete(`organize-row/${lot.id}`)
              })
              await this.$store.dispatch('organize/getRows', {organizeId: this.$route.params.id})
              await this.$store.dispatch('organizeOnePerson/getRows', {organizeId: this.$route.params.id})
            } else {
              this.fromOutside = !value;
            }
          })
        }
      },
      handleAddRows(rows){
        this.$emit('addLots', rows)
      }
    },
  }
</script>
<style scoped>
  .node-code{
    color: #2D3036;
    font-weight: 500;
  }
  .cpv-list-item{
    padding: 14px 14px 14px 23px;
    padding-left: 23px;
    font-size: 14px;
    cursor: pointer;
  }
  .cpv-list-item:hover{
    background: #F0F7FF;
  }
  .tender-rows-body{
    padding-right: 16px;
  }
  .tender-rows-header{
    padding: 14px 14px 14px 23px;
  }
  .pointer{
    cursor: pointer;
  }
</style>