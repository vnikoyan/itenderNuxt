<template>
  <modal 
    name="products-details-modal"
    class="products-details-modal modal-without-footer"
    @before-open="handleBeforeOpen"
    transition="fade"
    :adaptive="true"
    :reset="true"
    width="25%"
    height="auto"
    style="z-index: 2011;"
  >
    <div id="modal-header">
      <div class="w-75 d-flex">
        <p>Չափաբաժնի ամբողջական նկարագիր</p>
      </div>
      <button type="button"
              class="close position-absolute"
              style="right: 1.25rem; top: 25%"
              @click="$modal.hide('products-details-modal')" aria-label="Close">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.64102L14.859 0L8.49997 6.359L2.14102 4.62582e-05L0.5 1.64107L6.85895 8.00002L0.500034 14.3589L2.14105 16L8.49997 9.64104L14.8589 16L16.5 14.359L10.141 8.00002L16.5 1.64102Z" fill="#ABAEB8"/>
        </svg>
      </button>
    </div>
    <div id="modal-body">
      <div class="form-group">
        <float-label class="w-100">
          <input
            v-model="row.firm_name"
            type="text"
            placeholder="Ֆիրմային անվանումը"
            class="tender-input m-0"
          />
        </float-label>
      </div>
      <div class="form-group">
        <float-label class="w-100">
          <input
            v-model="row.trademark"
            type="text"
            placeholder="Ապրանքային նշանը"
            class="tender-input m-0"
          />
        </float-label>
      </div>
      <div class="form-group">
        <float-label class="w-100">
          <input
            v-model="row.brand"
            type="text"
            :placeholder="is_with_model ? 'Մոդելը' : 'Մակնիշը'"
            class="tender-input m-0"
          />
        </float-label>
      </div>
      <div class="form-group">
        <float-label class="w-100">
          <input
            v-model="row.manufacturer"
            type="text"
            placeholder="Արտադրողի անվանումը"
            class="tender-input m-0"
          />
        </float-label>
      </div>
      <div class="form-group" :class="cpv_type !== 'work' && 'm-0'">
        <float-label class="w-100">
          <input
            v-model="row.specification"
            type="text"
            placeholder="Տեխնիկական բնութագրերը"
            class="tender-input m-0"
          />
        </float-label>
      </div>
      <div v-if="cpv_type === 'work'" class="form-group">
        <float-label class="w-100">
          <input
            v-model="row.guarantee_time"
            type="text"
            placeholder="Երաշխիքային ժամկետները"
            class="tender-input m-0"
          />
        </float-label>
      </div>
      <div class="modal-footer justify-content-center">
        <button @click="save" class="btn btn-primary br-8">
          <span>Պահպանել</span>
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
  import { requiredIf } from "vuelidate/lib/validators";
  import 'vue-date-pick/dist/vueDatePick.css';

  export default {
    name: 'ProductsDetailsModal',
    components: {  },
    data() {
      return {
        procedure_type: null,
        cpv_type: 'product',
        is_with_model: true,
        row: {
          firm_name: ' ',
          trademark: ' ',
          brand: ' ',
          manufacturer: ' ',
          specification: ' ',
          guarantee_time: ' ',
        },
      }
    },
    validations: {
      row: {
        firm_name: {  },
        trademark: {  },
        brand: {  },
        manufacturer: {  },
        specification: { required: requiredIf(function() {
          return this.procedure_type  !== 'ELAH'
        })  },
        // guarantee_time: { required: requiredIf(function(item) {
        //   return this.cpv_type === 'work'
        // }) },
        guarantee_time: { },
      },
    },
    computed: {
      currentOrganized() {
        return this.$store.getters['organize/currentOrganized']
      },
    },
    methods: {
      handleBeforeOpen({params}) {
        this.is_with_model = params.is_with_model
        this.procedure_type = params.procedure_type
        this.index = params.index
        this.row = params.row
        this.setProductDetails = params.setProductDetails
        this.cpv_type = params.cpv_type
      },
      save() {
        if(!this.$v.row.$invalid) {
          this.setProductDetails(this.row, this.index);
          this.$modal.hide('products-details-modal')
        } else {
          this.$notify({
            group: 'foo',
            type: 'error',
            text: 'Լրացրեք տեխնիկական բնութագրեր դաշտը, պահպանելու համար!'
          })
        }
      }
    }
  }
</script>
<style scoped>
  @media (max-width: 768px) {
    .products-details-modal /deep/ .vm--modal #modal-body{
      height: calc(100% - 84px);
    }
  }
  @media (max-width: 345px) {
    .products-details-modal /deep/ .vm--modal #modal-body{
      height: calc(100% - 109px);
    }
  }
  #modal-body{
    padding-top: 17px;
    padding-bottom: 0px;
  }
  #modal-footer{
    text-align: center;
    padding-bottom: 30px;
  }
  .form-group{
    margin-bottom: 28px;
  }
</style>