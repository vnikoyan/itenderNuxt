<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <button class="btn btn-outline-secondary mb-3" @click="selectAllFields">
        Նշել ամբողջը
      </button>
      <span v-tooltip="'Հեռացնել ամբողջը'" @click="deleteElements" class="pointer">
        <i class="remove far fa-trash-alt"></i>
      </span>
    </div>
    <div class="w-100 border rounded mb-3 little-scroll"
         style="height: 55vh; overflow-y: auto">
      <div v-for="(lot, index) in lots"
           @click="$emit('selectLot', lot)"
           :key="lot.id"
           :class="{'bg-primary text-white': lot.id === selectedLot.id}"
           class="todo-box nav-link todo-box-link">
        <div class="d-flex justify-content-between py-2 align-items-center">
          <span class="name-cpv">{{ lot.view_id }} | {{ lot.cpv_code }}{{ lot.cpv_drop && '/' }}{{ lot.cpv_drop }} - {{ lot.cpv_name }}</span>
          <div class="d-flex align-items-center">
            <span v-tooltip="'Հեռացնել'" @click.stop="$emit('deleteLot', {lotId: lot.id, nextLotIndex: index + 1})" class="text-danger">
              <i class="remove far fa-trash-alt"></i>
            </span>
            <input type="checkbox" class="ml-2" @click.stop="(event) => handleSelectItem(event, lot)" :checked="selectItem" name="selectedLot">
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex mb-3">
      <div class="col-12">
        <p>Գնման առարկաները ներմուծել գնումների պլանից</p>
        <div class="form-check form-check-inline">
          <input @click="changeType(false)"
                  v-model="isFromOutside"
                  :value="false"
                  id="from-outside"
                  class="form-check-input"
                  type="radio">
          <label class="form-check-label" for="from-outside">Այո</label>
        </div>
        <div class="form-check form-check-inline">
          <input  @click="changeType(true)"
                  v-model="isFromOutside"
                  :value="true"
                  id="not-from-outside"
                  class="form-check-input"
                  type="radio">
          <label class="form-check-label" for="not-from-outside">Ոչ</label>
        </div>
      </div>
    </div>
    <div v-if="this.mode !== 'view'" class="d-flex flex-column justify-content-between">
      <button v-if="!isFromOutside" type="button"
              @click="$modal.show('add-cpvs-to-tender-modal', lots)"
              class="btn btn-outline-primary btn-round dual-btn-icon" data-toggle="modal"
              data-animation="bounce" data-target=".bd-example-modal-xl">Գնման Առարկա
        <i class="fas fa-plus"></i>
      </button>
      <template v-else>
        <button type="button"
                @click="$modal.show('insert-lots-from-outside-modal', lots)"
                class="btn btn-outline-primary btn-round dual-btn-icon mt-2" data-toggle="modal"
                data-animation="bounce" data-target=".bd-example-modal-xl">Ներմուծել դրսից
          <i class="fas fa-plus"></i>
        </button>
        <button v-if="isOnePerson" type="button"
                @click="$modal.show('insert-lots-from-invoice-modal', lots)"
                class="btn btn-outline-primary btn-round dual-btn-icon mt-2" data-toggle="modal"
                data-animation="bounce" data-target=".bd-example-modal-xl">Ներմուծել հաշիվ ապրանքագրերից
          <i class="fas fa-plus"></i>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LotList',
    props: ['lots', 'selectedLot', 'isFromOutside'],
    data() {
      return this.getModalInitialState()
    },
    mounted() {
      if(this.$route.path.split('/')[2] === 'oneperson'){
        this.isOnePerson = true;
      }
      if(this.$route.query.mode){
        this.mode = this.$route.query.mode
      }
    },
    methods: {
      deleteElements(){
        this.$modal.show('delete-modal', {
          msg: 'Հեռացնե՞լ ընտրված գնման առարկաները',
          callback: async () => {
            await this.$client.post(`organize-row/deleteArray`, this.selectedItems.map(item => item.id))
            setTimeout(() => {
              this.$store.dispatch('organize/getRows', {organizeId:  this.$route.params.id}).then(response => {
                this.$store.dispatch('organizeOnePerson/getRows', {organizeId: this.$route.params.id}).then(response => {
                  this.$client.put(`organize/${this.$route.params.id}`, {contract_html_ru: '',contract_html_hy: ''})
                  this.$client.put(`organize/oneperson/${this.$route.params.id}`, {contract_html_ru: '',contract_html_hy: ''})
                })
              })
              this.$modal.hide('delete-modal')
            }, 1000);
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
          fromOutside: this.isFromOutside,
          mode: 'edit',
          selectItem: false,
          isOnePerson: false,
          selectedItems: [],
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
              await this.$client.post(`organize-row/deleteArray`, this.lots.map(item => item.id))
              this.$store.dispatch('organize/getRows', {organizeId:  this.$route.params.id}).then(response => {
                this.$store.dispatch('organizeOnePerson/getRows', {organizeId: this.$route.params.id}).then(response => {
                  this.$modal.hide('delete-modal')
                })
              })
            } else {
              this.fromOutside = !value;
            }
          })
        }
      }
    },
  }
</script>
<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>