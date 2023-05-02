<template>
    <div class="banner-block" @click="bannerClick">
        <iframe src="https://api.itender.am/banner/" height="300" width="400"></iframe>
        <!-- <a target="_blank" href="https://www.vtb.am/am/business/financial-tool/bank-guarantee">
            <img src="~/assets/landing/images/banners/vtb.png" alt="vtb europe banner" class="vtb_desktop w-100 h-100">
            <img src="~/assets/landing/images/banners/vtb_mobile.png" alt="vtb europe banner" class="vtb_mobile w-100 h-100">
        </a> -->
    </div>
    <!-- <a class="d-flex w-100 justify-content-center vtb-state m-0 p-0 h-100" href="https://www.vtb.am/" target="_blank"> -->
        <!-- <img src="~/assets/landing/images/banners/vtb.png" alt="vtb europe banner" class="vtb_desktop w-100 h-100"> -->
        <!-- <img src="~/assets/landing/images/Frame.svg" alt="vtb europe banner" class="vtb_desktop w-100 h-100">
        <img src="~/assets/landing/images/Frame 17.png" alt="vtb" class="vtb_mobile"> -->
    <!-- </a> -->
</template>

<script>
    export default {
        name: 'VtbBanner',
        data(){
            return{
                serverUrl: process.env.VUE_APP_URL,
                key: 0,
            }
        },
        watch: {
            key (value) {
                const _this = this
                document.getElementById("theiframe").contentWindow.document.getElementById("vtb_banner").addEventListener("click", function(){
                    _this.sendRequest()
                });
            }
        },
        methods: {
            bannerClick(){
                this.$client.post('/banner/click')
            },
            iframeIsLoaded () {
                this.key = this.key + 1;
            },
            sendRequest () {
                this.$client.post('banner/click')
            },
        }
    }
</script>
<style>
.banner-block{
    /* background: transparent; */
    background-image: url('https://api.itender.am/banner/bg.jpg');
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 25px;
    height: 100%;
    /* box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05); */
    display: flex;
    /* justify-content: center; */
    /* padding: 20px; */
}
.banner-block img{
    border-radius: 25px;
}
.banner-block iframe{
    /* border-radius: 12px; */
    border-radius: 25px;
    border: none;
}
</style>
