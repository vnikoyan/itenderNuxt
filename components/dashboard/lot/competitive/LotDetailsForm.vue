<template>
  <div>
    <h4>{{ headerTitle }} ({{ headerTitleRu }})</h4>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Անվանում</span>
      <span>
        <input
          type="text"
          v-model="$v.fields.cpvName.$model"
          class="form-control"
        />
      </span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Անվանում ռուսերեն</span>
      <span>
        <input
          type="text"
          v-model="$v.fields.cpvNameRu.$model"
          class="form-control"
        />
      </span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Միավորի գին</span>
      <span>
        <input
          type="number"
          v-model="$v.fields.unitAmount.$model"
          class="form-control"
        />
      </span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Չափման միավոր</span>
      <span>
        <input
          type="text"
          v-model="$v.fields.unit.$model"
          class="form-control"
        />
      </span>
    </div>
     <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Չափման միավոր (ռուսերեն)</span>
      <span>
        <input
          type="text"
          v-model="$v.fields.unitRu.$model"
          class="form-control"
        />
      </span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Քանակ</span>
      <span>
        <input
          type="number"
          v-model="$v.fields.plannedCount.$model"
          class="form-control"
        />
      </span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Բնութագիր</span>
      <div class="btn-group">
        <div v-if="cpvSpecification" class="dropdown">
          <button 
            class="btn btn-light  dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ cpvSpecification.description ? _.truncate(cpvSpecification.description.hy, {'length': 30, 'separator': ' '}) : '' }}
          </button>
          <div
            class="dropdown-menu p-3 dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
            style="max-height: 20rem; overflow-y: auto;  min-width: 22rem;"
          >
            {{ cpvSpecification.description ? cpvSpecification.description.hy : '' }}
            <hr/>
            <p class="mt-1">
              {{ cpvSpecification.description ? cpvSpecification.description.ru : '' }}
            </p>
          </div>
        </div>
        <div v-if="cpvSpecification" class="dropdown">
          <button
            type="button"
            class="btn btn-info dropdown-toggle"
            id="dropdownMenuButtonEdit"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ml-1 fas fa-edit"></i>
          </button>
          <div
            class="dropdown-menu p-3 dropdown-menu-right"
            aria-labelledby="dropdownMenuButtonEdit"
            style="max-height: 20rem; overflow-y: auto;  min-width: 22rem;"
          >
            <textarea
              class="form-control br-8"
              v-model="$v.fields.cpvSpecification.description.hy.$model"
            />
            <hr/>
            <div class="row">
              <div class="col-10">
                <textarea
                  class="form-control br-8"
                  v-model="$v.fields.cpvSpecification.description.ru.$model"
                />
              </div>
              <div class="col-2">
                <button @click="saveSpecification" class="btn btn-primary my-2">
                  <i class="fas fa-save"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <!--              <span v-if="showExpandedSpecs" class="position-absolute">{{ cpvSpecification.description }}</span>-->
    </div>

    <div v-if="+currentOrganized.cpv_type === 1" class="my-3">
      <div class="form-check form-check-inline mb-2 mt-5">
        <input v-model="$v.fields.isMainTool.$model" type="checkbox"
                class="form-check-input"
                id="is֊main֊tool"
                :true-value="1"
                :false-value="0">
        <label class="form-check-label"
                for="is֊main֊tool">Հանդիսանում է հիմնական միջոց</label>
      </div>

      <div class="form-check form-check-inline">
        <input v-model="$v.fields.isProductInfo.$model"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                class="form-check-input"
                id="is֊product֊info"
                data-parsley-multiple="groups"
                data-parsley-mincheck="2">
        <label class="form-check-label"
                for="is֊product֊info">Մասնակցի կողմից առաջարկվող ապրանքի, ապրանքային նշանի, ֆիրմային անվանման,
          մակնիշի և արտադրողի անվանման և ծագման երկրի վերաբերյալ տեղեկատվության ներկայացում</label>
      </div>
    </div>

    <button @click="save" class="btn btn-primary mt-3">
      <i class="fas fa-save mr-1"></i> Պահպանել
    </button>
  </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'LotDetailsForm',
    props: [
      'isMainTool',
      'isProductInfo',
      'headerTitle',
      'unit',
      'unitRu',
      'headerTitleRu',
      'unitAmount',
      'plannedCount',
      'cpvSpecification',
      'rowDetails',
      'cpvName',
      'cpvNameRu'
    ],
    data() {
      return {
        fields: {
          isMainTool: '',
          isProductInfo: '',
          unit: '',
          unitRu: '',
          cpvName: '',
          cpvNameRu: '',
          unitAmount: '',
          plannedCount: '',
          cpvSpecification: {
            description: {
              hy: '',
              ru: ''
            }
          },
        },
      }
    },
    validations() {
      return {
        fields: {
          isMainTool: { required },
          isProductInfo: { required },
          unit: { required },
          unitRu: { required },
          cpvName: { required },
          cpvNameRu: { required },
          unitAmount: { required },
          plannedCount: { required },
          cpvSpecification: {
            description: {
              hy: { required },
              ru: { required }
            }
          },
        },
      }
    },
    computed: {
      currentOrganized() {
        return this.$store.getters['organize/currentOrganized']
      }
    },
    mounted() {
      this.fields.unitAmount = this.unitAmount;
      this.fields.unit = this.unit;
      this.fields.unitRu = this.unitRu;
      this.fields.plannedCount = this.plannedCount;
      this.fields.cpvSpecification = this.cpvSpecification;
      this.fields.cpvName = this.cpvName;
      this.fields.cpvNameRu = this.cpvNameRu;
      this.fields.isMainTool = this.isMainTool;
      this.fields.isProductInfo = this.isProductInfo;
    },
    methods: {
      consoleLog(data){
        console.log(data)
      },
      save(){
        this.$client.post(`organize-row/updateInfo/${this.rowDetails.id}`, this.fields).then(response => {
          this.$emit('save')
          console.log(response)
        })
      },
      saveSpecification(){
        this.$client.put(`cpv/specifications/${this.cpvSpecification.id}`, this.fields.cpvSpecification).then(response => {
          console.log(response)
        })
      },
    }
  }
</script>
