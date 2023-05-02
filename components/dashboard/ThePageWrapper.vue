<template>
  <div class="page-wrapper">
    <div class="page-content-tab content-block" :class="pageTabClass()" :style="pageContentWidth">
        <div class="row m-0 p-0 content-block-row flex-row">
            <div v-if="!isWithSpecificHeader()" class="col-12 p-0" style="height: fit-content;">
                <div class="page-title-box-spacing">
                    <div v-if="me.organisation" class="d-flex align-items-center name-header" :class="isMobile ? 'justify-content-center' : 'topbar-right-spacing' ">
                        <div v-if="$route.fullPath === '/settings'">
                            <div v-if="userType === 'STATE'">
                                <p>
                                «{{ me.organisation[0].translations.name.hy }}»
                                <template v-if="me.organisation[0].translations.company_type.hy">
                                {{ me.organisation[0].translations.company_type.hy }}
                                </template>
                                <br>
                                {{ me.name }}
                                </p>
                            </div>
                            <div v-else>
                                <p>
                                <template v-if="me.organisation[0].translations.company_type.hy">
                                    «{{ me.name }}» 
                                    {{ me.organisation[0].translations.company_type.hy }}
                                </template>
                                <template v-else>
                                    {{ me.name }}
                                </template>
                                </p>
                            </div>
                        </div>
                        <div v-else>
                            {{$route.name[$route.name.length-1]}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 p-0" :class="!isWithSpecificHeader() ? 'content-height' : 'h-100'">
                <div class="slot h-100">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import isMobile from '@/mixins/isMobileView'
export default {
    mixins: [isMobile],
    data(){
        return{
            checkWidth : null,
        }
    },
    props: ['pageTitle', 'innerMenuWidth'],
    computed: {
        userType(){
          return this.$store.getters.userType
        },
        me() {
            return this.$store.getters['user/me']
        },
        pageContentWidth() {
            return this.$store.getters['settings/innerMenuIsClosed']
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    mounted(){
      if(window.innerWidth <= 1200){
        this.checkWidth = false
      }else{
        this.checkWidth = true
      }
    },
    methods: {
        pageTabClass(){
            if(_.startsWith(this.$route.path, '/organizator/itender/prepare-invitation') 
                || _.startsWith(this.$route.path, '/organizator/itender')
                || _.startsWith(this.$route.path, '/organizator/tenders/add')
                || _.startsWith(this.$route.path, '/dashboard')
            ){
                return 'page-content-tab-scroll';
            } else{
                return 'page-content-tab';
            }
        },
        isWithSpecificHeader(){
            if(_.startsWith(this.$route.path, '/organizator/tenders/edit') 
                || _.startsWith(this.$route.path, '/participant/contract-management')
                || _.startsWith(this.$route.path, '/organizator/contract-management')
                || _.startsWith(this.$route.path, '/organizator/itender')
            ){
                return true;
            }
            switch (this.$route.fullPath) {
                case '/participant/suggestions/all':
                case '/participant/suggestions/accepted':
                case '/participant/suggestions/signature':
                case '/organizator/tenders/add':
                case '/organizator/tenders/edit':
                case '/analysis':
                    return true;
                default:
                    return false;
            }
        },
        myEventHandler(e) {
            if(e.target.innerWidth <= 1200){
               this.checkWidth = false
            }else{
                this.checkWidth = true
            }
        },
        consoleLog(data){
            console.log(data)
        },
    }
}
</script>