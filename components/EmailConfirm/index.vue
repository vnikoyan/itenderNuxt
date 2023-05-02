<template>
  <div class="custom-modal-layout">
    <div class="custom-modal">
      <div class="d-flex justify-content-end">
        <img @click="$emit('close')" class=" pointer" src="~/assets/landing/images/closeModal.svg" alt="close">
      </div>
      <div class="d-flex justify-content-center mt-12">
        <img src="~/assets/landing/images/done.svg" alt="icon">
      </div>
      <p class="content h4">Էլեկտրոնային հասցեն հաջողությամբ հաստատված է</p>
      <p v-if="errorMsgFromApi" class="text-center text-danger mb-0 mt-2">Հղման ժամկետը լրացել է </p>
      <div class="mt-36">
        <button @click="goToLogin" tag="button" class="button_H48 w-100">Մուտք գործել</button>
      </div>
    </div>
  </div>
</template>
<!-- <style lang="scss" scoped>
  @import '@/assets/styles/main.scss';
</style> -->

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'EmailConfirm',
  components: {  },
  data () {
    return {
      errorMsgFromApi: '',
    }
  },
  mounted(){
    if(this.$route.params.token){
      this.$client.post('user/account/activate', {token: this.$route.params.token}).then((response) => {
        console.log(response)
      })
    }
  },
  methods: {
    goToLogin(){
      document.body.style.overflowY = "scroll"
      this.$router.push('/login');
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
