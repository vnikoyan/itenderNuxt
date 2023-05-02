<template>
  <div class="cpv-detail-block">
    <p><span class="cpv-detail-code">{{ cpvCode }}</span> - {{cpvName}}</p>
    <div class="padding-t-20">
      <div class="w-100 d-flex justify-content-between align-items-center pt-3 pb-1">
        <span>Անվանում</span>
        <span>
          <input
            type="text"
            v-model="$v.fields.cpvName.$model"
            class="form-control"
          />
        </span>
      </div>
      <div class="w-100 d-flex justify-content-between align-items-center pt-3 pb-1">
        <span>Անվանում ռուսերեն</span>
        <span>
          <input
            type="text"
            v-model="$v.fields.cpvNameRu.$model"
            class="form-control"
          />
        </span>
      </div>
      <div class="w-100 d-flex justify-content-between align-items-center pt-3 pb-1">
        <span>Միավորի գին</span>
        <span>
          <input
            type="number"
            v-model="$v.fields.unitAmount.$model"
            class="form-control"
          />
        </span>
      </div>
      <div class="w-100 d-flex justify-content-between align-items-center pt-3 pb-1">
        <span>Չափման միավոր</span>
        <span>
          <input
            type="text"
            v-model="$v.fields.unit.$model"
            class="form-control"
          />
        </span>
      </div>
       <div class="w-100 d-flex justify-content-between align-items-center pt-3 pb-1">
        <span>Չափման միավոր (ռուսերեն)</span>
        <span>
          <input
            type="text"
            v-model="$v.fields.unitRu.$model"
            class="form-control"
          />
        </span>
      </div>
      <div class="w-100 d-flex justify-content-between align-items-center pt-3 pb-1">
        <span>Քանակ</span>
        <span>
          <input
            type="number"
            v-model="$v.fields.plannedCount.$model"
            class="form-control"
          />
        </span>
      </div>
      <div class="w-100 d-flex justify-content-between align-items-center pt-3 pb-1">
        <span>Բնութագիր</span>
        <div class="btn-group">
          <div v-if="cpvSpecification" class="dropdown">
            <button 
              class="btn btn-light dropdown-toggle br-8 mr-3"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cpvSpecification.description ? _.truncate(cpvSpecification.description.hy, {'length': 30, 'separator': ' '}) : '' }}
            </button>
            <div
              class="dropdown-menu p-3 dropdown-menu-right card"
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
              class="btn btn-secondary text-white br-8"
              id="dropdownMenuButtonEdit"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-edit text-white"></i>
            </button>
            <div
              class="dropdown-menu p-3 dropdown-menu-right card"
              aria-labelledby="dropdownMenuButtonEdit"
              style="max-height: 20rem; overflow-y: auto;  min-width: 22rem;"
            >
              <textarea
                class="form-control br-8"
                v-model="$v.fields.cpvSpecification.description.hy.$model"
              />
              <hr/>
              <div class="d-flex">
                <div class="col p-0">
                  <textarea
                    class="form-control br-8"
                    v-model="$v.fields.cpvSpecification.description.ru.$model"
                  />
                </div>
                <div class="col-auto pr-0">
                  <button @click="saveSpecification" class="btn btn-primary my-2 br-8">
                    <i class="fas fa-save text-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-right">
      <button @click="save" class="btn btn-primary mt-3">
        <i class="fas fa-save mr-2 text-white"></i>
        <span class="text-white">Պահպանել</span>
      </button>
    </div>
  </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'LotDetailsForm',
    props: [
      'cpvCode',
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
    mounted() {
      this.fields.unitAmount = this.unitAmount;
      this.fields.unit = this.unit;
      this.fields.unitRu = this.unitRu;
      this.fields.plannedCount = this.plannedCount;
      this.fields.cpvSpecification = this.cpvSpecification;
      this.fields.cpvName = this.cpvName;
      this.fields.cpvNameRu = this.cpvNameRu;
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
