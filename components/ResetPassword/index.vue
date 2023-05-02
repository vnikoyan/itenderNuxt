<template>
  <div class="custom-modal-layout">
    <div class="custom-modal">
      <div class="d-flex justify-content-end">
        <img @click="$emit('close')" src="~/assets/landing/images/closeModal.svg" class=" pointer" alt="close">
      </div>
      <form class="pt-4">
        <span 
          v-if="errorMsgFromApi" 
          class="mb-3 d-block w-100 text-center text-danger" 
        >
            Հղման ժամկետը լրացել է 
        </span>
        <p class="modal-register-title mb-4 h1">Մուքագրեք նոր գաղտնաբառը</p>
        <div class="form-row">
          <div class="col-md-12 px-md-3">
            <client-only>
            <float-label :dispatch="false">
              <input
                id="password"
                autocomplete="true"
                v-model="$v.fields.password.$model"
                type="password"
                :placeholder="$t('state_customer.pl_password')"
                class="tender-input"
                :class="{'border-danger': isInvalidField('password', 'required') || isInvalidField('password', 'minLength')}"
                name="password"
              />
            </float-label>
            </client-only>
            <div v-if="isInvalidField('password', 'required')" class="small text-danger">{{ $t('state_customer.valid_1') }}</div>
            <div v-if="isInvalidField('password', 'minLength')" class="small text-danger"> {{ $t('state_customer.valid_4') }}</div>
          </div>
          <div class="col-md-12 px-md-3 mb-3">
            <client-only>
            <float-label :dispatch="false">
              <input
                id="repeat-password"
                autocomplete="true"
                v-model="$v.fields.password_confirmation.$model"
                type="password"
                :placeholder="$t('state_customer.repeat_pl_password')"
                class="tender-input"
                :class="{'border-danger': isInvalidField('password_confirmation', 'required') || isInvalidField('password_confirmation', 'sameAsPassword')}"
                name="repeat-password"
              />
            </float-label>
            </client-only>
            <div v-if="isInvalidField('password_confirmation', 'required')" class="small text-danger">{{ $t('state_customer.valid_1') }}</div>
            <div v-if="isInvalidField('password_confirmation', 'sameAsPassword')" class="small text-danger">{{ $t('state_customer.valid_5') }}</div>
          </div>
        </div>
        <div class="row justify-content-center">
            <button 
              @click.prevent="confirm"
              class="btn btn-primary br-8"
            >
              <span>Հաստատել</span>
            </button>
        </div>
      </form>
    </div>
  </div>
</template>
<!-- <style lang="scss" scoped>
  @import '@/assets/styles/main.scss';
</style> -->

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'ResetPassword',
  components: {  },
  data () {
    return {
      showSignupModal: false,
      showResetPasswordModal: false,
      fields: {
        password: '',
        password_confirmation: '',
        token: this.$route.params.passwordToken,
      },
      rememberMe: true,
      errorMsgFromApi: '',
      isLoginPending: false,
      isErrorShake: false,
    }
  },
  computed: {
    passwordRequired () {
      return this.$v.fields.password.$dirty && !this.$v.fields.password.required
    }
  },
  methods: {
    isInvalidField (pathToField, validator) {
      const keyArr = pathToField.split('.')
      const field = keyArr.reduce((acc, key) => {
        return acc[key]
      }, this.$v.fields)
      return validator === 'required' ?
        field.$dirty && !field.required :
        field.required && !field[validator]
    },
    confirm () {
      this.$v.fields.$touch()
      if (!this.$v.fields.$invalid) {
        this.isLoginPending = true
        this.$client.post(`forgot/password`, {
          token: this.$route.params.token, ...this.fields
        }) .then(({data}) => {
          this.isLoginPending = false
          if (data.status) {
            this.$router.push({ path: '/login' })
          }
        }).catch(({data}) => {
          this.errorMsgFromApi = data.message
        })
        // this.$store.dispatch('auth', {
        //   url: 'login',
        //   fields: this.fields,
        //   rememberMe: this.rememberMe
        // })
        // .then(response => {
        //   this.isLoginPending = false
        //   if (response.message === "Login Failed") {
        //     console.log(response)
        //     this.isErrorShake = true
        //     setTimeout(() => {
        //       this.isErrorShake = false
        //     }, 700)
        //     this.errorMsgFromApi = response.message
        //   } else {
        //     this.$router.push({ path: '/dashboard' })
        //   }
        // })
      }
    }
  },
  validations: {
    fields: {
      password: { required, minLength: minLength(6) },
      password_confirmation: { required, sameAsPassword: sameAs('password') },
    }
  }
}
</script>

<style scoped>
  .custom-modal-layout{
    background: rgba(14, 15, 18, 0.4);
    backdrop-filter: blur(8px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
    width: 100vw;
    height: 100vh;
  }
  .custom-modal{
    background: #FFFFFF;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.03);
    border-radius: 24px;
    position: absolute;
    top: 50%; 
    left: 50%;
    z-index: 99999;
    transform: translate(-50%, -50%);
    padding: 24px;
    width: 378px;
  }
  .mt-12{
    margin-top: 12px;
  }
  .mt-36{
    margin-top: 36px;
  }
  .pointer{
    cursor: pointer;
  }
  .content{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #40444D;
    margin-top: 24px;
  }
  .shake {
    animation: shake 0.7s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
  }
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @media only screen and (max-width: 420px) {
    .custom-modal{
      width: calc(100% - 40px);
      margin: 0 auto;
    }
  }
</style>
