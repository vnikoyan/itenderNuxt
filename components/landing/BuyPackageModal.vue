<template>
  <modal name="buy-package-modal"
         @before-open="beforeOpen"
         style="z-index: 1001;">
    <div id="modal-header">
      <div class="w-100 d-flex">
        <p>Գնել {{ packageName }} փաթեթ</p>
      </div>
      <button type="button"
              class="close position-absolute"
              style="right: 1.25rem; top: 30%"
              @click="$modal.hide('buy-package-modal')" aria-label="Close">
        <span aria-hidden="true" class="text-white">&times;</span>
      </button>
    </div>
    <div id="modal-body">
      <div class="form-check" v-for="(price, index) in pricings" :key="index">
        <template v-if="price.price">
          <input v-model="selectedPrice" :value="price.month" class="form-check-input" type="radio" name="price" :id="index">
          <label class="form-check-label" :for="index">
            <span class="price-down">{{price.price}} դրամ / </span>
            <span class="price-up">{{price.month}} ամիս</span>
          </label>
        </template>
      </div>
    </div>
    <div id="modal-footer">
      <div class="row justify-content-center">
          <a @click="buy" class="purchase-btn"><span>Գնել</span></a>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'BuyPackageModal',
  data () {
    return {
      pricings: [],
      selectedPrice: 3,
      packageName: '',
      packageId: 0,
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
    buy(){
      const requestData ={
        package_id: this.packageId,
        month:  this.selectedPrice,
        method: 'arca'
      }
      this.$client.post('create/order/payment/url', requestData).then(({data}) => {
        const { formUrl } = data
        window.location.href = formUrl

      })
    },
    beforeOpen({params}) {
      this.packageId = params.id
      this.packageName = params.name
      this.pricings = params.price
      this.selectedPrice = this.pricings.price_1.price ? this.pricings.price_1.month : this.pricings.price_3.month
      this.contract = params.contract
    },
  }
}
</script>
<style scoped>
  .purchase-btn{
    cursor: pointer;
  }
</style>

