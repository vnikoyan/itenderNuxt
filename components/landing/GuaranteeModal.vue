<template>
  <modal
    class="guarantee-modal"
    name="guarantee-modal"
    @before-open="beforeOpen"
    transition="fade"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    width="30%"
    height="60%"
  >
    <div id="modal-header" class="action-modal">
      <div class="w-75 d-flex">
        <p>Տվյալներն ուղարկել ՎՏԲ-Հայաստան Բանկ</p>
      </div>
      <button type="button"
              class="close position-absolute"
              style="right: 1.25rem; top: 25%"
              @click="$modal.hide('guarantee-modal')"
              aria-label="Close"
      >
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.64102L14.859 0L8.49997 6.359L2.14102 4.62582e-05L0.5 1.64107L6.85895 8.00002L0.500034 14.3589L2.14105 16L8.49997 9.64104L14.8589 16L16.5 14.359L10.141 8.00002L16.5 1.64102Z" fill="#ABAEB8"/>
          </svg>
      </button>
    </div>
    <div id="modal-body">
      <div class="form-group">
        <float-label>
          <input v-model="$v.name.$model" type="text" class="form-control" id="name" placeholder="Անվանում">
        </float-label>
      </div>
      <div class="form-group">
        <float-label>
          <input v-model="$v.director_name.$model" type="text" class="form-control" id="director_name" placeholder="Տնօրենի Անուն Ազգանուն">
        </float-label>
      </div>
      <div class="form-group">
        <float-label>
          <input v-model="$v.phone.$model" type="text" class="form-control" id="phone" placeholder="Հեռախոսահամարը">
        </float-label>
      </div>
    </div>
    <div id="modal-footer" class="text-center">
      <button @click="send" class="btn btn-primary br-8">
        <span>Դիմել</span>
      </button>
    </div>
  </modal>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'GuaranteeModal',
  data () {
    return {
      name : null,
      director_name : null,
      phone : null,
    }
  },
  validations: {
    name : { required },
    director_name : { required },
    phone : { required },
  },
  mounted(){
    if(this.me.organisation){
      if(this.me.organisation[0].translations.company_type.hy){
        this.name = `${this.me.organisation[0].translations.name.hy} «${this.me.organisation[0].translations.company_type.hy}»`;
      } else {
        this.name = this.me.organisation[0].translations.name.hy;
      }
      this.director_name = this.me.organisation[0].translations.director_name.hy;
      this.phone = this.me.phone;
    }
  },
  watch: {
    me(){
      if(this.me.organisation){
        if(this.me.organisation[0].translations.company_type.hy){
          this.name = `${this.me.organisation[0].translations.name.hy} «${this.me.organisation[0].translations.company_type.hy}»`;
        } else {
          this.name = this.me.organisation[0].translations.name.hy;
        }
        this.director_name = this.me.organisation[0].translations.director_name.hy;
        this.phone = this.me.phone;
      }
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
    send(){
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const requestData ={
          name: this.name,
          director_name: this.director_name,
          phone: this.phone,
        }
        this.$client.post('send/email/guarantee', requestData).then(({data}) => {
          this.$notify({
            group: 'foo',
            type: 'success',
            text: 'Դուք հաջողությամբ դիմեցիք երաշխիքի համար'
          })
          this.$modal.hide('guarantee-modal')
        })
      } else {
        this.$notify({
          group: 'foo',
          type: 'error',
          text: 'Լրացրեք բոլոր դաշտերը պահպանելու համար!'
        })
      }
    },
    beforeOpen() {
      
    },
  }
}
</script>
<style scoped>
  .form-group{
    margin: 32px 0px;
  }
  .purchase-btn{
    cursor: pointer;
  }
</style>

